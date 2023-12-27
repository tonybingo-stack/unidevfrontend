import './App.css';

import Header from './components/header';
import Finance from './components/finance';
import Sales from './components/sales';
import Toast from './components/toast';

function App() {

  return (
    <div className='px-96'>
      <Header />
      <Finance />
      <Sales />
      <Toast />
    </div>
  );
}

export default App;
