/**
 * OurServices.jsx
 * Layout-struktur utvecklad med AI-hjälp copilot som bollplank.
 * Baserat på min egen design-spec, AI hjälpte implementera CSS Grid-layout.
 */
import React from 'react';
import './OurServices.css';


const OurServices = () => (
  <section className="services-wrapper" id="services">
    <div className="services-header">
      <div className="services-header-left">
        <h1>Our Services</h1>
        <h2>Specialized Storage for Every Special Item</h2>
      </div>
      <div className="services-header-right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisl non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>
    </div>

    <div className="services-grid">
      <div className="services-left-column">
        <div className="service-box yellow-border">
          <h3>Diverse Unit Sizes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="service-box">
          <h3>Moving Assistance</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      <div className="services-center">
        <div className="gray-box">
          <p className="center-label">LOREM</p>
        </div>
      </div>

      <div className="services-right-column">
        <div className="service-box">
          <h3>Vehicle Storage</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="service-box">
          <h3>Top-Notch Security</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurServices;
