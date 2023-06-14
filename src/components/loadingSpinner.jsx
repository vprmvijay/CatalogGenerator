import React from 'react';
import './LoadingSpinner.css'; // Import the CSS file for styling the loading spinner

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
        <p>Please wait. It may take a moment.</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
