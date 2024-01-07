import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

import StockTable from '../components/StockTable';


function Stocks() {
  return (
    <div className="HomePage">
      <Header />
      <Navigation />
      <StockTable />
      {/* Add some whitespace */}
     
      
    </div>
  );
}

export default Stocks;