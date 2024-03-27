import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const fullText = 'Welcome to Our Website';
  const typingSpeed = 150;
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Pause before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause time at the end
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, typingSpeed);
      } else {
        // Pause before typing again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000); // Pause time before typing again
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, fullText]);

  const heroStyle = {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#eee',
  };

  const typewriterStyle = {
    display: 'inline-block',
    whiteSpace: 'pre',
    overflow: 'hidden',
    borderRight: '3px solid',
    animation: 'blink 1s infinite'
  };

  return (
    <section style={heroStyle}>
      <h1 style={typewriterStyle}>{text}</h1>
      <p>Discover our services and products.</p>
      <button>Learn More</button>
    </section>
  );
};

export default HeroSection;
