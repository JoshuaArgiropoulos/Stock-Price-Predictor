import React from 'react';
import styles from '../../assets/styles/ComingSoonButton.module.css'; // Import your CSS module

function ComingSoonSection() {
  return (
    <div className={styles['section-container']}>
    <section className={styles['stamped-section']}>
      <div className={styles['stamped-content']}>
        <h1>Coming Soon</h1>
        <p>This part of the website is under development. Stay tuned for updates!</p>
      </div>
    </section>
    </div>
  );
}

export default ComingSoonSection;