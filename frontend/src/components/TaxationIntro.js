import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';

const TaxationIntro = ({ topic }) => {
    return (
        !topic && (
            <div className={styles['investment-types']}>
                <div className={styles['hero-section']}>
                    <h1>Navigate the World of Taxes with Taxation Insights</h1>
                    <p>Discover how to manage your taxes efficiently and make informed financial decisions.</p>
                </div>
                
                <section className={styles['intro-text']}>
                    <p>Explore the realm of taxation and gain valuable insights into managing your tax obligations. From understanding tax laws to maximizing deductions and credits, we provide the knowledge and resources you need to make tax season less taxing. Whether you're an individual or a business owner, we've got you covered on all things tax-related.</p>
                </section>
                
                <div className={styles['cta-container']}>
                    <a href="/learn/taxation" className={styles['learn-more-link']}>Learn More About Taxation</a>
                </div>
            </div>
        )
    );
}

export default TaxationIntro;