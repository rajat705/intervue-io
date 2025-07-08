import React from 'react';
import './Security.css';
import { FaKey, FaLayerGroup, FaRocket, FaGlobe, FaArrowRight } from 'react-icons/fa';

const Security = () => {
  return (
    <section className="security">
      <div className="security-container">
        <h2 className="security-title">Security is our top priority</h2>
        <p className="security-subtitle">
          Intervue serves startups to fortune 500 companies with enterprise grade security baked in by design
        </p>

        <div className="security-grid">
          <div className="security-card">
            <FaKey className="security-icon" />
            <h4>Security</h4>
            <p>Protecting your data at every layer is fundamental to how Intervue works</p>
            <FaArrowRight className="arrow-icon" />
          </div>

          <div className="security-card">
            <FaLayerGroup className="security-icon" />
            <h4>Compliances</h4>
            <p>Enterprise grade compliance commitments where we have established controls to adhere to those commitments</p>
            <FaArrowRight className="arrow-icon" />
          </div>

          <div className="security-card-small">
            <div className="small-card-content">
              <FaRocket className="security-icon-small" />
              <h4>Intervue for Startups</h4>
            </div>
            <FaArrowRight className="arrow-icon-small" />
          </div>

          <div className="security-card-small">
            <div className="small-card-content">
              <FaGlobe className="security-icon-small" />
              <h4>Intervue for Enterprises</h4>
            </div>
            <FaArrowRight className="arrow-icon-small" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
