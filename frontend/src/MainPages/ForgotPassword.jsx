// ForgotPassword.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../assets/styles/SignOn.css';

const API_URL = process.env.REACT_APP_API_URL;

function ForgotPassword() {
  const [email, setEmail] = useState('');
  
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Replace with your API endpoint for sending the reset email
      const response = await fetch(`${API_URL}/api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Set success message
        setMessage('Reset link sent. Please check your email.');
        setMessageType('success');
      } else {
        setMessage(data.message || 'Email not found.');
      setMessageType('error');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="HomePage">
      <Header />
      <Navigation />

      <section>
        <div className="forgot-password-page">
          <h2>Reset Your Password</h2>
          <form onSubmit={handleSubmit}>
            <p>
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} size="32" />
            </p>
            <button type="submit">Reset Password</button>
          </form>

          {/* Display the message to the user */}
          {message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;