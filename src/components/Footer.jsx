import React from 'react';
import logo from '../assets/logo.png'; // Use your actual logo image path

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="footer-socials">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Pinterest</a>
          </div>
          <div className="footer-subscribe">
            <h3>Hire better & faster</h3>
            <div className="footer-input">
              <input type="email" placeholder="Enter your email address" />
              <span className="arrow">↗</span>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div>
            <h4>Company</h4>
            <p>So gehts</p>
            <p>Erfahrung</p>
            <p>Aligner</p>
            <p>Preise</p>
            <p>Standorte</p>
          </div>
          <div>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Lift Media</p>
            <p>Offene Stellen</p>
            <p>Presse kit</p>
          </div>
          <div>
            <h4>Product</h4>
            <p>Gratis Termin</p>
            <p>Freunde einladen</p>
            <p>Patienteninforma</p>
          </div>
          <div>
            <h4>Product</h4>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Lift Media</p>
            <p>Offene Stellen</p>
            <p>Presse kit</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Intervue. Crafted by great minds.</p>
        <div className="footer-links">
          <a href="#">Datenschutz</a>
          <a href="#">Impressum</a>
          <a href="#">Cookie Policy</a>
          <a href="#">AGBs</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
