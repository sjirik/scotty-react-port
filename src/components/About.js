import React, { useEffect, useState } from 'react';
import '../styles/About.css'

export default function About() {

    useEffect(() => {
        const handScroll = () => {
          const elem = document.querySelector('.aboutText', 'aboutHeader');
          if (elem) {
            const elemTop = elem.getBoundingClientRect().top;
            const elemBottom = elem.getBoundingClientRect().bottom;
            const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            setFadeIn(isVisible);
          }
        };
        window.addEventListener('scroll', handScroll);
        return () => {
          window.removeEventListener('scroll', handScroll);
        };
      }, []);

      const [fadeIn, setFadeIn] = useState(true);

    return (
      <div className="aboutMe">
        <div className={`aboutHead ${fadeIn ? 'fade-in' : ''}`}>Web Developer - With a Certificate from Northwestern University.</div>
        <div className={`aboutText ${fadeIn ? 'fade-in' : ''}`}>
          Since completing my course with Northwestern University, my love for coding has flourished! 

          I have always been creative, finding my passions in acting and comedy. And with coding, I find this new outlet to be just as creatively rewarding. 

         I hope to continue down this path towards a creativity-based career in coding!

          </div>
        </div>
    );
  }