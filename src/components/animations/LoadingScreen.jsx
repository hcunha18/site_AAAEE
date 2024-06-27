// src/components/animations/LoadingScreen.jsx
import React from 'react';
import '../styles/LoadingScreen.module.css'; 

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
