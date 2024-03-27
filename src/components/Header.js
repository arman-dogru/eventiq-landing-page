import React from 'react';

const headerStyle = {
  padding: '10px 20px',
  backgroundColor: '#333',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px'
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <div>Logo</div>
      <nav>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/services" style={linkStyle}>Services</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
