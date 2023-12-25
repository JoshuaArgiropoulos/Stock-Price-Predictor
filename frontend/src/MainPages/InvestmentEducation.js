import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/common/footer';
import TopicSelector from '../components/TopicSelector';
import ContentDisplay from '../components/ContentDisplay';

function InvestmentEducation() {
  const [selectedTopic, setSelectedTopic] = React.useState(null);

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="HomePage">
      <Header />
      <Navigation />
      <h1>Education Options</h1>
      <TopicSelector onTopicChange={handleTopicChange} />
      <ContentDisplay topic={selectedTopic} />
      <Footer />
    </div>
  );
}
export default InvestmentEducation;