import React from 'react';
import './FAQ.css';  // Import the CSS file

function FAQ() {
  return (
    <section className="faq-section">
      <div className="faq-left">
        <h2>FAQs</h2>
        <p>Here are frequently asked questions to clear all your doubts.</p>
        <div className="faq-contact">
          <h4>Still have doubts?</h4>
          <a href="#">
            <span role="img" aria-label="phone">📞</span> Talk to our representative
          </a>
        </div>
      </div>

      <div className="faq-right">
        <div className="faq-item">
          <p>How do I schedule an interview?</p>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-item">
          <p>Will I be charged per interview?</p>
          <span className="faq-icon">+</span>
        </div>
        <div className="faq-item">
          <p>Can I get a trial for On-demand interviews?</p>
          <span className="faq-icon">+</span>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
