import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './MainPages/HomePage';  // Ensure the path is correct
import Blank from './components/common/trial';  // Ensure the path is correct
import SignOn from './MainPages/SignOn';  // Ensure the path is correct

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
           
            {/* Add more links for additional pages as needed */}
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock-info" element={<Blank />} />
          
          <Route path="/SignOn" element={<SignOn />} />
          {/* More routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;