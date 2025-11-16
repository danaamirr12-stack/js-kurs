import React, { useState } from 'react';
import './GetinTouch.css';

function GetinTouch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setErrors({});

    
    let newErrors = {};
    
    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!subject) {
      newErrors.subject = 'Subject is required';
    }

    if (!message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message
        })
      });

      if (response.ok) {
        setSuccessMsg('Message sent successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMsg('Failed to send message. Try again.');
      }
    } catch (error) {
      setErrorMsg('Something went wrong!');
      console.log(error);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-container">
        <div className="left-side">
          <p className="small-title">Get in Touch</p>
          <h2>Get Personalized Assistance – Contact Us</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
          <div className="gray-box"></div>
        </div>

        <div className="right-side">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name *</label>
              <input 
                type="text" 
                placeholder="Your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Email *</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group half">
                <label>Telephone</label>
                <input 
                  type="tel" 
                  placeholder="Telephone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input 
                type="text" 
                placeholder="How can we help you" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={errors.subject ? 'input-error' : ''}
              />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label>Comments / Questions *</label>
              <textarea 
                placeholder="Comments" 
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            {errorMsg && <p className="error-message">{errorMsg}</p>}
            {successMsg && <p className="success-message">{successMsg}</p>}

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetinTouch;
// Gjord med AI som bollplank för struktur och problemlösning