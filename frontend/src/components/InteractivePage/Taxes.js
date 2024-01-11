import React, {useState} from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import styles from '../../assets/styles/InvestmentBasics.module.css';


function Taxes() {

  const [selectedSection, setSelectedSection] = useState(null);

  const renderContent = () => {
    switch (selectedSection) {
      case 'financialPlanning':
        return (
          <>
         
          </>
        );
      case 'creatingBudget':
        return (
          <>
          
          </>
        );
        case 'debt':
          return (
            <>
            </>


          );

      default:
        return (
          <>
            
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

export default Taxes;