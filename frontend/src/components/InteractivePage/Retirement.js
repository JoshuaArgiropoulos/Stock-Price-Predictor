import React, {useState} from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import styles from '../../assets/styles/InvestmentBasics.module.css';


function Retirement() {

  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case 'financialPlanning':
        return (
          <>
         <h2 className={styles.subtitle}>Understanding Retirement Planning</h2>
<p className={styles.paragraph}>
  Retirement planning is a crucial aspect of long-term financial security. It involves setting clear retirement goals and assessing your current financial situation to devise a plan that ensures a comfortable and fulfilling retirement. In this section, we will guide you through the initial steps of retirement planning, from defining your retirement aspirations to evaluating your current financial status.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Setting Retirement Goals:</strong> Start by envisioning your ideal retirement lifestyle. Consider factors such as your desired retirement age, lifestyle preferences, and any specific goals you wish to achieve, like travel or pursuing hobbies. Defining these goals will help you estimate the financial resources you'll need and shape your saving and investment strategies.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Assessing Your Current Financial Situation:</strong> Take an in-depth look at your current financial standing, including your savings, investments, debts, and any other assets. Assessing your current finances, including your income streams and expenditure patterns, is essential for understanding how much you need to save for retirement. It also helps identify areas where you can optimize your spending and increase your savings rate.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Estimating Future Needs:</strong> Based on your retirement goals and current financial situation, estimate the funds you will need to sustain your desired lifestyle in retirement. Consider factors like life expectancy, health care costs, inflation, and potential changes in living expenses. This estimation is crucial for setting realistic saving and investment targets.
  </li>
</ul>
          </>
        );
      case 'creatingBudget':
        return (
          <>
          <h2 className={styles.subtitle}>Retirement Income Sources</h2>
<p className={styles.paragraph}>
  A key aspect of retirement planning involves understanding and maximizing various retirement income sources. From government-sponsored benefits to employer-sponsored plans, these income streams play a vital role in ensuring a financially secure retirement. This section will help you explore and understand these sources, their benefits, and how to optimize them for your retirement.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Government Benefits:</strong> Government-sponsored retirement benefits form a significant part of retirement income. In the United States, this includes Social Security, a program that provides retirement, disability, and survivor benefits. In Canada, the Canada Pension Plan (CPP) and Old Age Security (OAS) are primary sources of retirement income. Understanding the eligibility criteria, when and how to claim these benefits, and their impact on your overall retirement plan is crucial for maximizing your financial support during retirement.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Employer-Sponsored Plans:</strong> If your employer offers retirement plans, such as 401(k)s in the United States or pension plans in Canada, take full advantage of them. These plans often come with benefits like employer matching contributions, which can significantly enhance your retirement savings. Familiarize yourself with the contribution limits, vesting schedules, and withdrawal rules of these plans. Maximizing your contributions to these plans, especially if there is an employer match, can provide a substantial boost to your retirement savings.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Other Retirement Income Sources:</strong> Besides government and employer-sponsored plans, consider other potential income sources like personal savings, investments in IRAs (Individual Retirement Accounts), annuities, or income from part-time work during retirement. Diversifying your income sources can provide additional financial security and flexibility in retirement.
  </li>
</ul>
          </>
        );
        case 'debt':
          return (
            <>
            <h2 className={styles.subtitle}>Creating a Retirement Plan</h2>
<p className={styles.paragraph}>
  Crafting a comprehensive retirement plan is essential for a secure and comfortable retirement. A critical step in this process is calculating how much money you will need to maintain your desired lifestyle after you stop working. This involves a detailed assessment of various factors impacting your retirement finances. The following insights will guide you in estimating your retirement income needs, ensuring a well-prepared and financially stable retirement.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Calculating Retirement Needs:</strong> Begin by estimating your monthly living expenses during retirement, taking into account your current lifestyle and any anticipated changes. Include all costs, such as housing, utilities, food, transportation, and leisure activities. Don't overlook potential healthcare costs, which can significantly increase as you age. Additionally, factor in inflation, as the cost of living is likely to rise over time. By accurately estimating these expenses, you can determine the amount of savings and income you'll need to support your retirement lifestyle.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Projecting Retirement Income:</strong> Assess all potential sources of retirement income, including government and employer-sponsored benefits, personal savings, investments, and any part-time work. Compare these projected income streams against your estimated expenses to see if there are any shortfalls.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Adjusting Your Savings Plan:</strong> If you anticipate a gap between your income and expenses, consider adjusting your savings plan. This might involve increasing your savings rate, adjusting your investment strategy for better returns, or planning to work longer before retiring.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Seeking Professional Advice:</strong> Consider consulting with a financial planner specializing in retirement planning. They can offer personalized advice and help refine your plan to ensure it aligns with your goals and financial situation.
  </li>
</ul>
            </>


          );
          case 'loans':
            return(
              <>
              <h2 className={styles.subtitle}>Regular Review and Adjustments</h2>
<p className={styles.paragraph}>
  A successful retirement plan is not a set-and-forget strategy; it requires ongoing attention and adjustment. Regular reviews of your retirement plan are essential to ensure it remains aligned with your changing life circumstances, financial situation, and evolving retirement goals. Periodic check-ins and adjustments can help you stay on track and make the necessary changes to adapt to both expected and unexpected developments.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Periodic Check-Ins:</strong> Commit to reviewing your retirement plan at least annually or after significant life events such as a change in employment, marital status, or health condition. This review should include assessing your current savings, investment performance, and any changes in your retirement income expectations.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Adjusting Your Plan:</strong> Based on your review, make necessary adjustments to your savings rate, investment choices, or retirement timeline. For instance, if your investments are underperforming, consider revising your investment strategy or seeking professional advice. If your expenses have increased or decreased significantly, recalibrate your savings goals accordingly.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Staying Informed:</strong> Keep abreast of changes in tax laws, investment options, and economic conditions that could impact your retirement plan. Staying informed enables you to make proactive adjustments to your strategy.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Seeking Professional Guidance:</strong> Don’t hesitate to consult with a financial advisor for a more thorough review and professional insights, especially if you encounter complex financial decisions or significant changes in your life.
  </li>
</ul></>
            )

      default:
        return (
          <>
            <h1 className={styles.title}>Strategizing Your Future: Retirement Planning Made Simple</h1>
            <p>Welcome to the world of Retirement Planning, a journey that allows you to envision and secure the future you've always dreamed of. In this comprehensive guide, we will explore the essential aspects of planning for retirement, offering insights, tips, and strategies to help you build a financial nest egg that will support you during your golden years. Whether you're just starting or well into your career, it's never too early or too late to embark on the path to a comfortable retirement.</p>
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
    <button className={styles.button} onClick={() => setSelectedSection('financialPlanning')}>
      Understanding Retirement Planning
    </button>
  </li>
  <li>
    <button className={styles.button} onClick={() => setSelectedSection('creatingBudget')}>
      Retirement Income Sources
    </button>
  </li>
  <li>
    <button className={styles.button} onClick={() => setSelectedSection('debt')}>
      Creating a Retirement Plan
    </button>
  </li>
  <li>
    <button className={styles.button} onClick={() => setSelectedSection('loans')}>
      Regular Review and Adjustments
    </button>
  </li>
</ul>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.centeredContent}>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Retirement;