import React from 'react';
import { useAuth } from '../components/AuthContext'; // Import useAuth hook
import DashNav from './DashNav';
import DashHeader from './DashHeader';
import userInfo from './userInfo';

function UserProfile() {
  const { user } = useAuth(); // Access user data from the AuthContext

  

  return (
    <div>
      <DashHeader />
      <DashNav user={user}/> {/* Pass user data to DashNav as prop */}
      <userInfo/>
      
    </div>
  );
}

export default UserProfile;