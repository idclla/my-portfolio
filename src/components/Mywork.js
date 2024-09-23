import React from 'react';
import './Mywork.css';
//import './img/me.JPG';

const Mywork = () => {
  return (
    <div className="work-container">
      <h2 className="section-title">My Works</h2>
      <div className="work-box">
        <div className="work-grid">
          <div className="work-item">
            <div className="work-details-1">
              <h3>Cover Photo</h3>
              <p>Random</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-details-2">
              <h3>Lorem Ipsum</h3>
              <p>Lorem Ipsum & Lorem Ipsum</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-details-3">
              <h3>Lorem Ipsum</h3>
              <p>Lorem Ipsum & Lorem Ipsum</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-details-4">
              <h3>Lorem Ipsum</h3>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
