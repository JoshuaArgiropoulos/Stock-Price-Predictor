import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

import '../assets/styles/SignOn.css';
import { useAuth } from '../components/AuthContext'; // Import useAuth hook
import { useNavigate } from 'react-router-dom';

// Define the API URL from the environment variable
const API_URL = process.env.REACT_APP_API_URL;

function SignOn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  

  // Handle form input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/SignOn`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.message) {
        setMessages([data.message]);
        if (data.message === "Please verify email") {
          // Display a message to the user indicating that they need to verify their email.
          setMessages(["Please verify your email before logging in."]);
        }
        else if (data.message === "Login successful") {
          login(data.user); // Call the login function with user data
          navigate('/dashboard'); // Pass userData as state
        }
        
      } else if (data.messages) {
        setMessages(data.messages);
      }
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

        <p>Forgot your password? <a className="signup-link" href="/forgot-password">Click here</a> to reset it.</p>

        <p>If you don't have an account, <a className="signup-link" href="/SignUp">sign up</a>.</p>
        
        {/* Add some whitespace */}
        
      </section>
      
    </div>
  );
}

export default SignOn;