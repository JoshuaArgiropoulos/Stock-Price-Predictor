import React from 'react';

function DashWelcome({ username }) {
  return (
    <section id="dashboard-welcome">
      <h2>Welcome, {username}!</h2>
      <p>Here's your personalized dashboard:</p>
    </section>
  );
}

export default DashWelcome;