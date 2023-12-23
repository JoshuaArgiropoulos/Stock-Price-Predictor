import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './MainPages/HomePage';  // Ensure the path is correct
import Blank from './components/common/trial';  // Ensure the path is correct
import SignOn from './MainPages/SignOn';  // Ensure the path is correct
import SignUp from './MainPages/SignUp';
import FinancialNews from './MainPages/FinancialNews';
import AboutUs from './MainPages/AboutUs';

function App() {
  return (
    <Router>
      <div>
  

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/stock-info" element={<Blank />} />
          <Route path="/Financial-News" element={<FinancialNews />} />
          <Route path="/SignOn" element={<SignOn />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* More routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;