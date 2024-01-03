import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import LogoutText from '../components/LogoutText';

function Logout() {
    return (
      <div className="logout-confirmation">
        <Header/>
        <Navigation/>
        <LogoutText/>
        <div style={{ marginBottom: '26rem' }}></div>
        <Footer/>
      </div>
    );
  }
  
  export default Logout;