from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

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

if __name__ == '__main__':
    app.run(debug=True)