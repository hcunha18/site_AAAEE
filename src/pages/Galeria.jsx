import React from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Galeria.module.css';
import Container from '../components/base/Container';
import { ImageList } from '@mui/material';
import QuiltedImageList from '../components/structures/ImageList';
import Button from "@mui/material/Button";


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

      <div className={styles.body}>
        <div className={styles.ListaImagem}>
          <QuiltedImageList />
        </div>
        <div className={styles.endPage}>
            <div className={styles.endPageLeft}>
              <img src="https://i.ibb.co/xGSc8GS/Pantera-removebg-preview.png" className={styles.pantera}/>
            </div>

            <div className={styles.endPageRight}>
              <a className={styles.Texto}>Quer ter acesso a todas as mídias?</a>
              <hr className={styles.finalDivider} />
              <a className={styles.CliqueNoBotao}>Clique no botão abaixo</a>
              <button
                onClick={() => href("https://linktr.ee/atleticacefetleopoldina?fbclid=PAAaaWLmmqzTtQD8Rd91MLRPsl2xphEkKPZEYuHeYrWGWES4P6NVKB0cZNvus")}
                className={styles.verMaisButton}>
                  Galeria
              </button>
            </div >
          </div >
        </div>
      {/* Botao para o drive galeria */}
    </section>
  );
}

export default Galeria;
