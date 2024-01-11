import React, { useState } from 'react'; 
import TopicSelector from '../components/TopicSelector';
import ContentDisplay from '../components/ContentDisplay';
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