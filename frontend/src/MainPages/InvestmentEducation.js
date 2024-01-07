import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

import EducationPage from '../components/EducationPage'


function InvestmentEducation() {
  // const [selectedTopic, setSelectedTopic] = React.useState(null);

  // // const handleTopicChange = (topic) => {
  // //   setSelectedTopic(topic);
  // // };

  return (
    <div className="HomePage">
      <Header />
      <Navigation />
      <EducationPage/>
      {/* Add some whitespace */}
     
      
    </div>
  );
}
export default InvestmentEducation;