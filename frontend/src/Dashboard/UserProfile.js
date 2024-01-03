import React from 'react';
import { useLocation } from 'react-router-dom';

function UserProfile() {
  const location = useLocation();
  const user = location.state?.user;  // Access user from the route's state

  return (
    <div className="user-profile">
      <h1>User Information</h1>
      <div>
        <p>Username: {user?.username}</p> 
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
}

export default UserProfile;