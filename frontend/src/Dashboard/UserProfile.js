import React from 'react';
// import { useAuth } from '../components/AuthContext'; // Import useAuth hook
import DashNav from './DashNav';
import DashHeader from './DashHeader';
import UserInfo from './userInfo';
import Footer from '../components/common/footer';
function UserProfile() {
  // const { user } = useAuth(); // Access user data from the AuthContext

  

  return (
    <div>
      <DashHeader />
      <DashNav/> 
      <div style={{ marginBottom: '5rem' }}></div>
      <UserInfo/>
      <div style={{ marginBottom: '12rem' }}></div>
      <Footer/>
      
    </div>
  );
}

export default UserProfile;