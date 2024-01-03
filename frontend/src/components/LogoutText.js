import React from 'react';
import styles from '../assets/styles/logout.module.css'; // Use 'styles' as an alias for the imported CSS module

function LogoutText() {
  return (
    <div className={styles['logout-confirmation']}>
      <h1>You have successfully logged out</h1>
      <p>Thank you for using our application. You are now logged out.</p>
    </div>
  );
}

export default LogoutText;