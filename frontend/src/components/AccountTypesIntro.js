import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';

const AccountTypesIntro = () => {
    return (
        <div className={styles['investment-types']}>
            <div className={styles['hero-section']}>
                <h1>Discover Your Account Options in Canada</h1>
                <p>Explore a variety of account types to manage your finances effectively.</p>
            </div>
            
            <section className={styles['intro-text']}>
                <p>Learn about different types of financial accounts available in Canada. Whether you're saving for the future, managing day-to-day expenses, or planning for retirement, there's an account suited to your needs.</p>
            </section>
            
            <div className={styles['cta-container']}>
                <a href="/learn/account-types-canada" className={styles['learn-more-link']}>Learn More About Account Types</a>
            </div>
        </div>
    );
}

export default AccountTypesIntro;