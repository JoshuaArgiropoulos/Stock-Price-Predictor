import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';

const InvestingBasicsIntro = () => {
    return (
        <div className={styles['investment-types']}>
            <div className={styles['hero-section']}>
                <h1>Master the Fundamentals of Investing</h1>
                <p>Explore the essential principles of investing to grow your wealth.</p>
            </div>
            
            <section className={styles['intro-text']}>
                <p>Delve into the world of investing and grasp the fundamental concepts that can help you make informed financial decisions. Whether you're a novice or experienced investor, understanding the basics is crucial for building and preserving your wealth.</p>
            </section>
            
            <div className={styles['cta-container']}>
                <a href="/learn/investing-basics" className={styles['learn-more-link']}>Learn More About Investing Basics</a>
            </div>
        </div>
    );
}

export default InvestingBasicsIntro;