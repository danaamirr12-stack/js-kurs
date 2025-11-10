import React from 'react';
import { Link } from 'react-router-dom';
import './LogoRow.css';

const LogoRow = () => (
  <div className="logo-row">
    <img src="/aidlogo.svg" alt="Aid Logo" className="main-logo" />
    <nav className="main-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <Link to="/booking" className="book-now-button">Book Now</Link>
    </nav>
  </div>
);

export default LogoRow;