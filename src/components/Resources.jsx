import React from 'react';
import './Resources.css';

const resourcesData = [
  { level: 'Easy', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Medium', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Hard', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Easy', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Medium', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Hard', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Easy', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Medium', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
  { level: 'Hard', title: 'Design a Free Food App', category: 'DATA STRUCTURES & ALGORITHMS' },
];

const levelColors = {
  Easy: '#2D7FF9',
  Medium: '#F4A523',
  Hard: '#00A971',
};

const Resources = () => {
  return (
    <div className="resources-container">
      {resourcesData.map((item, index) => (
        <div className="resource-card" key={index}>
          <div className="resource-header">
            <span
              className="resource-level"
              style={{ backgroundColor: levelColors[item.level] }}
            >
              {item.level}
            </span>
            <span className="resource-category">{item.category}</span>
          </div>
          <h3 className="resource-title">{item.title}</h3>
          <p className="resource-description">
            We created this guide after speaking with our community of interviewers, which includes over
            100 current and former Amazon engineers, as well as our corpus of mock interviews
          </p>
        </div>
      ))}
    </div>
  );
};

export default Resources;
