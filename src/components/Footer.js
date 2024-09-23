import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-heading">
          THIS IS MY PORTFOLIO. IT'S SIMPLE, BUT I PUT A LOT OF EFFORT INTO CREATING IT. I HOPE YOU ENJOY IT!
          </p>
          <a href="mailto:lacsond91@gmail.com" className="footer-email">
            lacsond91@gmail.com
          </a>
        </div>

        <div className="footer-right">
          <div className="footer-section">
            <h4>NAVIGATION</h4>
            <ul>
              <li><a href="AboutMe">ABOUT</a></li>
              <li><a href="Mywork">WORK</a></li>
              <li><a href="Header">HEADER</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>SOCIALS</h4>
            <ul>
              <li><a href="https://www.instagram.com/lacson_street/" target='_blank'>INSTAGRAM</a></li>
              <li><a href="https://www.facebook.com/LacsonII" target='_blank'>FACEBOOK</a></li>
              <li><a href="https://www.tiktok.com/@idcdlla" target='_blank'>TIKTOK</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="PILLARSTACK.com">PILLARSTACK</a></li>
              <li><a href="AWWWARDS">AWWWARDS</a></li>
              <li><a href="CODEPEN">CODEPEN</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;