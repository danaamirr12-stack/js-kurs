import React from 'react';
import './FindUs.css';

function FindUs() {
  return (
    <section className="findus-section">
      <div className="findus-container">
        <div className="person-box">
          <div className="person-img"></div>
        </div>
        <div className="info-box">
          <h2>Find Us On:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className="contact-items">
            <img src="/Call Center.svg" alt="Call Center" />
            <img src="/Email Address.svg" alt="Email Address" />
            <img src="/location.svg" alt="Location" />
          </div>
          <div className="social-box">
            <h3>Our Social Media</h3>
            <div className="line"></div>
            <div className="findus-social-icons">
              <a href="#"><img src="/Facebook.svg" alt="facebook" /></a>
              <a href="#"><img src="/Humble.svg" alt="twitter" /></a>
              <a href="#"><img src="/Instagram.svg" alt="instagram" /></a>
              <a href="#"><img src="/Youtube.svg" alt="youtube" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindUs;