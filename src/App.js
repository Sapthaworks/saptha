import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Designs from './components/Designs';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <header>
          <div id='heading'>
            <img id="logo" src={`${process.env.PUBLIC_URL}/Images/SAPTHA.ico`} alt="saptha logo" />
            <div className='title'>Saptha Interiors</div>
          </div>

          <div className='navigators'>
            <Link className="navfield" to="/">Home</Link>
            <Link className="navfield" to="/designs">Designs</Link>
            <Link className="navfield" to="/services">Services</Link>
            <Link className="navfield" to="/contact">Contact</Link>
          </div>
        </header>

        <div className="components">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

      {/* Plain Footer with Contact Card */}
      <footer>
        <div>
          <div>

            {/* Left: Brand Info */}
            <div>
              <h2>Saptha Interiors</h2>
              <p>Creative Interior Design Company</p>
              <p>© {new Date().getFullYear()} Saptha Interiors. All rights reserved.</p>
            </div>

            {/* Right: Contact Info */}
            <div>
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:sapthaworks@gmail.com">sapthaworks@gmail.com</a></p>
              <p>
                Phone:
                <a href="tel:+919550227296"> 9550227296</a>,
                <a href="tel:+919494743737"> 9494743737</a>,
                <a href="tel:+919390412195"> 9390412195</a>
              </p>
              <div>
                <a
                  href="https://www.instagram.com/sapthainteriors/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
