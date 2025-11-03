import React from 'react';
import './AboutUsSection.css';

const AboutUsSection = () => (
  <section className="about-us-section" id="about-us">
    <div className="about-layout">
      <div className="left-section">
        <div className="gray-bg-section"></div>

        <div className="stat-wrapper">
          <div className="stat-background"></div>  
          <div className="about-stats">
            <div className="stat-box"><h4>12+</h4><p>Years of Experience</p></div>
            <div className="stat-box"><h4>150K+</h4><p>Satisfied Clients</p></div>
            <div className="stat-box"><h4>35+</h4><p>Warehouse</p></div>
          </div>
        </div>
      </div>

      <div className="about-us-wrapper">
        <h1>About Us</h1>
        <h2>Providing a Safe Space for Your Treasured Items</h2>
        <p className="about-description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>

        <div className="about-boxes">
          <div className="about-box">
            <h3>Vision</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
          </div>
          <div className="about-box">
            <h3>Mission</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>
        </div>

        <button className="discover-btn">Discover More</button>
        <p className="contact-info">📞 +49 123 122 424</p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
