import React from 'react';
import '../styles/Nav.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    navStyle: {
      justifyContent: 'center',
    },
  };

export default function Nav({ page, handlePage }) {
  
    return (
        
      <nav style={styles.navStyle} className="nav">
        {/* <FontAwesomeIcon icon="fa-light fa-head-side-heart" size="sm" style={{color: "#ffffff",}} /> */}
            <li>
              <li className={page === "home" ? "navHover" : ""}>
                <a
                  href="#home"
                  onClick={(e) => handlePage(e, "home")}
                  className="navHover"
                >
                    HOME
                </a>
              </li>
              <li className={page === "about" ? "navHover" : ""}>
                <a
                  href="#about"
                  onClick={(e) => handlePage(e, "about")}
                  className="navHover"
                >
                  ABOUT
                </a>
              </li>
              <li className={page === "projects" ? "navHover" : ""}>
                <a
                  href="#projects"
                  onClick={(e) => handlePage(e, "projects")}
                  className="navHover"
                >
                  PROJECTS
                </a>
              </li>
              <li className={page === "resume" ? "navHover" : ""}>
                <a
                href='https://docs.google.com/document/d/1jAi32PHMZNVSnEyPeVo6r4EnlxPmp0kBF2p6DmHAA_k/edit?usp=sharing'
                target="blank"
                rel="noopener noreferrer"
                className="nav-link"
                >
                  RESUME
                </a>
              </li>
              <li className={page === "contact" ? "navHover" : ""}>
                <a
                  href="#contact"
                  onClick={(e) => handlePage(e, "contact")}
                  className="navHover"
                >
                  CONTACT
                </a>
              </li>
            </li>
      </nav>
    );
  }