import React from 'react';
import '../assets/styles/Dropdown.css'; 
import '../assets/styles/BaseStyles.css';
import '../assets/styles/Header.css';
import Dropdown from './common/Dropdown.js';

function Navigation() {
  // const [dropdownActive, setDropdownActive] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownActive(!dropdownActive);
    
  // };

  return (
    <nav style={{ backgroundColor: '#0066cc', padding: '1em', textAlign: 'center', whiteSpace: 'nowrap' }}>
      <a href="/" className="nav-link" style={{ display: 'inline-block' }}>Home</a>
      <Dropdown/>
      <a href="/about" className="nav-link" style={{ display: 'inline-block' }}>About Me</a>
      <a href="/SignOn" className="nav-link" style={{ display: 'inline-block' }}>Sign On</a>
    </nav>
  );
}

export default Navigation;