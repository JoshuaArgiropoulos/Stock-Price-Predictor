import React, { useState } from 'react';
import '../assets/styles/Dropdown.css'; 
import '../assets/styles/BaseStyles.css';
import '../assets/styles/Header.css';
// import DashDropdown from './common/Dropdown.js';

function DashNav() {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
    
  };

  return (
    <nav style={{ backgroundColor: '#0066cc', padding: '1em', textAlign: 'center', whiteSpace: 'nowrap' }}>
      <a href="/" className="nav-link" style={{ display: 'inline-block' }}>Home</a>
      {/* <DashDropdown/> */}
      <a href="/about" className="nav-link" style={{ display: 'inline-block' }}>About Me</a>
      <a href="/SignOn" className="nav-link" style={{ display: 'inline-block' }}>Profile</a>
    </nav>
  );
}

export default DashNav;