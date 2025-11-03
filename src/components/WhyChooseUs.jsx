import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-header">
        <div className="left-side">
          <p className="overtitle">Why Choose Us</p>
          <h2>Choose Us for Exceptional<br />Storage Solutions</h2>
          
          <div className="features-list">
            <div className="feature-item">
              <img src="/Iconlås.svg" alt="Security" />
              <div>
                <h3>Security and Safety</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <img src="/Iconpengar.svg" alt="Affordable" />
              <div>
                <h3>Flexible and Affordable</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <img src="/Iconkvast.svg" alt="Clean" />
              <div>
                <h3>Clean and Well-Maintained Facilities</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <img src="/icontid.svg" alt="Access" />
              <div>
                <h3>24/7 and Convenient Access</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right-side">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
          <div className="gray-box"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;