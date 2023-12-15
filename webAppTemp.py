import yfinance as yf
import streamlit as st
import pandas as pd
from sklearn.ensemble import RandomForestClassifier 
from sklearn.metrics import precision_score
from datetime import datetime, timedelta

sp500 = yf.Ticker("^GSPC")
sp500 = sp500.history(period = "max")

meta = yf.Ticker("META")
meta = meta.history(period = "max")

apple = yf.Ticker("AAPL")
apple = apple.history(period = "max")

amazon = yf.Ticker("AMZN")
amazon = amazon.history(period = "max")

netflix = yf.Ticker("NFLX")
netflix = netflix.history(period = "max")

google = yf.Ticker("GOOGL")
google = google.history(period = "max")

sp500.plot.line(y="Close",use_index=True)

del sp500["Dividends"]
del sp500["Stock Splits"]

del meta["Dividends"]
del meta["Stock Splits"]

del apple["Dividends"]
del apple["Stock Splits"]

del amazon["Dividends"]
del amazon["Stock Splits"]

del netflix["Dividends"]
del netflix["Stock Splits"]

del google["Dividends"]
del google["Stock Splits"]

# sp500["Tomorrow"] = sp500["Close"].shift(-1)
# sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)
# sp500 = sp500.loc["1990-01-01":].copy()

# sp500 = sp500.loc["1990-01-01":].copy()
# train = sp500.iloc[:-100]
# test = sp500.iloc[-100:]
# model = RandomForestClassifier(min_samples_split=1, random_state=1)
# predictors = ["Close", "Volume", "Open", "High", "Low"] 
# model.fit(train[predictors], train["Target"])
# RandomForestClassifier(min_samples_split = 2, random_state = 1)

# preds = model.predict(test[predictors])
# preds = pd.Series(preds, index = test.index)
# precision_score(test["Target"], preds)

# def predict(train, test, predictors, model):
#     #model.fit(train[predictors], train["Target"])
#     preds = model.predict(test[predictors])
#     preds = pd.Series(preds, index = test.index, name = "Predictions")
#     combined = pd.concat([test["Target"], preds], axis =1)
#     return combined
# def backtest(data, model, predictors, start = 2500, step = 250):
#     all_predictions = []

#     for i in range(start, data.shape[0], step):
#         train = data.iloc[0:i].copy()
#         test = data.iloc[i:(i+step)].copy()
#         predictions = predict(train,test, predictors,model)
#         all_predictions.append(predictions)
#     return pd.concat(all_predictions)

# predictions = backtest(sp500, model, predictors)

# predictions["Predictions"].value_counts()

# -------------------------Streamlit app
st.title("Stock Market Prediction App")

# Sidebar for user input
stock_symbol = st.sidebar.selectbox("Select Stock Symbol", ["SP500", "META", "AAPL", "AMZN", "NFLX", "GOOGL"])
# start_date = st.sidebar.date_input("Select Start Date", pd.to_datetime("1990-01-01"))
# end_date = st.sidebar.date_input("Select End Date", pd.to_datetime("today"))

# # Filter data based on user input
# filtered_data = sp500.loc[start_date:end_date].copy()

# Display plot of stock data
# st.subheader(f"Stock Data for {stock_symbol}")
# st.line_chart(filtered_data["Close"])

# # Display predictions
# st.subheader("Predictions")
# predictions = backtest(filtered_data, model, predictors)
# st.table(predictions)

# Display prediction value counts
st.subheader("Prediction Value Counts")
# st.write(predictions["Predictions"].value_counts())