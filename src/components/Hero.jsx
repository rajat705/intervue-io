import React from 'react';
import './Hero.css';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Technical Interview Resources</h1>
      <p className="hero-subtitle">Find all the technical interview resources here</p>
      
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for resource here"
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Hero;
