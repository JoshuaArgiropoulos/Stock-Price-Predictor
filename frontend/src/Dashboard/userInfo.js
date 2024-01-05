import React from 'react';
import { useAuth } from '../components/AuthContext'; // Import useAuth hook
import Styles from '../assets/styles/UserProfile.module.css';
import { useNavigate } from 'react-router-dom';


function UserInfo() {
  const { user } = useAuth(); 
   const navigate = useNavigate();

  const handleChangePasswordClick = () => {
    // Function to handle click event of the Change Password button
    // Redirect user to the change password page or modal
    navigate('/change-password'); // Replace '/change-password' with your actual route
  };

  if (!user) {
    return <div className={Styles.loading}>Loading user data...</div>; // Apply styles for loading
  }

  return (
    <div className={Styles.userProfile}>
      <h1 className={Styles.title}>User Information</h1>
      <div className={Styles.userInfo}>
        {/* Display user information */}
        <p><span className={Styles.label}>Username:</span> {user.username}</p>
        <p><span className={Styles.label}>Email:</span> {user.email}</p>
        {/* Add Change Password button */}
        <div className={Styles.centerButton}>
          <button className={Styles.changePasswordBtn} onClick={handleChangePasswordClick}>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;