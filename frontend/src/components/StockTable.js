import React, { useState, useEffect} from 'react';



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
// Define the API URL from the environment variable
const API_URL = process.env.REACT_APP_API_URL;
function StockTable() {
  const [ticker, setTicker] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);
  const [sinceInception, setSinceInception] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

   // useEffect for clearing the start date when 'Since Inception' is checked
   useEffect(() => {
    if (sinceInception) {
      setStartDate(''); // Clear the start date
    }
  }, [sinceInception]); // Only re-run the effect if sinceInception changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!ticker || (!sinceInception && !startDate) || !endDate) {
      setError("Please fill in all fields");
      return;
    }
    // Validate that the Start Date is before the End Date
  if (!sinceInception && new Date(startDate) >= new Date(endDate)) {
    setError("Start Date must be before End Date");
    return;
  }
  // Validate that the End Date is not a future date
  const currentDate = new Date();
  if (new Date(endDate) > currentDate) {
    setError("End Date cannot be a future date");
    return;
  }
  const historicalDate = '1800-01-01';
  if (!sinceInception && new Date(startDate) < new Date(historicalDate)) {
    setError("Start Date cannot be earlier than " + historicalDate);
    return;
  }
   

    //const effectiveStartDate = sinceInception ? '1900-01-01' : startDate;
    const effectiveStartDate = startDate;

    try {
      const response = await fetch(`${API_URL}/api/stock-info/${ticker}?start_date=${effectiveStartDate}&end_date=${endDate}`);
      if (response.status === 404) {
        setError("Stock not found");
        setChartData(null);
        return;
      }
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const responseData = await response.json();
      

      if (responseData.error) {
        throw new Error(responseData.error);
      }
      setIsLoading(false);

      // Extract date and closing price from the API response
      const dates = responseData.data.map((item) => item.Date);
      const closingPrices = responseData.data.map((item) => item.Close);
      
      function formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      }
      // Update chartData with the extracted data
      setChartData({
        labels: dates.map(formatDate), // Format dates using the custom function
        datasets: [{
          label: `Closing Price for ${ticker}`,
          data: closingPrices,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
        }],
        options: {
          scales: {
            x: {
              type: 'time', // Consider using a time scale if your data is date-based
              time: {
                unit: 'day', // Adjust based on your data (e.g., 'day', 'month')
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10, // Control the maximum number of ticks here
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.dataset.label || '';
                  const value = context.parsed.y;
                  const date = formatDate(context.parsed.x); // Format tooltip date
                  return `${label}: ${value}, Date: ${date}`;
                },
              },
            },
          },
        },
      });
      
    } catch (err) {
      setError(`Failed to fetch: ${err.message}`);
      setChartData(null);
      setIsLoading(false);
      
    }
  };
 

 // console.log("Rendering, chartData is:", chartData);

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

    {isLoading ? (
      <p>Loading...</p> // Display this text when the data is being loaded
    ) : chartData ? (
      <div>
        <Line data={chartData} /> 
      </div>
    ) : null}
  </div>
);
    }

export default StockTable;

