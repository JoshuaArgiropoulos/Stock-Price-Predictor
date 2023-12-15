from flask import Flask, render_template
from itsdangerous import URLSafeTimedSerializer

app = Flask(__name__)

#---------------------------General buttons on website ------------------------

@app.route('/')
def home():
    return render_template('home.html')



@app.route('/services')  # Updated URL pattern
def services():
    return render_template('Service.html')

@app.route('/about')  # Updated URL pattern
def about():
    return render_template('about.html')

@app.route('/SignOn')  # Updated URL pattern
def sign_on():
    return render_template('SignOn.html')

@app.route('/SignUp')
def sign_up():
    return render_template('SignUp.html')

@app.route('/stock_info')
def stock_info():
    # Simulated data for demonstration
    stock_data = {
        'symbol': 'AAPL',
        'open': 150.0,
        'high': 155.0,
        'low': 148.5,
        'close': 152.0,
        'volume': 1000000,
    }
    return render_template('stock_info.html', stock_data=stock_data)

#---------------------------Mail Features -------------------------------------------------------



# Initialize the serializer with your app secret key
serializer = URLSafeTimedSerializer(app.secret_key)

@app.route('/register', methods=['POST'])
def register():
    # Process registration form
    # ...

    # Create a verification token
    token = serializer.dumps(user.email, salt='email-confirm')

    # Build the verification URL
    verification_url = url_for('confirm_email', token=token, _external=True)

    # Send the verification email
    send_verification_email(user.email, verification_url)

    return "Registration successful. Please check your email for verification instructions."

def send_verification_email(email, verification_url):
    subject = "Confirm Your Email"
    message = render_template('verification_email.html', verification_url=verification_url)

    msg = Message(subject, recipients=[email], html=message)
    mail.send(msg)

@app.route('/confirm_email/<token>')
def confirm_email(token):
    try:
        email = serializer.loads(token, salt='email-confirm', max_age=3600)  # 1 hour expiration
    except Exception as e:
        return "Invalid or expired token."

    # Mark the user as verified in your database
    # ...

    return "Email verified successfully. You can now log in."


# ------------------------------------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)