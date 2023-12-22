import React, { useState } from 'react';
import '../assests/styles/styles.css'; // Include your CSS styles
function Navigation() {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <nav style={{ backgroundColor: '#0066cc', padding: '1em', textAlign: 'center' }}>
      <a href="/">Home</a>
      <div className="dropdown" onClick={toggleDropdown}>
        <a href="#" className="dropdown-btn">Services</a>
        {dropdownActive && (
          <div className="dropdown-content">
            <a href="/Financial-News">Financial News</a>
            <a href="/interactive-tools">Interactive Tools</a>
            <a href="/investment">Investment Education</a>
            <a href="/investment-education">Stock Information</a>
          </div>
        )}
      </div>
      <a href="/about">About Us</a>
      <a href="/SignOn">Sign On</a>
    </nav>
  );
}

export default Navigation;