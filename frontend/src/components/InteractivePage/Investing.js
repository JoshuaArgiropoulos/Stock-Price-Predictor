import React, { useState } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import styles from '../../assets/styles/InvestmentBasics.module.css';

function Investing() {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case 'financialPlanning':
        return (
          <>
          <h2 className={styles.subtitle}>Managing Your Investment Portfolio</h2>
          <p className={styles.paragraph}>
          Managing your investment portfolio effectively is vital for achieving long-term financial success. Key strategies like diversification, risk assessment, and asset allocation play a crucial role in optimizing your investments. In this section, we'll discuss various techniques to manage and enhance your investment portfolio, focusing on balancing risk with potential returns and maintaining a long-term perspective in your investment approach.
        </p>
        <ul className={styles.unorderedList}>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Diversification:</strong> Spread your investments across various asset classes such as stocks, bonds, and real estate. Diversification reduces the risk of significant losses, as your portfolio isn't heavily reliant on any single market.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Risk Assessment:</strong> Evaluate your tolerance for risk, considering factors like age, financial goals, and your comfort with market volatility. Tailor your portfolio to include a balance of conservative and aggressive investments based on your risk profile.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Asset Allocation:</strong> Allocate your assets in a manner that aligns with your risk tolerance and investment goals. Typically, stocks are favored for long-term growth potential, while bonds add stability to your portfolio.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Regular Rebalancing:</strong> Over time, the value of different assets in your portfolio will change, which may shift your initial allocation. Regular rebalancing helps maintain your desired asset mix and alignment with your investment goals.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Stay Informed:</strong> Keep abreast of market trends and economic developments that could impact your investments. Staying informed helps you make educated decisions.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Avoid Emotional Decisions:</strong> Emotional reactions to market fluctuations can lead to hasty decisions. Stick to your investment strategy and resist making changes based on fear or greed.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Long-term Perspective:</strong> View investing as a long-term journey. Frequent buying and selling in response to short-term market movements can be detrimental; patience is often rewarded.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Review and Adjust:</strong> Regularly review your investment portfolio. Adjust it to reflect any changes in your financial situation, goals, or shifts in the market environment.
          </li>
        </ul></>
        );
      case 'creatingBudget':
        return (
          <><h2 className={styles.subtitle}>Effective Saving Techniques</h2>
          <p className={styles.paragraph}>
  Adopting effective saving techniques is essential for financial growth and stability. From setting up automated savings to prioritizing debt payoff, these strategies can significantly enhance your ability to build wealth and achieve your financial objectives. Below, we'll explore a variety of approaches to help you save efficiently and effectively.
</p>
          <ul className={styles.unorderedList}>
            <li className={styles.listItem}>
              <strong className={styles.strongText}>Automated Savings:</strong> Implement automatic transfers from your checking to your savings account. This strategy ensures a consistent saving habit and helps inculcate a 'pay yourself first' mindset. Automating savings removes the temptation to spend what you might otherwise save.
            </li>
            <li className={styles.listItem}>
              <strong className={styles.strongText}>Emergency Fund:</strong> Prioritize building an emergency fund to cushion against unforeseen expenses like medical emergencies or sudden car repairs. Aim for a fund that covers three to six months of living expenses, providing a significant financial safety net.
            </li>
            <li className={styles.listItem}>
              <strong className={styles.strongText}>Prioritize Debt Payoff:</strong> Focus on eliminating high-interest debts, especially credit card balances. High-interest rates can significantly impede your financial growth, so paying these off can be just as impactful as saving.
            </li>
            <li className={styles.listItem}>
              <strong className={styles.strongText}>Create a Savings Goal:</strong> Establish clear, specific savings goals for both short-term and long-term needs. Defined objectives offer motivation and a clear target, making it easier to track progress and stay committed.
            </li>
            <li className={styles.listItem}>
              <strong className={styles.strongText}>Cut Unnecessary Expenses:</strong> Regularly examine your spending habits to identify non-essential expenses. Reduce or eliminate these costs and reallocate the funds to your savings, maximizing your ability to save more effectively.
            </li>
            <li className={styles.listItem}>
              <strong className={styles.strongText}>Utilize Employer Benefits:</strong> Maximize employer-offered financial benefits such as retirement contributions, matching schemes, or other savings plans. These benefits not only augment your savings but can also offer tax advantages.
            </li>
            <li className={styles.listItem}>
              <strong className={styles.strongText}>Regularly Review and Adjust:</strong> Consistently assess your budget and savings strategies. Be flexible and ready to adjust your approach in response to changes in your financial situation, ensuring that your saving plan remains effective and relevant.
            </li>
          </ul></>
        );
      // Add cases for other sections similarly

      default:
        return (
          <>
            <h1 className={styles.title}>Master the Art of Saving and Investment Management</h1>
            <p className={styles.paragraph}>
            Welcome to the world of effective saving techniques and expert management of your investment portfolio. Financial security and prosperity await those who master these essential skills. In this comprehensive guide, we will explore proven strategies that will help you save diligently and invest wisely, ensuring a brighter financial future for yourself and your loved ones.
            </p>
          </>
        );
    }
  };

  

  return (
    <div className="HomePage">
      <Header />
      <Navigation />
      {/* Container for Sidebar and Content */}
      <div className={styles.flexContainer}>
        <div className={styles.sidebar}>
          <h2>Navigation Bar</h2>
          <ul>
            <li>
              <a href="#" onClick={() => setSelectedSection('financialPlanning')}>
              Managing Your Investment Portfolio
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setSelectedSection('creatingBudget')}>
              Effective Saving Techniques
              </a>
            </li>
            {/* Add other navigation items here */}
          </ul>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.centeredContent}>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Investing;