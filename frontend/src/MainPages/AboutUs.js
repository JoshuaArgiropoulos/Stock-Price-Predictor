import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import ContactIcons from '../components/ContactIcons';
import styles from '../assets/styles/AboutMe.module.css';
import profileImage from '../assets/images/About.jpg'; 

const AboutMe = () => {
  // Personal and contact information
  const personalInfo = {
    name: "Joshua Argiropoulos",
    graduation: "May 2024",
    email: "Joshua.argiropoulos@gmail.com",
    socialLinks: {
      github: "https://github.com/JoshuaArgiropoulos",
      linkedIn: "https://www.linkedin.com/JoshuaArgiropoulos",
    },
  };

  // Sections of the About Me page
  const sections = {
    introduction: "Hello, My name is Joshua Argiropoulos, and I am fourth-year computer engineering student set to graduate in May 2024.",
    passion: "My journey into the world of financial literacy began with a personal realization. Like many young adults, I found myself faced with important financial decisions, such as investing, managing debt, and planning for the future. It was during these moments that I recognized the lack of accessible and easy-to-understand information on financial literacy. This realization ignited my passion for finance and empowering others with the knowledge they need to make informed decisions about their financial futures.",
    projectGoals: [
      "Equip beginners with the foundational knowledge necessary to make informed financial decisions.",
      "Offer practical insights into budgeting, saving, and investing.",
      "Foster a community where individuals can learn, share, and grow together on their financial journeys.",
      "Empower people to take control of their financial futures and achieve their goals."
    ],
    targetAudience: "The primary audience for my project is individuals who are new to investing and financial literacy. Whether you're a recent graduate entering the workforce, a young professional looking to grow your wealth, or someone who simply wants to enhance your financial literacy, my project is designed to provide valuable insights and resources tailored to your needs."
  };

  return (
    <div className={styles.HomePage}>
      <Header />
      <Navigation />
      
      <div className={styles.aboutMeContainer}>
      <h1 className={styles.centeredTitle}>About Me</h1>
       
        <div className={styles.aboutMeLayout}>
          <div className={styles.aboutMeText}>
            <p>{sections.introduction}</p>
          </div>
          <div className={styles.aboutMeImage}>
            <img src={profileImage} alt="Profile" className={`${styles.profileImage} ${styles.smallerImage}`} />
          </div>
        </div>

        {/* The rest of your sections */}
       
        <h2>Passion for Financial Literacy</h2>
        <p>{sections.passion}</p>
        <h2>Project Goals</h2>
        <ul>
          {sections.projectGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
        <h2>Target Audience</h2>
        <p>{sections.targetAudience}</p>
        <h2>Contact Information</h2>
        <p>Feel free to reach out to me with any questions, feedback, collaboration opportunities, or inquiries at <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.</p>
        <h2>Social Media Links</h2>
        <p>Connect with me on <a href={personalInfo.socialLinks.github}>GitHub</a> and <a href={personalInfo.socialLinks.linkedIn}>LinkedIn</a>.</p>

        <ContactIcons />
        <div style={{ marginBottom: '2rem' }}></div>
      </div>
      
      <Footer />
    </div>
  );
}

export default AboutMe;