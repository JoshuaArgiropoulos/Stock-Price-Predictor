import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashHeader from '../Dashboard/DashHeader';
import DashNav from '../Dashboard/DashNav';

import DashWelcome from '../Dashboard/DashWelcome';
// import { useLocation } from 'react-router-dom'; // Import useLocation hook
import { useAuth } from '../components/AuthContext';


function Dashboard() {
  const { user } = useAuth();
  return (
    
      <div className="HomePage">
        <DashHeader />
        <DashNav user={user}/>
        <DashWelcome user={user} />
        {/* Add some whitespace */}
     
      
      </div>
    
  );
}

export default Dashboard;