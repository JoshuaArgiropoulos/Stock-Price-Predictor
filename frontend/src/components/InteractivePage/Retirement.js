import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import ComingSoonButton from '../common/ComingSoonButton';
import styles from '../../assets/styles/InvestmentBasics.module.css';


function Retirement() {
  return (
    
      <div className="HomePage">
        <Header />
        <Navigation /> 
        <ComingSoonButton/>
     
      
      </div>
    
  );
}
export default Retirement;