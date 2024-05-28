import React from 'react';
import styles from './pages_styles/Galeria.module.css';
import Container from '../components/base/Container';


function Galeria() {
  return (
    <section className={styles.content}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Galeria</h1>
        <div className={styles.bg}>
          {/* <SliderBanner /> */}
        </div>
      </div>
      
    </section>
  );
}

export default Galeria;
