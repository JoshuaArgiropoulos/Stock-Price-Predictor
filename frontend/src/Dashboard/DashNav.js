import React, { useState } from 'react';
import '../assets/styles/Dropdown.css'; 
import '../assets/styles/BaseStyles.css';
import '../assets/styles/Header.css';
// import DashDropdown from './common/Dropdown.js';
import { Link } from 'react-router-dom';

function DashNav({ user }) {
  // const [dropdownActive, setDropdownActive] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownActive(!dropdownActive);
    
  // };

  return (
    <nav style={{ /* styles */ }}>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Me</Link>
      <Link to={{ pathname: "/profile", state: { user: user } }} className="nav-link">Profile</Link>
      <Link to="/logout" className="nav-link">Logout</Link>
    </nav>
  );
}

export default DashNav;