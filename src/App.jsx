import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LogoRow from './components/LogoRow';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <LogoRow />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        
        <Footer />
        <FooterBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;