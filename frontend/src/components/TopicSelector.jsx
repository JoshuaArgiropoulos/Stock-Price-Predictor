// TopicSelector.jsx
import React from 'react';

const TopicSelector = ({ onTopicChange }) => {
  const topics = [
    "Investment Types",
    "Account Types in Canada",
    "Investment Basics",
    "Budgeting and Financial Planning",
    "Savings and Investments",
    "Credit Management",
    "Taxation",
    "Retirement Planning",
    "Insurance",
    "Economic Concepts",
    "Real-Life Examples and Case Studies"
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