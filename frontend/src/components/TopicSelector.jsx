// TopicSelector.jsx
import React from 'react';
import '../assets/styles/TopicSelector.css'; 

const TopicSelector = ({ onTopicChange }) => {
  const topics = [
    "Investment Basics",
    "Investment Types",
    "Account Types in Canada",
    "Budgeting and Financial Planning",
    "Savings and Investments",
    "Credit and Loan Management",
    "Taxation",
    "Retirement Planning"
  ];

  return (
    <div className="topic-selector">
      <select onChange={(e) => onTopicChange(e.target.value)} defaultValue="">
        <option value="" disabled>Select a topic</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>{topic}</option>
        ))}
      </select>
    </div>
  );
};

export default TopicSelector;