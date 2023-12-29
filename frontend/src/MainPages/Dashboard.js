import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashHeader from '../Dashboard/DashHeader';
import DashNav from '../Dashboard/DashNav';
import Footer from '../components/common/footer';
import DashWelcome from '../Dashboard/DashWelcome';



function Dashboard() {
  return (
    
      <div className="HomePage">
        <DashHeader />
        <DashNav />
        <DashWelcome/>
        {/* Add some whitespace */}
     
      <div style={{ marginBottom: '12rem' }}></div>
        <Footer />
      </div>
    
  );
}

export default Dashboard;