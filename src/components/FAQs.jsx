import { useState, useEffect } from 'react';
import './FAQs.css';

function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://win25-jsf-assignment.azurewebsites.net/api/faq')
      .then(response => {
        if (!response.ok) {
          throw new Error('API fungerar inte');
        }
        return response.text();
      })
      .then(text => {
        if (text) {
          const data = JSON.parse(text);
          setFaqs(data);
        } else {
          console.log('Tom data från API, använder testdata');
          setFaqs([
            { id: 1, title: "Do you offer climate-controlled storage units?", content: "Yes, we offer climate-controlled storage units." },
            { id: 2, title: "How long can I rent a storage unit?", content: "You can rent for as long as you need." },
            { id: 3, title: "Can I change the size of my storage unit?", content: "Yes, you can change size based on availability." },
            { id: 4, title: "How do I pay for my storage unit?", content: "We accept credit cards, debit cards, and online payments." }
          ]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log('Använder testdata:', error);
        setFaqs([
          { id: 1, title: "Do you offer climate-controlled storage units?", content: "Yes, we offer climate-controlled storage units." },
          { id: 2, title: "How long can I rent a storage unit?", content: "You can rent for as long as you need." },
          { id: 3, title: "Can I change the size of my storage unit?", content: "Yes, you can change size based on availability." },
          { id: 4, title: "How do I pay for my storage unit?", content: "We accept credit cards, debit cards, and online payments." }
        ]);
        setLoading(false);
      });
  }, []);

  function handleClick(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  if (loading) {
    return <div style={{padding: '50px', textAlign: 'center'}}>Laddar...</div>;
  }

  return (
    <div className="faq-section">
      <div className="faq-left">
        <p className="faq-tag">FAQs</p>
        <h2>Frequently Ask Questions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>

      <div className="faq-right">
        <div className="faq-box yellow-special">
          <button onClick={() => handleClick('yellow')} className="faq-btn yellow-btn">
            <span>Can I delete my shared information?</span>
            <span className="close-icon">{openIndex === 'yellow' ? '×' : ''}</span>
          </button>
          {openIndex === 'yellow' && (
            <div className="faq-svar">
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.</p>
            </div>
          )}
        </div>

        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-box">
            <button onClick={() => handleClick(index)} className="faq-btn">
              <span>{faq.title}</span>
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-svar">
                <p>{faq.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
// Gjord med AI som bollplank för struktur och problemlösning