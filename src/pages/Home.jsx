import React from 'react';
import styles from './pages_styles/Home.module.css';
import logo from '../images/Background.png';
import escrita from '../images/Escrita.png';

function Home() {
  return (
    <section className={styles.content}>
      <img src={logo} alt="Pantera" className={styles.bg} />
      <div className={styles.tittleDestaques}>
        <h1>escrita</h1>
      </div>
      <img src={escrita} alt="Pantera" className={styles.bg} />
    </section>
  );
}

export default Home;
