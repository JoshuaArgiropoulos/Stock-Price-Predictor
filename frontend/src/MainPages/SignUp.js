import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import '../assets/styles/SignOn.css'; 

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [messages, setMessages] = useState([]);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const [isSuccess, setIsSuccess] = useState(true); // New state to track success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([]);  // Clear previous messages
    setIsSuccess(true);  // Assume success until proven otherwise

    if (password !== confirmPassword) {
      setMessages(['Passwords do not match']);
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch('/api/SignUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success
        setMessages([data.message || "Signup successful! Please log in."]);
        setIsSuccess(true);
        // Optionally, clear form or redirect user
      } else {
        // Handle errors
        setMessages([data.message || "An error occurred during signup. Please try again."]);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessages(['An error occurred during signup. Please try again.']);
      setIsSuccess(false);
    }
  };

  return (
    <div className="SignUpPage">
      <Header />
      <Navigation />
      <section>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </p>
          <p>
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </p>
          <p>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </p>
          <p>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </p>
          <button type="submit">Sign Up</button>
        </form>
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`alert ${isSuccess ? 'alert-success' : 'alert-warning'}`}>
              {message}
            </div>
          ))}
        </div>
        <p>Already have an account? <Link to="/SignOn">Sign in here.</Link></p> {/* Use Link instead of <a> */}
      </section>
      <Footer />
    </div>
  );
}

export default SignUp;