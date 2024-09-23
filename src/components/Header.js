import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="main-container">
      <header className="header">
        <div className="left-header">
          <h2>DAVE LACSON</h2>
        </div>
        <div className="right-header">
          <div className="info">
            <h3>UI/UX DESIGNER</h3>
            <h3>WEB DEVELOPER</h3>
          </div>
        </div>
        <div className="contact-button">
          <button>CONTACT</button>
        </div>
      </header>

      <main className="content">
        <div className="intro">
          <p>
            ORIGINATED FROM BACOLOD CITY, I AM A WEB-DESIGNER AND GRAPHIC
            DESIGNER PROFICIENT IN CRAFTING UNIQUE AND AESTHETIC WEBSITES. I
            METICULOUSLY GENERATE SOLUTIONS CATERING TO THE NEEDS OF PRIVATE
            INDIVIDUALS AND BUSINESSES ALIKE.
          </p>
        </div>
        <div className="web-developer">
          <h1>WEB DEVELOPER</h1>
        </div>
        <div className="scroll-indicator">
          <p>SCROLL TO EXPLORE</p>
        </div>
      </main>
    </div>
  );
}

export default Header;
