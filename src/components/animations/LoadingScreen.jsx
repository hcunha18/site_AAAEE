import React from 'react';
import styles from '../styles/LoadingScreen.module.css'; 

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <h1 className={styles.loadingText}>Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
