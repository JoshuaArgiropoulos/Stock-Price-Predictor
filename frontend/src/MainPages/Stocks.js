import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import StockTable from '../components/StockTable';


function Stocks() {
  return (
    <div className="HomePage">
      <Header />
      <Navigation />
      <StockTable />
      {/* Add some whitespace */}
     
      <div style={{ marginBottom: '8rem' }}></div>
      <Footer />
    </div>
  );
}

export default Stocks;