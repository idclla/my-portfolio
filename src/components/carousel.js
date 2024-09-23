import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from './img/PH.png';
import img2 from './img/AI.png';
import img3 from './img/HT.png';
import img4 from './img/REACT.png';
import img5 from './img/CSS.png';
import img6 from './img/Frame 6.png';
import img7 from './img/Frame 7.png';
import img8 from './img/Frame 8.png';
import img9 from './img/Frame 9.png';
import img10 from './img/Frame 10.png';
import img11 from './img/Frame 11.png';
import img12 from './img/Frame 12.png';
import img13 from './img/Frame 13.png';
import './carousel.css';

function Carousel() {
  return (
    <div className="Carousel">
      <div className="title">
        <h1>My Skills</h1>
      </div>

      <div>
        <Marquee direction="left" speed={250} delay={1}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img11} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img12} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img13} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Carousel;
