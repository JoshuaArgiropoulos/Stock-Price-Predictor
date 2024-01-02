import React from 'react';
import imageSrc from '../assets/images/IMG_9820.JPG';
import styles from '../assets/styles/HomeSection.module.css';

function HomeSection() {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Empowering Futures" className={styles.homeImage} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.visionTitle}>My Vision</h2>
        <ul className={styles.visionList}>
          <li><strong>Empowerment:</strong> Guide towards financial literacy and independence.</li>
          <li><strong>Transformation:</strong> Make personal finance accessible and actionable.</li>
          <li><strong>Knowledge & Tools:</strong> Equip individuals for successful financial journeys.</li>
          <li><strong>Education & Resources:</strong> Provide innovative means for smart decision-making.</li>
          <li><strong>Community Support:</strong> Foster a network for growth and understanding.</li>
          <li><strong>Dedication:</strong> Ignite knowledge and potential in every individual.</li>
        </ul>
      </div>
    </section>
  );
}

export default HomeSection;