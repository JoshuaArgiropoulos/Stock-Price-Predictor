import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';


function InvestmentEducation() {
  return (
    
      <div className="HomePage">
        <Header />
        <Navigation /> 
        <Footer />
      </div>
    
  );
}
export default InvestmentEducation;