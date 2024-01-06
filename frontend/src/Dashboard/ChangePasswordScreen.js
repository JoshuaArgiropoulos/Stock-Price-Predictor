import React, { useState } from 'react';
import '../assets/styles/ChangePasswordScreen.css';
import DashNav from './DashNav';
import DashHeader from './DashHeader';
import Footer from '../components/common/footer';
import { useAuth } from '../components/AuthContext'; // Import useAuth hook

function ChangePasswordScreen() { // Removed 'user' parameter
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const { user } = useAuth(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
      const response = await fetch('/api/change_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          username: user.username, 
          currentPassword: currentPassword,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // or handle successful password change as needed
      } else {
        alert(data.message); // or handle errors as needed
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while changing the password.');
    }
  };


  return (
    <div>
      <DashHeader />
      <DashNav/>
    
      <div style={{ marginBottom: '3rem' }}></div>
     
      <form onSubmit={handleSubmit} className="changePasswordForm">
        <h2>Change Password</h2>

        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />

        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmNewPassword">Confirm New Password</label>
        <input
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
        />

        <button type="submit" className="submitBtn">
          Change Password
        </button>
      </form>

      <div style={{ marginBottom: '6rem' }}></div>
      
      <Footer/>
    </div>

      
   
  );
}

export default ChangePasswordScreen;