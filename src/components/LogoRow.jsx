import React from 'react';
import './LogoRow.css';

const LogoRow = ({ scrollToSection }) => (
  <div className="logo-row">
    <img src="/aidlogo.svg" alt="Aid Logo" className="main-logo" />
    <nav className="main-menu">
      <ul>
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('about-us')}>About Us</button></li>
        <li><button onClick={() => scrollToSection('services')}>Services</button></li>
        <li><button onClick={() => scrollToSection('contact-us')}>Contact Us</button></li>
      </ul>
      <a href="/bokning" className="book-now-button">Book Now</a>
    </nav>
  </div>
);

export default LogoRow;
