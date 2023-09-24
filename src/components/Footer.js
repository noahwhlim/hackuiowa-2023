import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        Created by:{" "}
        <a
          href="https://github.com/katmathematics"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <u>Katja Mathesius</u>
        </a>
        ,{" "}
        <a
          href="https://github.com/noahwhlim"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <u>Noah Lim</u>
        </a>
        , and{" "}
        <a
          href="https://github.com/jasonweng1"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <u>Jason Weng</u>
        </a>{" "}
        |{" "}
        <a
          href="https://hackuiowa-23.devpost.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          HACKUIOWA '23
        </a>
      </div>
    </footer>
  );
};

export default Footer;
