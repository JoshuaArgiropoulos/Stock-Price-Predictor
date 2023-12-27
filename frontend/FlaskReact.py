import yfinance as yf
from flask import Flask, jsonify, request, send_from_directory, session, flash, render_template
import requests
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__, static_folder='build', static_url_path='/')
app.config.from_pyfile('config.py')
CORS(app)

db = SQLAlchemy(app)
mail = Mail(app)

NEWS_API_KEY = app.config['NEWS_API_KEY']
s = URLSafeTimedSerializer(app.config['SECRET_KEY'])

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255))
    is_active = db.Column(db.Boolean, default=False)

@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')
#----------------------------------Authentication---------------------------------------------------------

@app.route('/api/SignUp', methods=['POST'])
def api_sign_up():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    existing_user_by_username = User.query.filter_by(username=username).first()
    existing_user_by_email = User.query.filter_by(email=email).first()

    if existing_user_by_username or existing_user_by_email:
        return jsonify({"message": "User with given username or email already exists"}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(username=username, email=email, password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@app.route('/api/SignOn', methods=['POST'])
def api_sign_on():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        print(f"Received data: username={username}, password={password}")

        # Query all users from the User table
        users = User.query.all()

        # Loop through the users and print their information
        for user in users:
            print(f"User ID: {user.id}")
            print(f"Username: {user.username}")
            print(f"Email: {user.email}")
            print(f"Password Hash: {user.password_hash}")
            print(f"Is Active: {user.is_active}")
            print("\n")  # Add some whitespace between users

        # Find the user by username
        user = User.query.filter_by(username=username).first()

        if not user:
            return jsonify({"message": "User not found"}), 404

        # Check if the provided password matches the stored password hash
        if not check_password_hash(user.password_hash, password):
            return jsonify({"message": "Invalid password"}), 401

        # Authentication successful
        return jsonify({"message": "Login successful"}), 200

    except IntegrityError:
        # Handle any database integrity errors
        db.session.rollback()
        return jsonify({"message": "An error occurred while processing your request"}), 500
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
    with app.app_context():
        # Create tables for our models
        db.create_all()
    app.run(debug=True)