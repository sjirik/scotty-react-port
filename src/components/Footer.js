import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css"

function Footer() {
    return (
      <footer>
        <div className="social-media-icons">
          <a href="https://github.com/sjirik">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/scott-jirik-789953281/">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;