import React, { useEffect } from 'react';
import styles from '../assets/styles/logout.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

function LogoutText() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // As soon as the component mounts, log the user out and redirect
    logout();
    
  }, [logout, navigate]); // Only re-run the effect if logout or navigate functions change

  return (
    <div className={styles['logout-confirmation']}>
      <h1>You have successfully logged out</h1>
      <p>Thank you for using my application. You are now logged out.</p>
    </div>
  );
}

export default LogoutText;