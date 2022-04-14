import React from 'react';

import { Footer, Blog, Features, WhatREACTWEB, Header } from './container';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <WhatREACTWEB />
      <Features />

      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
