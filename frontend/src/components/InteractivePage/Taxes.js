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
         <h2 className={styles.subtitle}>Basics of Canadian Income Tax</h2>
<p className={styles.paragraph}>
  Navigating the Canadian tax system is crucial for residents and citizens to ensure compliance and optimal financial planning. Understanding the types of income subject to taxation, along with the varying tax brackets, is essential. This section provides an overview of Canada's tax system, the current income tax rates, and important deadlines for tax filings.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Canadian Tax System Overview:</strong> Canada's tax system is progressive, meaning tax rates increase as income rises. It includes taxation on various income types such as employment income, business profits, and investment earnings. Understanding which income types are taxable and the applicable deductions and credits can significantly impact your financial planning and tax obligations.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Income Tax Rates:</strong> The federal government sets specific tax brackets, with rates ranging from lower percentages for basic income levels to higher rates for higher income brackets. Each province and territory also has its own set of tax rates, which are applied in addition to federal taxes.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Tax Deadlines:</strong> Familiarize yourself with key tax deadlines to avoid penalties and interest. The deadline for most Canadians to file their income tax return is April 30th. If you or your spouse/common-law partner are self-employed, the deadline extends to June 15th, although any taxes owed are still due by April 30th.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Staying Informed:</strong> Tax laws and rates can change, so it’s important to stay informed about any updates or adjustments. Consulting with a tax professional or utilizing reliable tax software can assist in accurate and efficient tax preparation and filing.
  </li>
</ul>
          </>
        );
      case 'creatingBudget':
        return (
          <>
          <h2 className={styles.subtitle}>Deductions and Tax Credits</h2>
<p className={styles.paragraph}>
  In Canada, understanding and utilizing tax deductions and credits is key to optimizing your tax situation. These tools can significantly reduce your tax liability and potentially lead to substantial savings. This section will explore common tax deductions and credits available to Canadian taxpayers, providing insights into how they can be applied to enhance your financial position.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Tax Deductions:</strong> Familiarize yourself with common tax deductions, which reduce the amount of income you're taxed on. Contributions to Registered Retirement Savings Plans (RRSPs) are a prominent example, allowing you to defer tax on the contributed amount. Employment expenses, such as home office expenses or professional dues, can also be deducted under certain conditions. Utilizing these deductions effectively can lower your taxable income and hence your tax bill.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Tax Credits:</strong> Tax credits reduce your tax bill directly and can be non-refundable or refundable. The Canada Child Benefit (CCB) is a notable refundable tax credit, providing financial assistance to eligible families for the care of children under 18. The Goods and Services Tax Credit (GSTC) helps offset the GST or HST paid by lower-income families. The Disability Tax Credit (DTC) is available to those with severe and prolonged physical or mental impairments. Leveraging these credits can potentially reduce the amount of tax you owe or even result in a tax refund.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Maximizing Benefits:</strong> To maximize the benefits from deductions and credits, ensure accurate and complete documentation of all eligible expenses and consult with a tax professional if needed. Staying informed about eligibility criteria and application processes is crucial for fully utilizing these tax benefits.
  </li>
</ul>
          </>
        );
        case 'debt':
          return (
            <>

<h2 className={styles.subtitle}>Tax Planning Strategies</h2>
<p className={styles.paragraph}>
  Effective tax planning is crucial for maximizing financial efficiency and achieving long-term financial goals in Canada. It involves understanding and utilizing various strategies to minimize tax liabilities. In this section, we'll explore key tax planning strategies, including maximizing RRSP contributions, employing tax-efficient investment tactics, and understanding the nuances of estate planning to safeguard your financial legacy.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Maximizing RRSP Contributions:</strong> Registered Retirement Savings Plans (RRSPs) are a cornerstone of tax planning in Canada. Contributions to RRSPs are tax-deductible, reducing your taxable income. They also allow your investments to grow tax-free until withdrawal. Understanding the contribution limits and strategically planning your contributions can significantly benefit your long-term financial health.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Tax-Efficient Investments:</strong> Utilizing investment vehicles like Tax-Free Savings Accounts (TFSAs) and non-registered investment accounts can help minimize taxes on investment income and capital gains. TFSAs offer tax-free growth and withdrawals, making them ideal for various investment types. Non-registered accounts, while taxable, offer flexibility and potential benefits depending on your marginal tax rate and investment strategy.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Estate Planning:</strong> Effective estate planning ensures a smoother transfer of assets to your heirs while minimizing the tax impact. Strategies include designating beneficiaries for RRSPs and TFSAs, using trusts, and understanding the tax implications of different asset types. Proper estate planning not only secures your financial legacy but also provides clarity and support to your beneficiaries during a difficult time.
  </li>
</ul>
            </>


          );
          case 'loans':
            return(
              <>
              <h2 className={styles.subtitle}>Filing Your Taxes</h2>
<p className={styles.paragraph}>
  Filing taxes accurately and on time is an essential part of financial responsibility in Canada. There are various methods for filing taxes, each with its own advantages, and a range of tax forms specific to different financial situations. This section provides an overview of the tax filing methods and common tax forms, helping you navigate the process with confidence and ease.
</p>
<ul className={styles.unorderedList}>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Tax Filing Methods:</strong> Canadian taxpayers can file their taxes through several methods. Paper filing, though traditional, is suitable for those with straightforward tax situations. Electronic filing, using certified tax software, is increasingly popular for its convenience and efficiency. It can be especially beneficial for more complex tax situations. Some tax software also offers the option of directly submitting your tax return online, simplifying the process further.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Common Tax Forms:</strong> The T1 General Income Tax and Benefit Return is the primary form used by individuals. It includes information about your income, deductions, and credits. Understanding how to accurately complete this form is crucial. Additional forms and schedules may be required depending on your income sources, deductions, and credits. Familiarizing yourself with these forms, or consulting a tax professional if needed, can ensure accurate and complete tax filing.
  </li>
  <li className={styles.listItem}>
    <strong className={styles.strongText}>Staying Organized:</strong> Keeping your financial documents organized throughout the year can significantly ease the tax filing process. Collect all necessary income statements, receipts for deductions and credits, and any other relevant financial records well in advance of the tax filing deadline.
  </li>
</ul>
              </>
            );
          case 'tax':
            return(
              <>
              </>
            );

      default:
        return (
          <>
            <h1 className={styles.title}>Understanding Canadian Taxation</h1>
            <p>Welcome to the world of Canadian taxation, where having a solid understanding of income tax, deductions, and effective tax planning is essential for managing your financial affairs. In this comprehensive guide tailored to Canada's tax system, we will delve into the basics of income tax, explore various deductions and credits available to Canadian taxpayers, offer guidance on tax planning and filing, and provide insights into tax-efficient financial strategies unique to the Canadian landscape.</p>
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
      Basic of Canadian Income Taxes
    </button>
  </li>
  <li>
    <button className={styles.button} onClick={() => setSelectedSection('creatingBudget')}>
      Deductions and Tax Credits
    </button>
  </li>
  <li>
    <button className={styles.button} onClick={() => setSelectedSection('debt')}>
      Tax Planning Strategies
    </button>
  </li>
  <li>
    <button className={styles.button} onClick={() => setSelectedSection('loans')}>
      Filing Your Taxes
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

export default Taxes;