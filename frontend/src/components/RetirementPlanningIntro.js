import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';

const RetirementPlanningIntro = ({ topic }) => {
    return (
        !topic && (
            <div className={styles['investment-types']}>
                <div className={styles['hero-section']}>
                    <h1>Prepare for Your Golden Years with Retirement Planning</h1>
                    <p>Explore strategies to secure your financial future and enjoy a comfortable retirement.</p>
                </div>
                
                <section className={styles['intro-text']}>
                    <p>Embark on a journey to plan for a secure and fulfilling retirement. Learn about various retirement accounts, investment options, and financial planning tools to build a nest egg that provides peace of mind. Whether you're just starting or nearing retirement age, we're here to help you make the most of your golden years.</p>
                </section>
                
                <div className={styles['cta-container']}>
                    <a href="/learn/retirement-planning" className={styles['learn-more-link']}>Learn More About Retirement Planning</a>
                </div>
            </div>
        )
    );
}

export default RetirementPlanningIntro;