from flask import Flask, jsonify, request, send_from_directory, session, flash, render_template
import requests
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
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
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255))
    is_active = db.Column(db.Boolean, default=False)

@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Flask!"})


@app.route('/api/signup', methods=['POST'])
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
# -----------------------News API-------------------------------------------------
@app.route('/api/financial-news')  # Use lowercase and hyphens, not camelCase
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
if __name__ == '__main__':
    app.run(debug=True)