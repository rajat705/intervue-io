import React from 'react';
import './Products.css';
import ondemandImg from '../assets/product1.png';
import liveInterviewImg from '../assets/product1.png';
import assessmentImg from '../assets/product1.png';
import { FaArrowRight } from 'react-icons/fa';

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Explore more products on intervue</h2>

        <div className="products-grid">

          <div className="product-card">
            <img src={ondemandImg} alt="On-demand" className="product-image" />
            <h3 className="product-heading">On-demand</h3>
            <p className="product-description">
              Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us
            </p>
            <a href="#" className="product-link">Know more <FaArrowRight className="arrow-icon" /></a>
          </div>

          <div className="product-card">
            <img src={liveInterviewImg} alt="Live interviews" className="product-image" />
            <h3 className="product-heading">Live interviews</h3>
            <p className="product-description">
              Assess candidates in real-time with our live coding environment & integrated video calls
            </p>
            <a href="#" className="product-link">Know more <FaArrowRight className="arrow-icon" /></a>
          </div>

          <div className="product-card">
            <img src={assessmentImg} alt="Assessments" className="product-image" />
            <h3 className="product-heading">Assessments</h3>
            <p className="product-description">
              Share assessments across batches with MCQ, Programming and Subjective questions.
            </p>
            <a href="#" className="product-link">Know more <FaArrowRight className="arrow-icon" /></a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
