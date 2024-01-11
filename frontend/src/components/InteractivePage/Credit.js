import React, { useState } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import styles from '../../assets/styles/InvestmentBasics.module.css';

function Credit() {
  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case 'financialPlanning':
        return (
          <>
          <h2 className={styles.title}>Understanding Credit Scores and Reports</h2>
<p className={styles.paragraph}>
  Understanding credit scores and reports is fundamental to managing your financial health. Credit scores and reports greatly influence your access to credit and the terms you receive. In this section, we will delve into what credit scores are, how they are calculated, and their significance in your financial life. We will also guide you through understanding and interpreting credit reports, enabling you to effectively manage and improve your credit standing.
</p>
<h2 className={styles.subtitle}>Explaining Credit Scores</h2>
<p>Credit scores are numerical representations of your creditworthiness, based on your credit history. They are calculated using factors such as payment history, credit utilization, length of credit history, types of credit in use, and recent credit inquiries. A higher score typically indicates better credit health and can result in more favorable loan terms, lower interest rates, and easier approval for credit cards or mortgages. Understanding how your financial behavior affects your credit score is crucial for maintaining a good credit rating.
</p>
<h2 className={styles.subtitle}>Interpreting Credit Reports</h2>
<p>A credit report is a detailed record of your credit history, including credit accounts, payment histories, outstanding balances, and potentially, bankruptcies or collections. You can obtain a free credit report annually from major credit reporting agencies. It's essential to regularly review your credit report to ensure accuracy, as errors can negatively impact your credit score. If discrepancies are found, it's important to dispute them promptly to maintain an accurate credit report.</p>

          </>
        );
      case 'creatingBudget':
        return (
          <>
          
          <h2 className={styles.subtitle}>Building Credit History</h2>
<p className={styles.paragraph}>
  A robust credit history is crucial for financial health, whether you're just starting out or repairing damaged credit. Properly managing your credit can open doors to various financial opportunities and favorable loan conditions. Let’s explore effective strategies to establish and strengthen your credit history.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Start with a Credit Card:</strong> Obtain a credit card, even a secured one if necessary, and use it judiciously. Regular, modest purchases followed by prompt full payments each month can establish a pattern of reliability.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Keep Balances Low:</strong> High balances can negatively impact your credit score. Aim to use a small portion of your available credit, ideally less than 30%, to maintain a healthy credit utilization ratio.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Timely Payments:</strong> Consistently paying your bills on time is perhaps the most critical factor in credit scoring. Late payments can significantly harm your credit score.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Consider a Small Loan:</strong> If you have little to no credit history, a small personal or auto loan, which you can reliably pay back, may help in establishing your creditworthiness.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Diversify Your Credit:</strong> Having a mix of credit types, like revolving credit (credit cards) and installment loans (student loans, auto loans), can positively influence your credit score.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Regularly Monitor Your Credit:</strong> Keep an eye on your credit score and report. Regular monitoring can help you understand the impact of your financial actions and catch any inaccuracies or fraudulent activities early.
  </li>
</ul>
          </>
        );
        case 'debt':
          return (
            <>
            <h2 className={styles.subtitle}>Dealing with Debt</h2>
<p className={styles.paragraph}>
  Effective debt management is a critical aspect of financial health. Handling existing debts responsibly can reduce financial stress and pave the way towards financial freedom. This section will provide insights into various strategies for managing debt, including consolidation options, payoff techniques, and negotiation tactics with creditors.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Understand Your Debt:</strong> Begin by getting a clear picture of all your debts – their amounts, interest rates, and due dates. This overview is essential for creating an effective repayment plan.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Debt Consolidation:</strong> Consider consolidating multiple debts into one loan, potentially with a lower interest rate. This can simplify repayments and may reduce the total interest paid over time.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Debt Payoff Strategies:</strong> Adopt a payoff strategy such as the debt snowball (paying off small debts first for motivational wins) or the debt avalanche (targeting high-interest debts first). Choose a method that aligns with your financial situation and motivation style.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Negotiating with Creditors:</strong> Don't hesitate to contact your creditors to negotiate terms, especially if you're facing financial hardship. Many are willing to work with you on payment plans, interest rate reductions, or temporary forbearances.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Professional Help:</strong> If overwhelmed, seek assistance from a credit counselor or a financial advisor. They can provide guidance and possibly help negotiate with creditors on your behalf.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Avoid Accumulating New Debt:</strong> While working on paying off existing debts, be cautious about incurring new ones. Focus on curbing non-essential spending and building a budget that prioritizes debt repayment.
  </li>
</ul></>
          );
          case 'loans':
          return (
            <>
            <h1 className = {styles.title}> Mastering Loans</h1>
            <h2 className={styles.subtitle}>Types of Loans</h2>
<p className={styles.paragraph}>
  Understanding the various types of loans available is crucial for making informed borrowing decisions. Each loan type, such as personal loans, mortgages, auto loans, and student loans, has its own set of characteristics, advantages, and drawbacks. This knowledge can guide you in choosing the most suitable loan for your specific needs and circumstances.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Personal Loans:</strong> These are typically unsecured loans used for personal expenses. They offer flexibility in use but often come with higher interest rates compared to secured loans. Personal loans can be beneficial for consolidating debt or funding large purchases.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Mortgages:</strong> Mortgages are secured loans specifically for purchasing property. They usually have lower interest rates due to the collateral but involve a long-term commitment. Understanding the terms, such as fixed-rate or adjustable-rate, is important.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Auto Loans:</strong> These loans are used for buying vehicles. Like mortgages, auto loans are secured, with the vehicle serving as collateral. Rates and terms can vary based on the vehicle and your credit score.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Student Loans:</strong> Designed to cover education expenses, student loans can be federal or private. Federal loans typically offer more favorable terms and repayment options. It's important to consider the long-term impact of student loan debt on your financial future.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Understanding Terms and Conditions:</strong> Regardless of the loan type, thoroughly understanding the terms, interest rates, repayment schedules, and potential penalties is essential. Always consider your ability to repay the loan and how it aligns with your broader financial goals.
  </li>
</ul>
<h2 className={styles.subtitle}>Loan Applications and Approval</h2>
<p className={styles.paragraph}>
  Successfully navigating the loan application process can significantly increase your chances of approval and obtaining favorable terms. Understanding how lenders assess applications and how your credit score influences the process is key to securing a loan that aligns with your financial goals. Below are tips and insights to guide you through preparing and submitting a loan application.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Preparing Your Application:</strong> Ensure you have all necessary documentation, such as proof of income, employment verification, and any relevant financial records. Providing complete and accurate information is crucial for a smooth application process.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Understanding the Role of Credit Scores:</strong> Your credit score is a key factor in determining loan eligibility, terms, and interest rates. A higher credit score generally leads to better terms. Understand your credit score and, if possible, work to improve it before applying.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Comparing Loan Offers:</strong> Don’t hesitate to shop around and compare offers from different lenders. Look at interest rates, fees, and terms to find the best fit for your financial situation.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Read the Fine Print:</strong> Pay close attention to the details in the loan agreement. Understanding the terms, conditions, and any potential fees or penalties is essential to avoid surprises later on.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Consider Loan Pre-Approval:</strong> Getting pre-approved can give you a clearer idea of what you qualify for and demonstrate to sellers (in cases like mortgages) that you are a serious buyer.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Be Realistic:</strong> Apply for loans that align with your financial capacity. Borrowing more than you can comfortably repay can lead to financial strain and adversely affect your credit score.
  </li>
</ul>

<p className={styles.paragraph}>
  In conclusion, understanding the various types of loans and mastering the loan application process is crucial for making informed and responsible financial decisions. Each loan type comes with its unique features and considerations, whether it's personal loans for flexibility, mortgages for homeownership, auto loans for vehicle purchases, or student loans for education.
</p>
<p className={styles.paragraph}>
  To navigate the world of loans successfully, it's essential to not only understand the terms and conditions but also prepare diligently for the application process. Your credit score plays a significant role in loan approval and terms, so maintaining and improving it is vital. Additionally, comparing loan offers, reading the fine print, and staying realistic about your financial capacity are essential steps in securing the right loan for your needs.
</p>
<p className={styles.paragraph}>
  Remember, a well-informed borrower is in the best position to make wise financial choices. Whether you're considering a loan for personal or investment purposes, the knowledge gained here will help you navigate the loan landscape with confidence and financial prudence.
</p>

</>


          );

      default:
        return (
          <>
          <h2 className={styles.title}>Credit and Loan Management: Navigating Financial Success</h2>
          <p className= {styles.paragraph}>Welcome to the realm of Credit and Loan Management, where financial empowerment awaits. In this comprehensive module, we invite you to embark on a journey to master the art of managing your credit and loans effectively. Here, you'll gain invaluable knowledge and strategic insights to not only maintain a healthy credit score but also navigate the complexities of various loan types.</p>
          <p className= {styles.paragraph}>
Our mission is to empower you with the skills and understanding needed to make informed financial decisions. From deciphering credit reports to responsible credit card usage and smart loan strategies, we're here to guide you every step of the way. Whether you're looking to improve your credit health or make wise borrowing choices, this module is your key to achieving financial success. So, let's dive in and explore the world of Credit and Loan Management, where financial well-being is within your reach.</p>  
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
              <a onClick={() => setSelectedSection('financialPlanning')}>
              Understanding Credit Scores
              </a>
            </li>
            <li>
              <a onClick={() => setSelectedSection('creatingBudget')}>
              Managing and Improving Your Credit
              </a>
            </li>
            <li>
              <a onClick={() => setSelectedSection('debt')}>
              Dealing with Debt
              </a>
            </li>
            <li>
              <a onClick={() => setSelectedSection('loans')}>
              Dealing with Loans
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

export default Credit;