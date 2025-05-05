import React from 'react';
import { useState } from 'react';
import './App.css'
import Home from './components/Home';
import Designs from './components/Designs';
import About from './components/About';
import Contact from './components/Contact';
function App() {
const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'designs': return <Designs />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };

  return (
    <>
      <header>
      <div id='heading'>
        <img id="logo" src={`${process.env.PUBLIC_URL}/Images/SAPTHA.ico`} alt="saptha logo" />
        <div className='title'>Saptha Interiors</div>
      </div>

        <div className='navigators'>
          <div className="navfield" onClick={() => setActiveTab('home')}>Home</div>
          <div className="navfield" onClick={() => setActiveTab('designs')}>Designs</div>
          <div className="navfield" onClick={() => setActiveTab('about')}>Services</div>
          <div className="navfield" onClick={() => setActiveTab('contact')}>Contact</div>
        </div>
      </header>

      <div className="components">
        {renderContent()}
      </div>
    </>
  );
}

export default App;
