import React, {useEffect, useState} from "react";
import heroImage from '../styles/heroImage.jpg'
import '../styles/Home.css'

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handScroll = () => {
      const currentPos = window.pageYOffset;
      if (currentPos > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handScroll);

    return () => {
      window.removeEventListener('scroll', handScroll);
    };

  }, []);
    return (
        <div className='hero-section'>
        <img
          className='hero-img'
          src={heroImage}
          alt='me!'
        />
         <div className='hero-over'>
        {showHeader && <h1>.</h1>}
        <h1>Scotty</h1>
        <br/>
        <p>Jirik</p>
      </div>
    </div>
  );
}