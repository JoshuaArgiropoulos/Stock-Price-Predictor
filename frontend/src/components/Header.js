import React from 'react';

import '../assets/styles/BaseStyles.css';
import '../assets/styles/Header.css';

function Header() {
  return (
    <header style={{ backgroundColor: '#004080', color: 'white', textAlign: 'center', padding: '1em' }}>
      <h1>ThriveOnFinance</h1>
    </header>
  );
}

export default Header;