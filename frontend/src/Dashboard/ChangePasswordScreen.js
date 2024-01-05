import React, { useState } from 'react';
import '../assets/styles/ChangePasswordScreen.css';
import DashNav from './DashNav';
import DashHeader from './DashHeader';
import Footer from '../components/common/footer';


function ChangePasswordScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your password change logic here
    console.log('Password changed to:', newPassword);
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