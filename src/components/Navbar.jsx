import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import { FaUser } from 'react-icons/fa'; // Install react-icons if you don't have it

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        <a href="#" className="navbar-link">
          <FaUser className="icon" /> Become an Interviewer ↗
        </a>
        <a href="#" className="navbar-link">Features</a>
        <a href="#" className="navbar-link">Pricing</a>
        <a href="#" className="navbar-link">Start a trial</a>
        <button className="btn-login">Login</button>
        <button className="btn-signup">Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
