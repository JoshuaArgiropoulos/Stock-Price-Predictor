import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css'; 

const InvestmentTypes = () => {
    return (
        <div className={styles['investment-types']}> 
            <div className={styles['hero-section']}>
                <h1>Uncover Your Investment Potential</h1>
                <p>Explore a wide range of investment opportunities to shape your financial future.</p>
            </div>
            
            <section className={styles['intro-text']}>
                <p>Embark on a journey into the world of investments and explore diverse options tailored to your financial goals and risk tolerance.</p>
            </section>
            
            <div className={styles['cta-container']}>
                <a href="/learn/investment-types" className={styles['learn-more-link']}>Learn More About Investment Options</a>
            </div>
        </div>
    );
}

export default InvestmentTypes;