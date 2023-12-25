import React, { useState } from 'react'; // Using useState hook directly

// Import components
import TopicSelector from '../components/TopicSelector';
import ContentDisplay from '../components/ContentDisplay';

// Import module CSS
import styles from '../assets/styles/EducationPage.module.css';

function EducationPage() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Education Options</h1>
      <TopicSelector onTopicChange={handleTopicChange} />
      <ContentDisplay topic={selectedTopic} className={styles.contentArea} />
    </div>
  );
}

export default EducationPage;