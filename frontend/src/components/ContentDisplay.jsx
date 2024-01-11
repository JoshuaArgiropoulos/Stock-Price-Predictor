// ContentDisplay.jsx
import React from 'react';
import '../assets/styles/ContentDisplay.css';
import InvestmentTypes from './InvestmentTypes';
import AccountTypesIntro from './AccountTypesIntro';
import InvestingBasicsIntro from './InvestingBasicsIntro';
import BudgetingAndFinancialPlanningIntro from './BudgetingAndFinancialPlanningIntro';
import SavingsAndInvestmentsIntro from './SavingsAndInvestmentsIntro';
import CreditManagementIntro from './CreditManagementIntro';
import RetirementPlanningIntro from './RetirementPlanningIntro';
import TaxationIntro from './TaxationIntro';

const ContentDisplay = ({ topic }) => {
  const renderContent = () => {
    switch (topic) {
      case "Investment Types":
        return <InvestmentTypes/>;
      case "Account Types in Canada":
        return <AccountTypesIntro/>;
      case "Investment Basics":
        return <InvestingBasicsIntro/>;
      case "Budgeting and Financial Planning":
        return <BudgetingAndFinancialPlanningIntro/>
      case "Savings and Investments":
        return <SavingsAndInvestmentsIntro/>
      case "Credit and Loan Management":
        return <CreditManagementIntro/>
      case "Taxation":
        return <TaxationIntro/>
      case "Retirement Planning":
        return <RetirementPlanningIntro/>
      
      default:
        return <p>Please select a topic to see the information.</p>;
    }
  };

  return (
    <div className="content-display">
      {!topic && <h2>Welcome to Education Options</h2>} {/* Render the title only when no topic is selected */}
      
      {renderContent()}
    </div>
  );
};

export default ContentDisplay;