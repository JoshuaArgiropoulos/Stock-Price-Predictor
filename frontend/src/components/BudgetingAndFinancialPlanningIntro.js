import React from 'react';
import styles from '../assets/styles/InvestmentList.module.css';

const BudgetingAndFinancialPlanningIntro = ({ topic }) => {
    return (
        !topic && (
            <div className={styles['investment-types']}>
                <div className={styles['hero-section']}>
                    <h1>Master Budgeting and Financial Planning</h1>
                    <p>Learn essential financial skills to manage your money effectively.</p>
                </div>
                
                <section className={styles['intro-text']}>
                    <p>Explore the world of budgeting and financial planning to take control of your finances. Whether you're saving for a goal, managing debt, or planning for the future, understanding budgeting and financial planning basics is crucial for financial success.</p>
                </section>
                
                <div className={styles['cta-container']}>
                    <a href="/learn/budgeting-financial-planning" className={styles['learn-more-link']}>Learn More About Budgeting and Financial Planning</a>
                </div>
            </div>
        )
    );
}

export default BudgetingAndFinancialPlanningIntro;