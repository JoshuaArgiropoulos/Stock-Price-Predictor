import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

import '../assets/styles/FinancialNews.css';
import placeholderImage from '../assets/images/NewsPaper.png';

// Define the API URL from the environment variable
const API_URL = process.env.REACT_APP_API_URL;

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function FinancialNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  useEffect(() => {
    setIsLoading(true); // Start loading
    fetch(`${API_URL}/api/financial-news`)
      .then(response => response.json())
      .then(data => {
        setArticles(data);
        setIsLoading(false); // Stop loading when data is received
      })
      .catch(error => {
        console.error('Error fetching financial news:', error);
        setIsLoading(false); // Stop loading on error
      });
  }, []);

  return (
    <div className="HomePage">
      <Header />
      <Navigation />
      <section id="financial-news">
        <div className="news-container">
          <h2>Latest Financial News</h2>
          {isLoading ? ( // Check if it's loading
            <div className="loading">Loading news...</div> // Display a loading message or spinner
          ) : (
            articles.map((article, index) => (
              <div className="news-item" key={index}>
                <div className="news-image">
                  <img
                    src={article.urlToImage ? article.urlToImage : placeholderImage}
                    alt={article.title} 
                  />
                </div>
                <div className="news-content">
                  <h3 className="news-title">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h3>
                  <p className="news-meta">
                    {article.author} - <span className="news-time">{formatDate(article.publishedAt)}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default FinancialNews;