import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Designs from './components/Designs';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <header>
        <div id='heading'>
          <img id="logo" src={`${process.env.PUBLIC_URL}/Images/SAPTHA.ico`} alt="saptha logo" />
          <div className='title'>Saptha Interiors</div>
        </div>

        <div className='navigators'>
          <Link className="navfield" to="/">Home</Link>
          <Link className="navfield" to="/designs">Designs</Link>
          <Link className="navfield" to="/about">Services</Link>
          <Link className="navfield" to="/contact">Contact</Link>
        </div>
      </header>

      <div className="components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
