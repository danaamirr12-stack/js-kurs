import React from 'react';
import './ContactUs.css';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
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

      <ContactForm />
      <ContactInfo />
      
      <Newsletter />
    </>
  );
}

export default ContactUs;