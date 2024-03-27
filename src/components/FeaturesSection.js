import React from 'react';

const FeaturesSection = () => {
  const featureStyle = {
    display: 'flex',
    overflowX: 'auto',
    padding: '20px',
    scrollSnapType: 'x mandatory',
  };

  const featureCardStyle = {
    flex: '0 0 auto',
    width: '30%',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    margin: '0 10px',
    scrollSnapAlign: 'start',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const hoverEffect = () => ({
    boxShadow: '0 0 20px 10px rgba(128, 0, 128, 0.6)', // Purple color with increased blur
  });

  return (
    <section style={featureStyle}>
      <div style={featureCardStyle} onMouseOver={(e) => e.currentTarget.style.boxShadow = hoverEffect().boxShadow} onMouseOut={(e) => e.currentTarget.style.boxShadow = featureCardStyle.boxShadow}>
        <h3>Feature 1</h3>
        <p>Description of Feature 1.</p>
      </div>
      <div style={featureCardStyle} onMouseOver={(e) => e.currentTarget.style.boxShadow = hoverEffect().boxShadow} onMouseOut={(e) => e.currentTarget.style.boxShadow = featureCardStyle.boxShadow}>
        <h3>Feature 1</h3>
        <p>Description of Feature 1.</p>
      </div>
      <div style={featureCardStyle} onMouseOver={(e) => e.currentTarget.style.boxShadow = hoverEffect().boxShadow} onMouseOut={(e) => e.currentTarget.style.boxShadow = featureCardStyle.boxShadow}>
        <h3>Feature 1</h3>
        <p>Description of Feature 1.</p>
      </div>
      <div style={featureCardStyle} onMouseOver={(e) => e.currentTarget.style.boxShadow = hoverEffect().boxShadow} onMouseOut={(e) => e.currentTarget.style.boxShadow = featureCardStyle.boxShadow}>
        <h3>Feature 1</h3>
        <p>Description of Feature 1.</p>
      </div>
      <div style={featureCardStyle} onMouseOver={(e) => e.currentTarget.style.boxShadow = hoverEffect().boxShadow} onMouseOut={(e) => e.currentTarget.style.boxShadow = featureCardStyle.boxShadow}>
        <h3>Feature 1</h3>
        <p>Description of Feature 1.</p>
      </div>
      <div style={featureCardStyle} onMouseOver={(e) => e.currentTarget.style.boxShadow = hoverEffect().boxShadow} onMouseOut={(e) => e.currentTarget.style.boxShadow = featureCardStyle.boxShadow}>
        <h3>Feature 1</h3>
        <p>Description of Feature 1.</p>
      </div>
      <div style={featureCardStyle} onMouseOver={(e) => e.currentTarget.style.boxShadow = hoverEffect().boxShadow} onMouseOut={(e) => e.currentTarget.style.boxShadow = featureCardStyle.boxShadow}>
        <h3>Feature 1</h3>
        <p>Description of Feature 1.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
