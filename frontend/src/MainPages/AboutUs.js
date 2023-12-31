import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import ContactIcons from '../components/ContactIcons';



function AboutUs() {
  return (
    
      <div className="HomePage">
        <Header />
        <Navigation />
        {/* Add some whitespace */}
      <ContactIcons/>
      <div style={{ marginBottom: '12rem' }}></div>
        <Footer />
      </div>
    
  );
}

export default AboutUs;