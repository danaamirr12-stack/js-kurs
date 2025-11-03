import React, { useState, useEffect } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => {
        console.log('API Data:', data);
        setTestimonials(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Kunde inte ladda recensioner');
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <div className="laddar">Laddar recensioner...</div>;
  }
 
  if (error) {
    return <div className="fel">{error}</div>;
  }
  
  return (
    <section className="testimonials">
      <p className="testimonials-overtitle">Testimonials</p>
      <h2>See What Our Client Have to Say</h2>
      <p className="testimonials-undertitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio quis molestie nisi sed dui lacus qravida.
      </p>
     
      <div className="testimonials-grid">
        {testimonials.map((recension) => (
          <div key={recension.id} className="recension-kort">
            <img src="/Stars.svg" alt="stars" className="stars-icon" />
            <p className="kommentar">{recension.comment}</p>
           
            <div className="recension-footer">
              
              <img 
                src={recension.avatarUrl}
                alt={recension.author} 
                className="avatar"
              />
              
              <div className="recension-info">
                <h3>{recension.author}</h3>
                <p className="jobb">{recension.jobRole}</p>
              </div>
              
              <img src="/ikonTest.svg" alt="quote" className="quote-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;