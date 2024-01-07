import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ComingSoonButton from '../components/common/ComingSoonButton';



function InteractivePage() {
  return (
    
      <div className="HomePage">
        <Header />
        <Navigation /> 
        <ComingSoonButton/>
     
      
      </div>
    
  );
}
export default InteractivePage;