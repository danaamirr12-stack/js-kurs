import React from 'react';
import './AboutUs.css';
import AboutUsSection from '../components/AboutUsSection';
import LogoStrip from '../components/LogoStrip';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';

function AboutUs() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </section>

      <AboutUsSection />
      <LogoStrip />
      <Testimonials />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}

export default AboutUs;