import React from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Galeria.module.css';
import ButtonBaseDemo from '../components/structures/complexButton';


function Galeria() {
  const linksSliderBanner = [
    {id: "1", url: 'https://i.postimg.cc/N0C3xbFf/banner-calcoolizando-3.jpg', alt: "Show Calcoolizando"},
    {id: "2", url: 'https://i.postimg.cc/W4nM1QkW/mossa-fc-campeao-2023-2.jpg', alt: "Campeoes Interperiodo"},
    {id: "3", url: 'https://i.postimg.cc/t4gcrffQ/Banner-Campus-Aberto-Lei-de-Incentivo-ao-Esporte.jpg', alt: "Lei de incentivo ao esporte"},
    {id: "4", url: 'https://i.postimg.cc/6Q526zNt/Costas-11-Bar-Sem-Lona.jpg', alt: "Jogo Interperiodo"}
  ];

  // Configurações dos Complex Buttons para cada tipo de Evento
  // Festas
  const imagesFestas = [
    {
      url: 'https://i.postimg.cc/VLh8Cpz6/Banner-Atletica-Calcoolizando.jpg',
      title: 'Calcoolizando',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1bLVgXX56foOggSjS_f85Hp_LV8icnVJi',
    },
    {
      url: 'https://i.postimg.cc/05cx8r37/Meninas-com-bandeira-da-atletica-na-recepcao.jpg',
      title: 'Recepção de Calouros - 2023.1',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1-DzFPOD5u32XR6vBEB3BubgNskfOmuzE?usp=drive_link'
      
    },
    {
      url: 'https://i.postimg.cc/tgQGr6ZG/galera-banner-atletica-na-adeus-calouros.jpg',
      title: 'Adeus Calouros',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1Sr-QlR5N_jJvslNBmYkRj-eAFisIH2SZ?usp=drive_link'
    },
  ];

  // Esportes
  const imagesEsportes = [
    {
      url: 'https://i.postimg.cc/FzqBYt0X/Premiacao-interperiodo-2023-2.jpg',
      title: 'Interperiodo - 2023.2',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1ZNkjeVMR6p_ys_qaLQ9kGqljzeiLHeZs?usp=sharing'
    },
    {
      url: 'https://i.postimg.cc/vHTyDbFk/RAQUETE.jpg',
      title: 'Tênis de Mesa',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1hdQm6knZE5xr6KIpbFP80CqiXAr_B4D0?usp=sharing'
    },
    {
      url: 'https://i.postimg.cc/Sxzp7dKG/Premiacao-sinuca.jpg',
      title: 'Sinuca',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1YMUi-9qLiZkgEVRum9oIzD-lwp1APP-X?usp=drive_link'
    },
    //Fim da primeira linha
          
    {
      url: 'https://i.postimg.cc/hP6kjm0Q/Botafofo-Campeao-Interperiodo-2023-1.jpg',
      title: 'Interperiodo - 2023.1',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1PUs-I-SdLcjpBJXMhGdrJAvKJFpQpGnJ?usp=drive_link'
    },
    {
      url: 'https://i.postimg.cc/Gh40dKv1/Atletica-Campeao-Camp-Gremio.jpg',
      title: 'Campeonato Gremio Estudantil',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1-4GbNhkgZ60ePoDiLSqaD1_Ttvcv8f-y?usp=drive_link'
    },
    {
      url: 'https://i.postimg.cc/cHFjNtHH/MOCITEC-Campeonato-de-Peteca.jpg',
      title: 'MOCITEC 2023',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/102myceiYbMMul6jb8vzNUcFt6y0SCK1_'
    },
    //Fim da segunda linha

    {
      url: 'https://i.postimg.cc/SsmF4pfZ/Atecubanos-Campeao-Interperiodo-2022-2.jpg',
      title: 'Interperiodo - 2022.2',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1CGmRinpzavnqekjcx-rj5vlvsnE_2ctd?usp=drive_link'
    },
    {
      url: 'https://i.postimg.cc/3wX5zwm4/Campenato-de-Peteca-Mesarios.jpg',
      title: 'Campeonato de Peteca',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/18a1z1JJfBzveo3ttYJwqLiL0TkTNQTse?usp=drive_link'
    },
    {
      url: 'https://i.postimg.cc/xCgrTFs9/Interperiodo-2022-1-Estudiantes.avif',
      title: 'Interperiodo 2022.1',
      width: '33%',
      redirectUrl: 'https://drive.google.com/drive/folders/1_oKnf3WKSYta7FJ9d9nQ85J4AUCJqZY-?usp=drive_link'
    },
    //Fim da terceira linha
  ];
    // Fim do Complex Buttom


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
          <h2>Escolha o evento e não esqueça de marcar a <a href='https://www.instagram.com/atleticaleopoldina/'>@AtléticaPanterão</a> no Instagram</h2>
        </div>

        <div className={styles.TipoEvento}>
          <h1>FESTAS</h1>
        </div>
        <div className={styles.complexButton}>
          <ButtonBaseDemo 
            images={imagesFestas} 
          />
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
