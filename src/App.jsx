import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LogoRow from './components/LogoRow';
import AboutUsSection from './components/AboutUsSection';
import LogoStrip from './components/LogoStrip';
import OurServices from './components/OurServices';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <div className="app">
      <Header />
      <LogoRow scrollToSection={scrollToSection} />
      <HeroSection />
      <AboutUsSection />
      <LogoStrip />
      <OurServices />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;