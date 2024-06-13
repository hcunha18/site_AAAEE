import React from 'react';
import styles from './pages_styles/Modalidades.module.css';
import garra from '../images/garra 1.png';
import SliderBanner from '../components/structures/SliderBanner';
import Button from "@mui/material/Button";

function Modalidades() {
  // Arrays de imagens para os Sliders
  const linksSliderEsquerda = [
    { id: "1", url: 'https://i.ibb.co/GTrSsZz/IMG-3255.jpg', alt: "Concentracao FDG" },
    { id: "2", url: 'https://i.ibb.co/qRZc46Y/IMG-3229.jpg', alt: "Semi Mossa x FDG" },
    { id: "3", url: 'https://i.ibb.co/TbHYTYm/1698198702124.jpg', alt: "Patrocinadores Interperiodo 2023.2" },
    { id: "4", url: 'https://i.ibb.co/PFdMRQY/IMG-20231122-150735.jpg', alt: "Premiacao medalhas de ouro" }
  ];

  const linksSliderCentro = [
    { id: "1", url: 'https://i.ibb.co/VqFM2kQ/IMG-20231122-153317.jpg', alt: "David jogando FINAL" },
    { id: "2", url: 'https://i.ibb.co/dDWtVcd/IMG-20231122-152255.jpg', alt: "Capitaes final com juizes" },
    { id: "3", url: 'https://i.ibb.co/P5RNW7z/IMG-20231122-150749.jpg', alt: "Trofeu" },
    { id: "4", url: 'https://i.ibb.co/cyYp3td/IMG-20231122-171200.jpg', alt: "Campeoes 2023.2" }
  ];

  const linksSliderDireita = [
    { id: "1", url: 'https://i.ibb.co/5MQDctv/99a25a82-1ba8-433d-85af-5d59c140df54.jpg', alt: "Botafofo Campeao" },
    { id: "2", url: 'https://i.ibb.co/fk1bbjG/PHOTO-2023-03-24-17-54-54.jpg', alt: "Atletica Campeao camp gremio" },
    { id: "3", url: 'https://i.ibb.co/6nPSXjt/IMG-1062.jpg', alt: "Estudiantes" },
    { id: "4", url: 'https://i.ibb.co/Z15hzP5/IMG-0844.jpg', alt: "BarSemLona x ..." }
  ];

  return (
    <section className={styles.Body}>
      <div className={styles.TextModalidades}>
        <h1>NOSSAS MODALIDADES</h1>
        <hr />
        <h2>O Panterão conta com 9 modalidades físicas e 6 modalidades online.<br />
          Os Atletas participam de diversos campeonatos no decorrer do ano letivo, dos quais temos boas memórias e títulos para recordar.</h2>
      </div>

      <div className={styles.DivisaoTela}>
        <div className={styles.BlocoEsquerda}>
          <div className={styles.ImgGarra}>
            <img src={garra} alt="GarraPantera" className={styles.Garra} />
          </div>
        </div>

        <div className={styles.BlocoDireita}>
          <div className={styles.ListModalidadesEsquerda}>
            <h1>ESPORTES</h1>
            <hr />
            <ul>
              <li>FUTSAL</li>
              <li>TÊNIS DE MESA</li>
              <li>SINUCA</li>
              <li>PETECA</li>
              <li>FUTVOLEI</li>
              <li>NATAÇÃO</li>
              <li>ESCALADA</li>
              <li>FUTEBOL</li>
              <li>BASQUETE</li>
              <li>VÔLEI</li>
            </ul>
          </div>

          <div className={styles.ListModalidadesDireita}>
            <h1>E-SPORTS</h1>
            <hr />
            <ul>
              <li>LEAGUE OF LEGENDS</li>
              <li>COUNTER-STRIKE 2</li>
              <li>VALORANT</li>
              <li>OVERWATCH</li>
              <li>FIFA</li>
              <li>TEAM FIGHT TATICS</li>
            </ul>
          </div>

          <div className={styles.Treino}>
            <h1>TREINOS</h1>
            <hr />
            <h2>
              Nossos treinos das modalidades físicas de futsal, vôlei e basquete, acontecem no Centro Poliesportivo do CEFET MG - Leopoldina.<br />
              Já nossos treinos das modalidades de E-sports acontecem de forma remota.
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.AcesseTreino}>
        <h1>TREINOS</h1>
        <hr />
        <h2>Quer ser um atleta Panterão?</h2>

        {/* Neste botão, foi utilizado o onClick juntamente com o window.location.href para redirecionar o usuário para um link externo */}
        <button
          onClick={() => window.location.href = "https://linktr.ee/atleticacefetleopoldina?fbclid=PAAaaWLmmqzTtQD8Rd91MLRPsl2xphEkKPZEYuHeYrWGWES4P6NVKB0cZNvus"}
          className={styles.verMaisButton}>
          Saiba Mais
        </button>
      </div>

      <div className={styles.DivisaoFotos}>
        <div className={styles.ColunaEsquerda}>
          <div className={styles.ImgCampeonato}>
            <SliderBanner
              links={linksSliderEsquerda}
            />
          </div>    
        </div>
        <div className={styles.ColunaCentro}>
          <div className={styles.ImgCampeonato}>
            <SliderBanner
              links={linksSliderCentro}
            />
          </div>    
        </div>
        <div className={styles.ColunaDireita}>
          <div className={styles.ImgCampeonato}>
            <SliderBanner
              links={linksSliderDireita}
            />
          </div>    
        </div>
      </div>
    </section>
  );
}

export default Modalidades;