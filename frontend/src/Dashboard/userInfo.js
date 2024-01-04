import React from 'react';
import { useAuth } from '../components/AuthContext'; // Import useAuth hook
import Styles from '../assets/styles/UserProfile.module.css';

function UserInfo() {
  const { user } = useAuth(); // Access user data from the AuthContext

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
      </div>
    </div>
  );
}

export default UserInfo;