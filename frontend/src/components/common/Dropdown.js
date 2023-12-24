import React, { useState } from 'react';
import '../../assets/styles/Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'active' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-btn">
        Services
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/Financial-News">Financial News</a>
          <a href="/interactive-tools">Interactive Tools</a>
          <a href="/investment">Investment Education</a>
          <a href="/stock-info">Stock Information</a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;