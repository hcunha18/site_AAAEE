import React from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Galeria.module.css';
import Container from '../components/base/Container';
import { ImageList } from '@mui/material';
import QuiltedImageList from '../components/structures/ImageList';


function Galeria() {

  //Array com as imagens para o Banner da página Galeria
  const linksSliderBanner = [
    {id: "1", url: 'https://i.ibb.co/2qcQmXz/DSC-6547.jpg', alt: "Banner campus Aberto"},
    {id: "2", url: 'https://i.ibb.co/cyYp3td/IMG-20231122-171200.jpg', alt: "Campeoes Interperiodo"},
    {id: "3", url: 'https://i.ibb.co/q1YXqg4/IMG-20231122-150452.jpg', alt: "Premiacao Interperiodo"},
    {id: "4", url: 'https://i.ibb.co/JtcxSCC/IMG-20231122-154139.jpg', alt: "Jogo Interperiodo"}
];

  return (
    <section className={styles.content}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Galeria</h1>
        <div className={styles.bg}>
          <SliderBanner
            links={linksSliderBanner}
          />
        </div>
      </div>

      <div className={styles.ListaImagem}>
        <QuiltedImageList />
      </div>
      
    </section>
  );
}

export default Galeria;
