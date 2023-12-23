import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import '../assets/styles/FinancialNews.css'; // Corrected import statement
import placeholderImage from '../assets/images/NewsPaper.png'; // Update the import path

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function FinancialNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/financial-news')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching financial news:', error));
  }, []);

  return (
    <div className="HomePage">
      <Header />
      <Navigation />
      <section id="financial-news">
        <div className="news-container">
          <h2>Latest Financial News</h2>
          {articles.map((article, index) => (
            <div className="news-item" key={index}>
              <div className="news-image">
                <img
                  src={article.urlToImage ? article.urlToImage : placeholderImage}
                  alt={`${article.title} Image`}
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
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FinancialNews;