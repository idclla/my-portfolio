import React from 'react';
import './myself.css';

const Myself = ({ scrollToHeader }) => {
  return (
    <div className="myself-container">
      <div className="content-box">
        <div className="menu">
          {/* When Home button is clicked, trigger scrollToHeader */}
          <button className="menu-item" onClick={scrollToHeader}>Home</button>
          <button className="menu-item">Works</button>
          <button className="menu-item">About</button>
        </div>
      </div>
    </div>
  );
};

export default Myself;
