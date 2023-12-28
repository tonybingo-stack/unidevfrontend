import React, { useState } from 'react';
import './App.css';

import Header from './components/header';
import Finance from './components/finance';
import Sales from './components/sales';
import Toast from './components/toast';
import FinanceCard from './components/financecard';

function App() {
  const [isFinanceCardVisible, setIsFinanceCardVisible] = useState(false);

  return (
    <div className='flex flex-col px-96'>
      <Header />
      <Finance />
      <FinanceCard isVisible={isFinanceCardVisible} />
      <Sales myClass='' />
      <Toast setFinanceCardVisible={setIsFinanceCardVisible} />
    </div>
  );
}

export default App;
