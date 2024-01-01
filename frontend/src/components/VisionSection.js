import React from 'react';
import '../assets/styles/BaseStyles.css'; // Base styles
import '../assets/styles/Section.css'; // Specific styles for sections
import '../assets/styles/VisionSection.module.css'; // Dedicated styles for the VisionSection

function VisionSection() {
  return (
    <section id="Vision" className="vision-section">
      <h2 className="vision-title">My Vision</h2>
      <p className="vision-text">My vision is to be a beacon of empowerment, guiding individuals on a journey toward financial literacy and independence. I aspire to transform the landscape of personal finance by making it accessible, understandable, and actionable.</p>
      <p className="vision-text">My commitment is to equip each person with the knowledge, tools, and confidence needed to navigate their financial journey successfully. Through personalized education, innovative resources, and a supportive community, I aim to demystify financial concepts, foster smart decision-making, and enable my clients to realize their full financial potential. I believe that a well-informed individual is the cornerstone of a healthy financial future, and I dedicate myself to igniting this knowledge in everyone I serve.</p>
      
    </section>
  );
}

export default VisionSection;

