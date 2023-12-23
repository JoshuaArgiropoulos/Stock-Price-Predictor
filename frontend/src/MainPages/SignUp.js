import React, { useState } from 'react';
import Header from '../components/Header';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessages(['Passwords do not match']);
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (data.messages) {
        setMessages(data.messages);
      } else {
        // Handle signup success, e.g., redirect to login page or a welcome page
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessages(['An error occurred during signup. Please try again.']);
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
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </p>
          <button type="submit">Sign Up</button>
        </form>
        {messages.map((message, index) => (
          <div key={index} className="alert alert-warning">{message}</div>
        ))}
        <p>Already have an account? <a href="/SignOn">Sign in here.</a></p>
      </section>
      <Footer />
    </div>
  );
}

export default SignUp;