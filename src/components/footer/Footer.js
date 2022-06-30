import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Your Name</h1>
        <p>Based in Your City</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By JGM</div>
        <div className="sns-links">
          <p>aca van los iconos asigandos con un link</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
