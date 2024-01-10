import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import styles from '../../assets/styles/InvestmentBasics.module.css';


function Budget() {
  // State hook
  const [selectedSection, setSelectedSection] = useState('home');

  // Function to render content based on selected section
  const renderContent = () => {
    switch (selectedSection) {
      case 'financialPlanning':
        return (
          <>
            <h1 className={styles.title}>What is Budgeting?</h1>
            <p className={styles.paragraph}>
            Budgeting is the process of creating a financial plan that outlines expected income and expenses over a specific period. It serves as a practical tool for managing finances effectively, ensuring that income covers necessary expenses, and facilitating savings and goal attainment. Budgeting empowers individuals and organizations to make informed financial decisions and achieve financial stability.
            </p>
            <h2 className={styles.title}>Benefits of Budgeting</h2>
            <ol className={styles.list}>
            <li className={styles.listItem}>    
            <strong className={styles.strongText}>Financial Awareness:</strong> Budgeting allows you to gain a clear understanding of your financial situation by tracking your income and expenses. It helps you identify where your money comes from and where it goes, providing valuable insights into your spending habits.</li>
            <li className={styles.listItem}> <strong className={styles.strongText}>Expense Control:</strong> With a budget, you can establish spending limits for different categories, including essentials and discretionary expenses. This empowers you to control your spending, reduce unnecessary costs, and avoid overspending.</li>
            <li className={styles.listItem}> <strong className={styles.strongText}>Goal Achievement:</strong> Budgeting helps you allocate funds toward specific financial goals, whether it's saving for a dream vacation, purchasing a home, or paying off debt. It provides a structured path to achieve these objectives.</li>
            <li className={styles.listItem}> <strong className={styles.strongText}>Emergency Preparedness:</strong> By creating and maintaining an emergency fund as part of your budget, you'll be better prepared to handle unexpected expenses or financial setbacks. This financial safety net provides peace of mind.</li>
    
            <li className={styles.listItem}> <strong className={styles.strongText}>Financial Freedom:</strong> Ultimately, budgeting leads to financial freedom. It allows you to take control of your finances, reduce financial stress, and make informed decisions. With a well-crafted budget, you can work towards a secure and prosperous future.</li>
            </ol>
            <h1 className={styles.title}>What is Financial Planning?</h1>
            
            <p className={styles.paragraph}>Financial planning is the strategic process of setting and managing your financial goals, taking into account your current financial situation and resources. It involves creating a comprehensive roadmap to help you achieve your short-term and long-term financial objectives. Financial planning encompasses various areas, including budgeting, investments, insurance, taxes, retirement planning, estate planning, and more. It empowers individuals and organizations to make informed financial decisions, maximize the efficient use of financial resources, and work towards long-term financial security and wealth accumulation</p>
            <h2 className={styles.title}>Benefits of Financial Planning</h2>
            <ol className={styles.list}><li className={styles.listItem}><strong className={styles.strongText}>Goal Achievement:</strong> Financial planning provides a structured approach to setting and achieving your financial goals. Whether it's saving for a comfortable retirement, buying a home, or funding your child's education, financial planning helps you create a roadmap to turn your dreams into reality.</li>

<li className={styles.listItem}><strong className={styles.strongText}>Risk Management:</strong> Effective financial planning involves assessing and managing various financial risks, such as unexpected expenses, market fluctuations, or loss of income. By identifying potential risks and implementing risk management strategies, you can safeguard your financial well-being.</li>

<li className={styles.listItem}><strong className={styles.strongText}>Wealth Accumulation:</strong> Through careful investment planning and wealth-building strategies, financial planning enables you to grow your assets over time. This can lead to increased financial security and the opportunity to create generational wealth.</li>

<li className={styles.listItem}><strong className={styles.strongText}>Tax Efficiency:</strong> A well-structured financial plan considers tax implications and strategies for optimizing tax efficiency. This may include taking advantage of tax-advantaged accounts, deductions, and credits, which can help you keep more of your hard-earned money.</li>

<li className={styles.listItem}><strong className={styles.strongText}>Peace of Mind:</strong> Perhaps one of the most significant benefits of financial planning is the peace of mind it offers. Knowing that you have a well-thought-out financial plan in place provides confidence and reduces financial stress, allowing you to focus on enjoying life and pursuing your goals.</li></ol>
            
       

          </>
        );
      case 'creatingBudget':
        return (
        <>
        <h1 className={styles.title}>Creating a Budget</h1>
<p className={styles.paragraph}>
  A budget is your financial blueprint, guiding you towards your goals while keeping your spending in check. It's not just about managing your money; it's about achieving your dreams. Let's break down how to create one and make your financial aspirations a reality.
</p>
<ol className={styles.list}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Track Your Income and Expenses:</strong> Start by noting down your monthly income, including salary, bonuses, and any other sources. List all your expenses, including fixed costs like rent or mortgage payments and variable expenses like groceries, dining out, and entertainment.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Categorize Your Expenses:</strong> Divide your expenses into categories such as essentials (e.g., housing, utilities), savings (e.g., retirement contributions, emergency fund), and leisure (e.g., entertainment, dining). This categorization helps you understand your spending patterns and identify areas where you can save.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Set Spending Limits:</strong> Based on your income and expense analysis, set realistic spending limits for each category. Prioritize essentials and savings while allocating a portion for leisure activities.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Align with Your Goals:</strong> Ensure that your budget aligns with your financial goals, whether it's saving for a down payment on a house, planning a vacation, or achieving long-term financial independence.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Be Flexible:</strong> Life is unpredictable. Be prepared to adjust your budget as circumstances change, such as unexpected expenses or changes in income.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Regular Review:</strong> Regularly review your budget to ensure you're on track with your financial goals. Celebrate your successes and make adjustments as needed to stay on the path to financial success.
  </li>
</ol>
<p className={styles.paragraph}>
  Remember, a budget is not set in stone; it's a living document that evolves with your financial journey. Stay flexible and adapt it as your life and goals change. With a well-crafted budget, you're not just managing money; you're creating a roadmap to your dreams.
</p>
</>
);
      case 'maintainingBudget':
        return (
          <>
              
<h1 className={styles.title}>Maintaining a Budget</h1>
<p className={styles.paragraph}>
  Creating a budget is a commendable first step on your financial journey, but it's the ongoing commitment to maintaining it that truly empowers you to take control of your finances and achieve your goals. In this section, we'll explore essential advice on how to not only stick to your budget but also make necessary adjustments as life circumstances inevitably change.
</p>
<ol className={styles.list}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Consistency is Key:</strong> Consistency is the cornerstone of budget maintenance. Make it a habit to track your expenses regularly. Whether you choose to do it daily, weekly, or monthly, staying consistent helps you maintain awareness of your financial situation.


  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Review and Adjust:</strong> Life rarely unfolds exactly as planned. Unexpected expenses, fluctuations in income, or changes in priorities can throw a curveball into your budget. The key here is to be flexible. Periodically review your budget to ensure it still aligns with your financial goals, and be prepared to make adjustments as needed.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Prioritize Essentials:</strong> Essential expenses, such as housing, utilities, groceries, and debt payments, should always be the top priority in your budget. Ensure these necessities are covered first before allocating funds to discretionary spending.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Cut Unnecessary Expenses:</strong> Identify and cut unnecessary or non-essential expenses. Review your spending habits to pinpoint areas where you can make cost-effective choices. Maybe it's dining out less frequently or canceling unused subscriptions.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>The Envelope Method:</strong> Consider using the envelope method for discretionary spending categories. Allocate a fixed amount of cash in envelopes for categories like entertainment, dining out, or shopping. When the envelope is empty, that's your cue to stop spending in that category for the month.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Track Your Progress:</strong> Keep track of your progress towards your financial goals. Use visual aids like charts or graphs to see your accomplishments over time. Celebrate your milestones, no matter how small, to stay motivated.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Emergency Fund:</strong> Prioritize building and maintaining an emergency fund. This financial safety net can prevent you from dipping into other budget categories when unexpected expenses arise.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Seek Accountability:</strong> Share your budgeting goals with a trusted friend or family member who can help hold you accountable. Having someone to share your triumphs and challenges with can provide valuable support.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Use Technology:</strong> Leverage budgeting apps and tools to streamline the process. Many apps offer expense tracking, automatic categorization, and even notifications for upcoming bills or overspending in specific categories.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Practice Self-Compassion:</strong> Remember that budgeting is a journey, not a destination. It's okay to make mistakes or veer off course occasionally. What matters most is your commitment to getting back on track and learning from your experiences.
  </li>
</ol>
<p className={styles.paragraph}>
  Maintaining a budget requires dedication and a willingness to adapt. By consistently reviewing and adjusting your budget, prioritizing essentials, reducing unnecessary expenses, and practicing self-compassion, you'll be well-equipped to navigate life's financial challenges and seize opportunities on your path to financial well-being. Your budget is not a restrictive tool; it's a liberating roadmap to a more secure and prosperous future.
</p></>
        );
        case 'settingGoals':
        return (<></>);

        case 'emergencyFunds':
        return (<></>);

        case 'debtManagement':
        return (<></>);

        case 'savingInvesting':
        return (<></>);

        case 'financialEducation':
        return (<></>);
      
      default:
        return (
          <>
            <h1 className={styles.title}>Budgeting and Financial Planning</h1>
            <p className={styles.paragraph}>
              Welcome to the Budgeting and Financial Planning Section! Here, we'll take you on a journey into the world of smart financial management, where your financial goals become achievable and your financial future more secure. Whether you're looking to create a budget, set and conquer financial milestones, or explore the tools and strategies for a prosperous tomorrow, you're in the right place. Let's embark on this empowering journey towards financial freedom together!
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
            <li><a onClick={() => setSelectedSection('financialPlanning')}>What is Budgeting and Financial Planning</a></li>
            <li><a onClick={() => setSelectedSection('creatingBudget')}>Creating a Budget</a></li>
            <li><a onClick={() => setSelectedSection('maintainingBudget')}>Maintaining a Budget</a></li>
            <li><a onClick={() => setSelectedSection('settingGoals')}>Setting Financial Goals</a></li>
            <li><a onClick={() => setSelectedSection('emergencyFunds')}>Emergency Funds</a></li>
            <li><a onClick={() => setSelectedSection('debtManagement')}>Debt Management</a></li>
            <li><a onClick={() => setSelectedSection('savingInvesting')}>Saving and Investing</a></li>
            <li><a onClick={() => setSelectedSection('financialEducation')}>Financial Education</a></li>
          </ul>
      </div>
      <div className={styles.contentWrapper}>
      <div className={styles.centeredContent}>
      {renderContent()}
        </div>
    
      </div>
    </div>
    </div>
    
  );
}
export default Budget;