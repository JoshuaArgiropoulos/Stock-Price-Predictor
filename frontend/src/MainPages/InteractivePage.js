import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';


function InteractivePage() {
  return (
    
      <div className="HomePage">
        <Header />
        <Navigation /> 
        {/* Add some whitespace */}
     
      <div style={{ marginBottom: '8rem' }}></div>
        <Footer />
      </div>
    
  );
}
export default InteractivePage;