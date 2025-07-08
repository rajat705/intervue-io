import React from 'react';
import './Testimonial.css';
import testimonialImage from '../assets/testimonial-user.png'; // Replace with your actual image path
import { FaPlay } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-image-wrapper">
        <img src={testimonialImage} alt="Niket Gupta" className="testimonial-image" />
        <FaPlay className="play-icon" />
        <div className="testimonial-name-overlay">
          <h4>Niket Gupta</h4>
          <p>Head of Acquisition, Yubi</p>
        </div>
      </div>

      <div className="testimonial-content">
        <p className="testimonial-text">
          After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.
        </p>
        <p className="testimonial-author">
          <strong>Niket Gupta</strong><br />
          Group head of talent acquisition, Yubi
        </p>
        <a href="#" className="testimonial-link">See more customer stories →</a>
      </div>
    </div>
  );
};

export default Testimonial;
