import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';

function Stocks() {
  const [ticker, setTicker] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch historical stock data for the selected ticker and date range
    // You can make an API request to your Flask backend here to get the data

    // For demonstration purposes, let's assume you have fetched the data in this format:
    const historicalData = {
        labels: ['Date1', 'Date2', 'Date3', /* Add actual date values here */], // Dates
        datasets: [
          {
            label: `Stock Data for ${ticker}`,
            data: [100, 120, 90, /* Add actual stock values here */], // Actual stock values
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      };

    setChartData(historicalData);
  };

  return (
    <div className="HomePage">
      <Header />
      <Navigation />

      <div>
        <h2>Stock Chart</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Ticker:
            <input
              type="text"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <button type="submit">Fetch Data</button>
        </form>
      </div>

      {chartData && (
        <div>
          <Line data={chartData} />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Stocks;