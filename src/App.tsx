// @ts-nocheck
import React from 'react';
import './styles.css';
import Bulletin from './components/bulletin';
import Cart from './components/cart';
import { AppProvider } from 'context';

const App = () => {
  return (
    <AppProvider>
      <div className='w-full p-4 h-screen bg-[#28616b]'>
          <Bulletin />
          <Cart />
      </div>
    </AppProvider>
  );
};

export default App;
