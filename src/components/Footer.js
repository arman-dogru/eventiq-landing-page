import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
  position: 'relative',
  bottom: '0',
  width: '100%'
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Contact us at: info@example.com</p>
      <p>Follow us on social media</p>
      {/* Social media links */}
    </footer>
  );
};

export default Footer;
