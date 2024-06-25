import React from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Galeria.module.css';
import ButtonBaseDemo from '../components/structures/complexButton';

function Galeria() {
  const linksSliderBanner = [
    {id: "1", url: 'https://i.ibb.co/2qcQmXz/DSC-6547.jpg', alt: "Banner campus Aberto"},
    {id: "2", url: 'https://i.ibb.co/cyYp3td/IMG-20231122-171200.jpg', alt: "Campeoes Interperiodo"},
    {id: "3", url: 'https://i.ibb.co/q1YXqg4/IMG-20231122-150452.jpg', alt: "Premiacao Interperiodo"},
    {id: "4", url: 'https://i.ibb.co/JtcxSCC/IMG-20231122-154139.jpg', alt: "Jogo Interperiodo"}
  ];

  const imagesFestas = [
    {
      url: 'https://i.ibb.co/1nP6mQ0/DSC-6514.jpg',
      title: 'Calcoolizando',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1bLVgXX56foOggSjS_f85Hp_LV8icnVJi'
    },
    {
      url: 'https://i.ibb.co/LCbgkWT/PHOTO-2023-04-01-09-59-58-1.jpg',
      title: 'Recepção de Calouros - 2023.1',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1-DzFPOD5u32XR6vBEB3BubgNskfOmuzE?usp=drive_link'
    },
    {
      url: 'https://i.ibb.co/XSDJttt/DSCN7589.jpg',
      title: 'Adeus Calouros',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1Sr-QlR5N_jJvslNBmYkRj-eAFisIH2SZ?usp=drive_link'
    },
  ];

  const imagesEsportes = [
    {
      url: 'https://i.ibb.co/P5RNW7z/IMG-20231122-150749.jpg',
      title: 'Interperiodo - 2023.2',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1ZNkjeVMR6p_ys_qaLQ9kGqljzeiLHeZs?usp=sharing'
    },
    {
      url: 'https://i.ibb.co/H7NcHqF/1681342968451.jpg',
      title: 'Tênis de Mesa',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1hdQm6knZE5xr6KIpbFP80CqiXAr_B4D0?usp=sharing'
    },
    {
      url: 'https://i.ibb.co/kqmyZpQ/Premiacao-sinuca.jpg',
      title: 'Sinuca',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1YMUi-9qLiZkgEVRum9oIzD-lwp1APP-X?usp=drive_link'
    },
    //Fim da primeira linha
          
    {
      url: 'https://i.ibb.co/5MQDctv/99a25a82-1ba8-433d-85af-5d59c140df54.jpg',
      title: 'Interperiodo - 2023.1',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1PUs-I-SdLcjpBJXMhGdrJAvKJFpQpGnJ?usp=drive_link'
    },
    {
      url: 'https://i.ibb.co/fk1bbjG/PHOTO-2023-03-24-17-54-54.jpg',
      title: 'Campeonato Gremio Estudantil',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1-4GbNhkgZ60ePoDiLSqaD1_Ttvcv8f-y?usp=drive_link'
    },
    {
      url: 'https://i.ibb.co/S7y2sHZ/mocitec-2023-peteca.jpg',
      title: 'MOCITEC 2023',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/102myceiYbMMul6jb8vzNUcFt6y0SCK1_'
    },
    //Fim da segunda linha

    {
      url: 'https://i.ibb.co/q1B7ZWz/Interperiodo-2022-2.jpg',
      title: 'Interperiodo - 2022.2',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1CGmRinpzavnqekjcx-rj5vlvsnE_2ctd?usp=drive_link'
    },
    {
      url: 'https://i.ibb.co/MZK2Q5k/camp-peteca-2022-2.jpg',
      title: 'Campeonato de Peteca',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/18a1z1JJfBzveo3ttYJwqLiL0TkTNQTse?usp=drive_link'
    },
    {
      url: 'https://i.ibb.co/Dpnsr7p/interperiodo-2022-1.jpg',
      title: 'Interperiodo 2022.1',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1_oKnf3WKSYta7FJ9d9nQ85J4AUCJqZY-?usp=drive_link'
    },
    //Fim da terceira linha
  ];

  return (
    <section className={styles.content}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Galeria</h1>
        <div className={styles.bg}>
          <SliderBanner links={linksSliderBanner} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.IntroEvento}>
          <h1>Se é foto que você procura</h1>
          <hr/>
          <h2>O Panterão separou as melhores fotos de nossos eventos especialmente para você!</h2>
          <h2>Escolha o evento e não esqueça de marcar a @AtléticaPanterão no Instagram</h2>
        </div>

        <div className={styles.TipoEvento}>
          <h1>FESTAS</h1>
        </div>
        <div className={styles.complexButton}>
          <ButtonBaseDemo images={imagesFestas} />
        </div>

        <div className={styles.TipoEvento}>
          <h1>ESPORTIVO</h1>
        </div>
        <div className={styles.complexButton}>
          <ButtonBaseDemo images={imagesEsportes} />
        </div>
      </div>
    </section>
  );
}

export default Galeria;
