import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashHeader from '../Dashboard/DashHeader';
import DashNav from '../Dashboard/DashNav';
import Footer from '../components/common/footer';



function Dashboard() {
  return (
    
      <div className="HomePage">
        <DashHeader />
        <DashNav />
        {/* Add some whitespace */}
     
      <div style={{ marginBottom: '12rem' }}></div>
        <Footer />
      </div>
    
  );
}

export default Dashboard;