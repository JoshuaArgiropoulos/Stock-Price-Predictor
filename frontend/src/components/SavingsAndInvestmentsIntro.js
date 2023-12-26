import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';

const SavingsAndInvestmentsIntro = ({ topic }) => {
    return (
        !topic && (
            <div className={styles['investment-types']}>
                <div className={styles['hero-section']}>
                    <h1>Master the Art of Saving and Investing</h1>
                    <p>Discover effective ways to save money and make smart investment decisions for your financial future.</p>
                </div>
                
                <section className={styles['intro-text']}>
                    <p>Explore the world of savings and investments to secure your financial future. Learn about different types of savings accounts, effective budgeting techniques, and strategies for building and managing an investment portfolio. Whether you're saving for short-term goals or investing for the long term, we've got you covered.</p>
                </section>
                
                <div className={styles['cta-container']}>
                    <a href="/learn/savings-investments" className={styles['learn-more-link']}>Learn More About Saving and Investing</a>
                </div>
            </div>
        )
    );
}

export default SavingsAndInvestmentsIntro;