from itsdangerous import URLSafeTimedSerializer
import plotly.graph_objects as go
import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, render_template, redirect, url_for, flash, session
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mail import Mail, Message
from flask_wtf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Email, EqualTo
import requests
#from datetime import datetime


app = Flask(__name__, static_url_path='/static')
app.config.from_pyfile('config.py')
mail = Mail(app)
csrf = CSRFProtect(app)
# Optionally override configuration with environment variable
if os.environ.get('DATABASE_URI'):
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')

db = SQLAlchemy(app)
# Token Serializer Initialization
s = URLSafeTimedSerializer(app.config['SECRET_KEY'])
NEWS_API_KEY = app.config['NEWS_API_KEY']

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255))
    is_active = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return '<User %r>' % self.username
    
class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired()])
    email = StringField('Email', validators=[InputRequired(), Email()])
    password = PasswordField('Password', validators=[InputRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[
        InputRequired(),
        EqualTo('password', message='Passwords must match.')
    ])

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])
    submit = SubmitField('Log In')
# def time_ago(time=False):
#     """
#     A filter to format datetime as a 'time ago' string.
#     """
#     if type(time) is str:
#         time = datetime.strptime(time, '%Y-%m-%dT%H:%M:%SZ') # Adjust the format as needed

#     now = datetime.now()
#     diff = now - time
#app.jinja_env.filters['time_ago'] = time_ago
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

@app.route('/SignOn', methods=['GET', 'POST'])
def sign_on():
    form = LoginForm()
    if form.validate_on_submit():  # This checks both POST method and form validation
        # Query database for user
        user = User.query.filter_by(username=form.username.data).first()
        
        # Check if user exists and password is correct
        if user and check_password_hash(user.password_hash, form.password.data):
            # You can add a session or any other login mechanism here
            session['user_id'] = user.id
            # Redirect to a different page on successful login
            return redirect(url_for('dashboard'))  # Ensure you have a 'dashboard' route defined
        else:
            # Flash a message if login details are incorrect
            flash('Invalid username or password')

    return render_template('SignOn.html', form=form)

@app.route('/SignUp')
def sign_up():
    form = RegistrationForm()
    return render_template('SignUp.html', form=form)

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

@app.route('/dashboard')
def dashboard():
    # Ensure user is logged in, otherwise redirect to login page
    if 'user_id' not in session:
        return redirect(url_for('sign_on'))

    user_id = session['user_id']
    user = User.query.get(user_id)
    if user:
        return render_template('dashboard.html', username=user.username)
    else:
        # Handle the case where the user doesn't exist
        return redirect(url_for('sign_on'))

@app.route('/investment')
def investmentInfo():
    return render_template('investment.html')

#---------------------------Mail Features -------------------------------------------------------

@app.route('/register', methods=['POST'])
def register():
    form = RegistrationForm(request.form)
    if form.validate_on_submit():
        # Extract data from form
        username = form.username.data
        email = form.email.data
        password = form.password.data

        # Check if username or email already exists
        existing_user_by_username = User.query.filter_by(username=username).first()
        existing_user_by_email = User.query.filter_by(email=email).first()

        if existing_user_by_username:
            flash('A user with that username already exists. Please choose a different username.')
            return redirect(url_for('sign_up'))

        if existing_user_by_email:
            flash('A user with that email already exists. Please choose a different email.')
            return redirect(url_for('sign_up'))

        # Hash the password
        hashed_password = generate_password_hash(password)

        # Create new user and save to database
        new_user = User(username=username, email=email, password_hash=hashed_password)
        db.session.add(new_user)

        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()  # Rollback the session to a clean state
            flash('An error occurred while registering. Please try again.')
            return redirect(url_for('sign_up'))

        # Send confirmation email
        token = s.dumps(new_user.id, salt='email-confirm-salt')
        send_confirmation_email(email, token)

        flash('Registration successful! Please check your email to confirm your account.', 'success')
        return redirect(url_for('sign_on'))
    else:
        # Handle validation errors
        for field, errors in form.errors.items():
            for error in errors:
                flash("Error in {}: {}".format(
                    getattr(form, field).label.text, error
                ))

    # If validation fails, redirect back to the sign-up page
    return redirect(url_for('sign_up'))

    

    
    
    
def send_confirmation_email(user_email, token):
    msg = Message('Confirm Your Email', sender='postmaster@sandboxa07c204ac44d497f9fabdb2e82aa9181.mailgun.org', recipients=[user_email])
    confirm_url = url_for('confirm_email', token=token, _external=True)
    msg.body = 'Your confirmation link is: {}'.format(confirm_url)
    mail.send(msg)

@app.route('/confirm_email/<token>')
def confirm_email(token):
    try:
        user_id = s.loads(token, salt='email-confirm-salt', max_age=3600)  # 1 hour expiration
    except:
        return 'The confirmation link is invalid or has expired.'

    user = User.query.get(user_id)
    if user:
        user.is_active = True
        db.session.commit()
        return 'Email confirmed successfully!'
    else:
        return 'User not found'
    
  
# -----------------------News API-------------------------------------------------


@app.route('/Financial-News')
def financial_news():
    # Set up parameters for the News API request
    NEWS_API_ENDPOINT = 'https://newsapi.org/v2/top-headlines'
    params = {
        'apiKey': NEWS_API_KEY,
        'category': 'business',  # Fetch business and financial news
        'language': 'en',        # English language
        'pageSize': 10           # Number of articles per request
    }

    # Make the API request
    response = requests.get(NEWS_API_ENDPOINT, params=params)
    news_data = response.json()

    # Extract and pass the news articles to the template
    articles = news_data.get('articles', [])

    return render_template('Financial-News.html', articles=articles)




#---------------------------------------------------------------------------------

if __name__ == '__main__':
    app.run(debug=True)