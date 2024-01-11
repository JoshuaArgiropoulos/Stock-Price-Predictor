import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';

const CreditManagementIntro = ({ topic }) => {
    return (
        !topic && (
            <div className={styles['investment-types']}>
                <div className={styles['hero-section']}>
                    <h1>Master the Art of Credit and Loan Management</h1>
                    <p>Learn how to effectively manage your financial well-being.</p>
                </div>
                
                <section className={styles['intro-text']}>
                    <p>Explore the world of credit and loan management and discover essential strategies to maintain a healthy credit score, reduce debt, and make informed financial decisions. From understanding credit reports to responsible credit card usage, we provide valuable insights to help you take control of your financial future.</p>
                </section>
                
                <div className={styles['cta-container']}>
                    <a href="/learn/credit-management" className={styles['learn-more-link']}>Learn More About Credit Management</a>
                </div>
            </div>
        )
    );
}

export default CreditManagementIntro;