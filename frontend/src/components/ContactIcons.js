import React from 'react';
// If using react-icons, import necessary icons
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import Connect from './ConnectButtion.js';


const ContactIcons = () => {
  return (
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Connect style={{ zIndex: 1 }} /> {/* Set z-index to 1 to bring it above other icons */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Email Icon */}
        <a href="mailto:Joshua.argiropoulos@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send email to Joshua Argiropoulos">
          {/* Replace with <img src="path/to/your/email/icon.png" alt="Email" /> if using images */}
          <AiOutlineMail size={100} />
        </a>

        {/* GitHub Icon */}
        <a href="https://github.com/JoshuaArgiropoulos" target="_blank" rel="noopener noreferrer">
          {/* Replace with <img src="path/to/your/github/icon.png" alt="GitHub" /> if using images */}
          <AiFillGithub size={100} />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/joshua-argiropoulos" target="_blank" rel="noopener noreferrer">
          {/* Replace with <img src="path/to/your/linkedin/icon.png" alt="LinkedIn" /> if using images */}
          <AiFillLinkedin size={100} />
        </a>
      </div>
    </div>
    
  );
};

export default ContactIcons;