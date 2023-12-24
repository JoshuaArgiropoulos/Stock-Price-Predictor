import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StockTable() {
  const [ticker, setTicker] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const [sinceInception, setSinceInception] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!ticker || (!sinceInception && !startDate) || !endDate) {
      setError("Please fill in all fields");
      return;
    }

    const effectiveStartDate = sinceInception ? '1900-01-01' : startDate;

    try {
      const response = await fetch(`/api/stock-info/${ticker}?start_date=${effectiveStartDate}&end_date=${endDate}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const responseData = await response.json();
      

      if (responseData.error) {
        throw new Error(responseData.error);
      }

      // Extract date and closing price from the API response
      const dates = responseData.data.map((item) => item.Date);
      const closingPrices = responseData.data.map((item) => item.Close);

      // Update chartData with the extracted data
      setChartData({
        labels: dates,
        datasets: [{
          label: `Closing Price for ${ticker}`,
          data: closingPrices,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
        }],
      });
    } catch (err) {
      setError(`Failed to fetch: ${err.message}`);
      setChartData(null);
      
    }
  };

  console.log("Rendering, chartData is:", chartData);

  return (
    <div className="HomePage" style={{ textAlign: 'center' }}>
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
            Since Inception:
            <input
              type="checkbox"
              checked={sinceInception}
              onChange={() => setSinceInception(!sinceInception)}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={sinceInception}
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

      {error && <p>Error: {error}</p>}

      {chartData && (
        <div>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}

export default StockTable;