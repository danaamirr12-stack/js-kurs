import React from 'react';
import './ContactUs.css';
import GetinTouch from '../components/GetinTouch';
import FindUs from '../components/FindUs';
import FAQs from '../components/FAQs';
import Newsletter from '../components/Newsletter';

function ContactUs() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </section>
      <GetinTouch />
      <FindUs />
      <FAQs />
      <Newsletter />
    </>
  );
}

export default ContactUs;