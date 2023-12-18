from itsdangerous import URLSafeTimedSerializer
import plotly.graph_objects as go
import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, render_template, redirect, url_for, flash
from werkzeug.security import generate_password_hash
from flask_mail import Mail, Message
from flask_wtf import CSRFProtect


#app = Flask(__name__)
app = Flask(__name__, static_url_path='/static')
app.config.from_pyfile('config.py')
mail = Mail(app)
csrf = CSRFProtect(app)
# Optionally override configuration with environment variable
if os.environ.get('DATABASE_URI'):
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')




db = SQLAlchemy(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Your code to create the dynamic chart
def create_chart():
    chart_path = 'static/images/chart.html'
    if not os.path.exists(chart_path):
        fig = go.Figure(data=[go.Scatter(x=[1, 2, 3, 4], y=[10, 20, 25, 30])])
        fig.update_layout(title='Title of the Chart', xaxis_title='X-axis label', yaxis_title='Y-axis label')
        fig.write_html(chart_path)
#---------------------------General buttons on website ------------------------

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/trial')
def trial():
    return render_template('trial.html')

@app.route('/services') 
def services():
    return render_template('Service.html')

@app.route('/about')  
def about():
    return render_template('about.html')

@app.route('/SignOn')  
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

@app.route('/register', methods=['POST'])
def register():
    # Extract data from form
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    confirm_password = request.form.get('confirm_password')  # Make sure to add this to your form

    if password != confirm_password:
        flash('Passwords do not match.')
        return redirect(url_for('sign_up'))


    # Password hashing
    hashed_password = generate_password_hash(password)

    flash('Registration successful! Please check your email.', 'success')
    # Redirect to a different page after successful registration, e.g., login page
    return redirect(url_for('sign_on'))
    

    
    # Process registration form
    
def send_confirmation_email(user_email, token):

@app.route('/confirm_email/<token>')
def confirm_email(token):
    # Verify the token
    # Activate the user's account if the token is valid
    # ...
    return 'Email confirmed successfully!'
    msg = Message('Confirm Your Email', sender='your_email@example.com', recipients=[user_email])
    confirm_url = url_for('confirm_email', token=token, _external=True)
    msg.body = 'Your confirmation link is: {}'.format(confirm_url)
    mail.send(msg)
# ------------------------------------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)