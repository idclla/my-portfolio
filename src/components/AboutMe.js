// AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1 className='title'>About Me</h1>
        <h1 className="about-title">
        I'M A THIRD-YEAR BSIT STUDENT AT LA CONSOLACION COLLEGE - BACOLOD AND AN ACTIVE STUDENT COUNCIL/CLUB OFFICER. OVER THE YEARS, I'VE HONED MY WEB DESIGN AND DEVELOPMENT SKILLS, WITH A FOCUS ON WEBFLOW.
        </h1>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{`0${index + 1}`}</div>
              <div className="step-description">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const steps = [
  {
    title: "IM A HAPPY PERSON",
    description: "A happy person is someone who finds joy and fulfillment in life."
  },
  {
    title: "KIND AND LOVING",
    description: "A happy person is someone who finds joy and fulfillment in life."
  },
  {
    title: "THOUGHTFUL AND COURAGEOUS",
    description: "A happy person is someone who finds joy and fulfillment in life."
  },
  {
    title: "HELPFUL AND AMAZING",
    description: "A happy person is someone who finds joy and fulfillment in life."
  },
  {
    title: "HANDOVER AND SUPPORT",
    description: "A happy person is someone who finds joy and fulfillment in life."
  },
];

export default AboutMe;
