
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HomeSection from '../components/HomeSection';
import VisionSection from '../components/VisionSection';
import ServiceBox from '../components/ServiceBox';
import Footer from '../components/common/footer';
import Blank from '../components/common/trial';
import '../assets/styles/SignOn.css'


// SignOn.js
import React, { useState } from 'react';

function SignOn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);  // For flash messages

  // Handle form input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/SignOn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.messages) {
        setMessages(data.messages);  // Assuming the response contains messages
      }

      // Additional logic for successful login or handling login errors
      // ...

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="HomePage">
     
      <Header/>
      <Navigation/>
      <section>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange} size="32" />
          </p>
          <p>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} size="32" />
          </p>
          <button type="submit">Log In</button>
        </form>

        {/* Display flash messages */}
        {messages.map((message, index) => (
          <div key={index} className="alert alert-warning">{message}</div>
        ))}

        <p>If you don't have an account, <a className="signup-link" href="/SignUp">sign up</a>.</p>
       {/* Add some whitespace */}
      <div style={{ marginBottom: '8rem' }}></div>
      </section>
      
      <Footer/>
    </div>
  );
}

export default SignOn;