import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import '../assets/styles/SignOn.css';
import { useAuth } from '../components/AuthContext'; // Import useAuth hook

function SignOn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate(); // Updated hook
  const { login } = useAuth(); // Destructure the login function from the context
  

  // Handle form input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/SignOn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.message) {
        setMessages([data.message]);
        
        if (data.message === "Login successful") {
          login(data.user); // Call the login function with user data
          navigate('/dashboard'); // Updated navigation
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

        <p>If you don't have an account, <a className="signup-link" href="/SignUp">sign up</a>.</p>
        {/* Add some whitespace */}
        <div style={{ marginBottom: '8rem' }}></div>
      </section>
      <Footer/>
    </div>
  );
}

export default SignOn;