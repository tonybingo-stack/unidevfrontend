import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Header from './components/header';
import Finance from './components/finance';
import Sales from './components/sales';
import Toast from './components/toast';
import FinanceCard from './components/financecard';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='flex flex-col px-96'>
      <Header />
      <Finance />
      <FinanceCard isVisible={isVisible} />
      <Sales myClass='' />
      <Toast setFinanceCardVisible={setIsVisible} />
    </div>
  );
}

export default App;
