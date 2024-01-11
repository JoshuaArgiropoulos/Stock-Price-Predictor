import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';


const SavingsAndInvestmentsIntro = ({ topic }) => {
    return (
        !topic && (
            <div className={styles['investment-types']}>
                <div className={styles['hero-section']}>
                    <h1>Secure Your Financial Future</h1>
                    <p>Explore the World of Savings and Investments</p>
                </div>
                
                <section className={styles['intro-text']}>
                    <p>Discover the keys to financial success by mastering the art of saving and making smart investment decisions. Whether you're saving for short-term goals or planning for the long term, we've got you covered.</p>
                    
               
                </section>
                
                <div className={styles['cta-container']}>
                    <a href="/learn/savings-investments" className={styles['learn-more-link']}>Learn More</a>
                </div>
            </div>
        )
    );
}

export default SavingsAndInvestmentsIntro;