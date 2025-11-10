import React from 'react';
import './PricingPlan.css';

const PricingPlan = () => {
  const handleButtonClick = (e) => {
    const card = e.target.closest('.plan-card');
    const planTitle = card.querySelector('h3').textContent;
    const planPrice = card.querySelector('.amount').textContent;
    
    alert('Du valde: ' + planTitle + ' för ' + planPrice + ' kr/månad!');
    
    const originalText = e.target.textContent;
    e.target.textContent = 'Tillagd! ✓';
    e.target.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
      e.target.textContent = originalText;
      e.target.style.backgroundColor = '#f39c12';
    }, 2000);
  };

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <p className="header-label">Pricing Plan</p>
        <h1>Find the Perfect Plan for Your Storage Needs</h1>
      </div>

      <div className="plans-wrapper">
        <div className="plan-card">
          <h3>Bas Paket</h3>
          <div className="price">
            <span className="currency">kr</span>
            <span className="amount">49</span>
            <span className="period">/månad</span>
          </div>
          <p className="description">Perfekt för mindre behov och privatpersoner som vill komma igång.</p>
          <ul className="features">
            <li>✓ 10 GB lagring</li>
            <li>✓ Email support</li>
            <li>✓ Grundläggande säkerhet</li>
            <li>✓ 1 användare</li>
            <li>✓ Månatlig backup</li>
          </ul>
          <button className="btn-rent" onClick={handleButtonClick}>Välj Plan</button>
        </div>

        <div className="plan-card featured">
          <h3>Standard Paket</h3>
          <div className="price">
            <span className="currency">kr</span>
            <span className="amount">99</span>
            <span className="period">/månad</span>
          </div>
          <p className="description">Bäst för små företag och team som växer snabbt.</p>
          <ul className="features">
            <li>✓ 50 GB lagring</li>
            <li>✓ Prioriterad support</li>
            <li>✓ Avancerad säkerhet</li>
            <li>✓ 5 användare</li>
            <li>✓ Veckovis backup</li>
          </ul>
          <button className="btn-rent" onClick={handleButtonClick}>Välj Plan</button>
        </div>

        <div className="plan-card">
          <h3>Plus Paket</h3>
          <div className="price">
            <span className="currency">kr</span>
            <span className="amount">149</span>
            <span className="period">/månad</span>
          </div>
          <p className="description">För växande företag som behöver mer utrymme och funktioner.</p>
          <ul className="features">
            <li>✓ 100 GB lagring</li>
            <li>✓ 24/7 support</li>
            <li>✓ Premium säkerhet</li>
            <li>✓ 15 användare</li>
            <li>✓ Daglig backup</li>
          </ul>
          <button className="btn-rent" onClick={handleButtonClick}>Välj Plan</button>
        </div>

        <div className="plan-card">
          <h3>Premium Paket</h3>
          <div className="price">
            <span className="currency">kr</span>
            <span className="amount">199</span>
            <span className="period">/månad</span>
          </div>
          <p className="description">Komplett lösning för stora organisationer med höga krav.</p>
          <ul className="features">
            <li>✓ Obegränsad lagring</li>
            <li>✓ Dedikerad support</li>
            <li>✓ Max säkerhet</li>
            <li>✓ Obegränsat användare</li>
            <li>✓ Realtids backup</li>
          </ul>
          <button className="btn-rent" onClick={handleButtonClick}>Välj Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;