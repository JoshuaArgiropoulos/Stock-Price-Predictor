import React from 'react';

function DashWelcome({ user }) {
  return (
    <section id="dashboard-welcome">
      <h2>Welcome, {user.username}!</h2>
      <p>Here's your personalized dashboard:</p>
    </section>
  );
}

export default DashWelcome;