// ContentDisplay.jsx
import React from 'react';
import '../assets/styles/ContentDisplay.css';

const ContentDisplay = ({ topic }) => {
  const renderContent = () => {
    switch (topic) {
      case "Investment Types":
        return <p>Details about different investment options...</p>;
      case "Account Types in Canada":
        return <p>Information about TFSA, RRSP, FSHA...</p>;
      // Add cases for other topics with their respective content
      default:
        return <p>Please select a topic to see the information.</p>;
    }
  };

  return (
    <div className="content-display">
      <h2>{topic || "Welcome to Education Options"}</h2>
      {renderContent()}
    </div>
  );
};

export default ContentDisplay;