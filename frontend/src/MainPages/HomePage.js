import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HomeSection from '../components/HomeSection';
import VisionSection from '../components/VisionSection';
import ServiceBox from '../components/ServiceBox';




function HomePage() {
  return (
    
      <div className="HomePage">
        <Header />
        <Navigation />
        <HomeSection />
        <VisionSection />
        <section id="services" className="service-box-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '2em' }}>
          <ServiceBox title="Financial News" link="/Financial-News" description="Unlock your financial potential with our rich repository of educational content." />
          <ServiceBox title="Interactive Tools" link="/interactive-tools" description="Empower yourself with practical tools designed to enhance your financial journey. Seamlessly plan and track your expenses with our interactive budget calculators." />
          <ServiceBox title="Financial Education" link="/investment" description="Master the art of investing with our comprehensive education services. Understand the fundamentals, explore different investment types, and stay ahead with market insights." />
          <ServiceBox title="Stock Information" link="/stock-info" description="Explore historical information and predictions for top stocks, including fanng companies, through advanced machine learning techniques." />
        </section>  
        
      </div>
    
  );
}

export default HomePage;