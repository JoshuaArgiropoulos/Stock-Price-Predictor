import React from 'react';

function ServiceBox({ title, link, description }) {
  return (
    <div className="service-box" onClick={() => window.location.href = link} style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '30%', margin: '10px', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceBox;