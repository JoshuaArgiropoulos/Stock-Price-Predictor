import React, { useState } from 'react';
import '../assests/styles/styles.css'; // Ensure the path is correct

function Navigation() {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive); // Toggles the dropdownActive state
  };

  return (
    <nav style={{ backgroundColor: '#0066cc', padding: '1em', textAlign: 'center' }}>
      <a href="/" className="nav-link">Home</a>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-btn nav-link">Services</button>
        <div className={`dropdown-content ${dropdownActive ? 'active' : ''}`}>

            <a href="/Financial-News">Financial News</a>
            <a href="/interactive-tools">Interactive Tools</a>
            <a href="/investment">Investment Education</a>
            <a href="/investment-education">Stock Information</a>
          </div>
    
      </div>
      <a href="/about" className="nav-link">About Us</a>
      <a href="/SignOn" className="nav-link">Sign On</a>
    </nav>
  );
}
export default Navigation;