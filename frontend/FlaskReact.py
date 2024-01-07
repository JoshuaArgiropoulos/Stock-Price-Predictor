import yfinance as yf
from flask import Flask, jsonify, request, send_from_directory, render_template, url_for
import requests
from flask_cors import CORS
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
from werkzeug.security import generate_password_hash, check_password_hash
import os
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__, static_folder='build', static_url_path='/')
app.config.from_pyfile('config.py')
CORS(app, resources={r"/api/*": {"origins": "https://thriveonfinance.netlify.app"}})


# Get the absolute path of the script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Create the full path to the credentials file
cred_path = os.path.join(script_dir, 'thrive-on-finance-firebase-adminsdk-k4n82-ef12d6d0f5.json')

# Use the relative path for the credentials
cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred)

# Now you can create a Firestore client
db = firestore.client()

mail = Mail(app)

# Session(app)
# login_manager = LoginManager()
# login_manager.init_app(app)

NEWS_API_KEY = app.config['NEWS_API_KEY']
s = URLSafeTimedSerializer(app.config['SECRET_KEY'])

class User:
    def __init__(self, username, email, password_hash, is_active=False):
        self.username = username
        self.email = email
        self.password_hash = password_hash
        self.is_active = is_active

    def get_id(self):
        return str(self.id)
#----------------------User loader---------------------------
# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.get(int(user_id))
#------------------App start------------------------

@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')
#----------------------------------SignUp---------------------------------------------------------
@app.route('/api/SignUp', methods=['POST'])
def api_sign_up():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    users_collection = db.collection('users')
    existing_user_by_username = users_collection.where('username', '==', username).get()
    existing_user_by_email = users_collection.where('email', '==', email).get()

    if any(existing_user_by_username) or any(existing_user_by_email):
        return jsonify({"message": "User with given username or email already exists"}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, email=email, password_hash=hashed_password)
    users_collection.add(new_user.__dict__)
    token = s.dumps(email, salt='email-confirm-salt')
    send_confirmation_email(email, token)

    return jsonify({"message": "User registered successfully"}), 201

#------------------------------------------Email---------------------------------------------------
def send_confirmation_email(user_email, token):
    confirm_url = url_for('confirm_email', token=token, _external=True)
    msg = Message('Confirm Your Email',
                  sender='ThriveOnFinance@gmail.com',
                  recipients=[user_email])
    msg.body = f'Your confirmation link is: {confirm_url}'
    mail.send(msg)
#---------------------------------------Confirm Email-----------------------------------------------
@app.route('/confirm_email/<token>')
def confirm_email(token):
    try:
        user_email = s.loads(token, salt='email-confirm-salt', max_age=3600)  # 1-hour expiration

        # Query Firestore for the user with the given email
        users_collection = db.collection('users')
        user_document = users_collection.where('email', '==', user_email).get()

        if user_document:
            user_ref = users_collection.document(user_document[0].id)
            user_ref.update({'is_active': True})
            return 'Email confirmed successfully!'
        else:
            return 'User not found'
    except:
        return 'The confirmation link is invalid or has expired.'
#-----------------------------------------Login-------------------------
@app.route('/api/SignOn', methods=['POST'])
def api_sign_on():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    users_collection = db.collection('users')
    user_document = users_collection.where('username', '==', username).get()

    if not user_document:
        return jsonify({"message": "User not found"}), 404

    user_data = user_document[0].to_dict()
    if not check_password_hash(user_data['password_hash'], password):
        return jsonify({"message": "Invalid password"}), 401

    # Assuming you handle sessions and logins in another way with Firebase
    # login_user(user)

    return jsonify({"message": "Login successful", "user": user_data}), 200
#------------------------------------------Logout-----------------------------------
@app.route('/logout')
# @login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"}), 200

#-------------------------------Change Password -------------------------------------------
@app.route('/api/change_password', methods=['POST'])
def change_password():
    data = request.get_json()
    username = data.get('username')
    current_password = data.get('currentPassword')
    new_password = data.get('newPassword')

    users_collection = db.collection('users')
    user_document = users_collection.where('username', '==', username).get()

    if user_document:
        user_data = user_document[0].to_dict()
        user_ref = users_collection.document(user_document[0].id)

        if check_password_hash(user_data['password_hash'], current_password):
            new_hashed_password = generate_password_hash(new_password)
            user_ref.update({'password_hash': new_hashed_password})
            return jsonify({"message": "Password changed successfully"}), 200
        else:
            return jsonify({"message": "Current password is incorrect"}), 401
    else:
        return jsonify({"message": "User not found"}), 404
#-----------------------------------------Get User info ------------------------------
@app.route('/api/user_profile', methods=['GET'])
# @login_required
def get_user_profile():
    user = current_user
    if user:
        user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
        }
        return jsonify({'user': user_data}), 200
    else:
        return jsonify({'message': 'User not found'}), 404
#----------------------------Dashboard---------------------------------------------
@app.route('/dashboard')
# @login_required
def dashboard():
    return jsonify({"message": "Welcome to the dashboard!"})
# -----------------------News API-------------------------------------------------
@app.route('/api/financial-news')  
def financial_news():
    NEWS_API_ENDPOINT = 'https://newsapi.org/v2/top-headlines'
    params = {
        'apiKey': NEWS_API_KEY,
        'category': 'business',
        'language': 'en',
        'pageSize': 10
    }

    try:
        # Use 'requests' instead of 'request'
        response = requests.get(NEWS_API_ENDPOINT, params=params)  # Correct the method name
        response.raise_for_status()  # This will raise an HTTPError if the HTTP request returned an unsuccessful status code
        news_data = response.json()
        articles = news_data.get('articles', [])
        return jsonify(articles)
    except requests.exceptions.HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
        return jsonify({'error': 'An error occurred while fetching news data.'}), 500
    except Exception as err:
        print(f'An error occurred: {err}')
        return jsonify({'error': 'An internal server error occurred.'}), 500

#---------------------------------------------------------------------------------
#----------------------STOCKS-----------------------------------------------------
@app.route("/api/stock-info/<ticker>", methods=["GET"])
def get_stock_info(ticker):
    try:
        end_date = request.args.get("end_date")
        start_date = request.args.get("start_date")  # Get the start date, which may be None or ''

        # If the start date is empty, set it to None to fetch the entire history
        if not start_date:
            start_date = None

        # Fetch historical stock data using yfinance
        df = yf.download(ticker, start=start_date, end=end_date)

        if df.empty:
            return jsonify({"error": "Stock not found"}), 404

        df.reset_index(inplace=True)
        historical_data = df[["Date", "Close"]]
        historical_data_list = historical_data.to_dict(orient="records")

        return jsonify({"data": historical_data_list})
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500


#-----------------------------------------------------------------------------------------------
if __name__ == '__main__':
    # with app.app_context():
    #     # Create tables for our models
    #     db.create_all()
    app.run(debug=False)