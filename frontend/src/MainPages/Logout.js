import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

import LogoutText from '../components/LogoutText';

function Logout() {
    return (
      <div className="logout-confirmation">
        <Header/>
        <Navigation/>
        <div style={{ marginTop: '80px' }}>
        <LogoutText/>
        </div>
      </div>
    );
  }
  
  export default Logout;