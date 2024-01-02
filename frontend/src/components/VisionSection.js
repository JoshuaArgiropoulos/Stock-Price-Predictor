import React from 'react';
import styles from '../assets/styles/VisionSection.module.css';

function VisionSection() {
  return (
    <section className={styles.visionSection}>
      <div className={styles.textContent}>
        <h3 className={styles.title}>Empowering Futures</h3>
        <p>Embark on a transformative financial journey with ThriveOnFinance. We're dedicated to empowering your financial growth and stability.</p>
        <p>Every dollar counts, and we understand its value. Let us help you maximize your financial potential, ensuring that every decision moves you closer to your goals. Discover how to make your money work harder for you.</p>
        <button className={styles.ctaButton}>Learn More</button> 
      </div>
 
</section>
  );
}

export default VisionSection;

