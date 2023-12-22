import React from 'react';
import imageSrc from '../assests/images/IMG_9820.JPG'; 

function HomeSection() {
  return (
    <section id="home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2em' }}>
      <div>
      <img src={imageSrc} alt="Your Image" style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginRight: '40px', width: '500px', 
            maxHeight: '333px'   }} />
      </div>
      <div>
        <h3 style={{ fontFamily: "'Style Script', sans-serif", color: '#004080', marginBottom: '10px' }}>Empowering Futures</h3>
        <p>Transform your financial journey with ThriveOnFinance.</p>
        <p>Every dollar counts, and we're here to help you make the most of it.</p>
      </div>
    </section>
  );
}

export default HomeSection;