import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Finance from './components/finance';
import Sales from './components/sales';

function App() {
  return (
    <div className='px-96'>
      <Header />
      <Finance />
      <Sales />
    </div>
  );
}

export default App;
