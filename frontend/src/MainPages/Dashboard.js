import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashHeader from '../Dashboard/DashHeader';
import DashNav from '../Dashboard/DashNav';
import Footer from '../components/common/footer';
import DashWelcome from '../Dashboard/DashWelcome';
import { useLocation } from 'react-router-dom'; // Import useLocation hook


function Dashboard() {
  // Use useLocation hook to access the state object
  const location = useLocation();
  const userData = location.state?.userData; // Access userData from state
  return (
    
      <div className="HomePage">
        <DashHeader />
        <DashNav />
        <DashWelcome user={userData} />
        {/* Add some whitespace */}
     
      <div style={{ marginBottom: '12rem' }}></div>
        <Footer />
      </div>
    
  );
}

export default Dashboard;