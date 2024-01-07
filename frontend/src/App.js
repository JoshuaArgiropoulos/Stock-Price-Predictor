import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './MainPages/HomePage';  
import SignOn from './MainPages/SignOn';  
import SignUp from './MainPages/SignUp';
import FinancialNews from './MainPages/FinancialNews';
import AboutUs from './MainPages/AboutUs';
import Stocks from './MainPages/Stocks';
import InteractivePage from './MainPages/InteractivePage';
import InvestmentEducation from './MainPages/InvestmentEducation';
import Dashboard from './MainPages/Dashboard'; 
import UserProfile from './Dashboard/UserProfile';
import Logout from './MainPages/Logout'; 
import ChangePasswordScreen from './Dashboard/ChangePasswordScreen';
import './assets/styles/FooterToBot.css';
import Footer from './components/common/footer';
import ForgotPassword from './MainPages/ForgotPassword';
import ResetPasswordPage from './MainPages/ResetPasswordPage';
import PrivateRoute from './components/PrivateRoute';

import AccountTypes from './components/InteractivePage/AccountTypes';
import Budget from './components/InteractivePage/Budget';
import Credit from './components/InteractivePage/Credit';
import Investing from './components/InteractivePage/Investing';
import InvestmentBasics from './components/InteractivePage/InvestmentBasics';
import InvestmentTypes from './components/InteractivePage/InvestmentTypes';
import Retirement from './components/InteractivePage/Retirement';
import Taxes from './components/InteractivePage/Taxes';

import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <AuthProvider>
    <Router>
    <div className="app-content">
  

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/stock-info" element={<Stocks />} />
          
          <Route path="/investment" element={<InvestmentEducation />} />


          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/interactive-tools" element={<InteractivePage />} />
          <Route path="/Financial-News" element={<FinancialNews />} />
          <Route path="/SignOn" element={<SignOn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path="/change-password" element={<PrivateRoute><ChangePasswordScreen /></PrivateRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
          
          <Route path="/learn/investing-basics" element={<InvestmentBasics />} />
          <Route path="/learn/investment-types" element={<InvestmentTypes />} />
          <Route path="/learn/account-types-canada" element={<AccountTypes />} />
          <Route path="/learn/budgeting-financial-planning" element={<Budget />} />
          <Route path="/learn/savings-investments" element={<Investment/>} />
          <Route path="/learn/credit-management" element={<Credit />} />
          <Route path="/learn/taxation" element={<Taxes />} />
          <Route path="/learn/retirement-planning" element={<Retirement />} />

          {/* More routes can be added here */}
        </Routes>
      </div>
      <Footer />
    </Router>
   </AuthProvider>
  );
}

export default App;