import React, { useState } from 'react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <h1>Welcome to My Cypress Test Page</h1>
      <button id="click-me" onClick={handleClick}>Click Me</button>
      <p id="message" style={{ display: isVisible ? 'block' : 'none' }}>
        You clicked the button!
      </p>
    </div>
  );
};

export default HomePage;
