// ResetPasswordPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../assets/styles/SignOn.css'

const API_URL = process.env.REACT_APP_API_URL;


function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token } = useParams(); // This will get the token from the URL
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessages(["Passwords don't match!"]);
            return;
        }
    
        // Replace with the correct URL to your Flask API endpoint for password reset
        const resetPasswordUrl = `${API_URL}/api/reset_update/${token}`;
    
        try {
            const response = await fetch(resetPasswordUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }), // Send the new password and potentially other needed data
            });
    
            const data = await response.json();
            if (response.ok) {
                // Handle success - display a success message
                setMessages([data.message || 'Password reset successfully.']);
                
            } else {
                // Handle failure - display an error message from the response
                setMessages([data.message || 'Failed to reset password.']);
            }
        } catch (error) {
            setMessages(['Network error, please try again later.']);
        }
    };

    return (
        <div className="HomePage">
            <Header/>
            <Navigation/>
        <section>
            <h2>Reset Your Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    New Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Confirm New Password:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <button type="submit">Reset Password</button>
            </form>
            {/* Display flash messages */}
        {messages.map((message, index) => (
          <div key={index} className="alert alert-warning">{message}</div>
        ))}
        </section>
        </div>
    );
}

export default ResetPasswordPage;