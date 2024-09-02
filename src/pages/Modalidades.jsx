import React from 'react';
import styles from './pages_styles/Modalidades.module.css';
import garra from '../images/garra 1.png';
import SliderBanner from '../components/structures/SliderBanner';
import Button from "@mui/material/Button";

function Modalidades() {
  // Arrays de imagens para os Sliders
  const linksSliderEsquerda = [
    { id: "1", url: 'https://i.postimg.cc/Px51p2bt/arbitragem-2023-2.jpg', alt: "Concentracao FDG" },
    { id: "2", url: 'https://i.postimg.cc/CMJ6QQr4/concentracao-FDG.jpg', alt: "Semi Mossa x FDG" },
    { id: "3", url: 'https://i.postimg.cc/pdxfx2p5/medalhas-2023-2.jpg', alt: "Patrocinadores Interperiodo 2023.2" },
    { id: "4", url: 'https://i.postimg.cc/MZhtNJbV/david-jogando-final.jpg', alt: "Premiacao medalhas de ouro" }
  ];

  const linksSliderCentro = [
    { id: "1", url: 'https://i.postimg.cc/02QHR0L1/capitaes-e-arbitragem-final-2023-2.jpg', alt: "David jogando FINAL" },
    { id: "2", url: 'https://i.postimg.cc/C5ZDJ56X/concentracao-mossa.jpg', alt: "Capitaes final com juizes" },
    { id: "3", url: 'https://i.postimg.cc/4xHLnNf8/interperiodo-2022-1-estudiantes.jpg', alt: "Trofeu" },
    { id: "4", url: 'https://i.postimg.cc/pdxfx2p5/medalhas-2023-2.jpg', alt: "Campeoes 2023.2" }
  ];

  const linksSliderDireita = [
    { id: "1", url: 'https://i.postimg.cc/xCpMKMgL/mossa-x-fdg.jpg', alt: "Botafofo Campeao" },
    { id: "2", url: 'https://i.postimg.cc/xTXhbSn4/Atletica-Campeao-Camp-Gremio.jpg', alt: "Atletica Campeao camp gremio" },
    { id: "3", url: 'https://i.postimg.cc/DyL5KpBD/trofeu.jpg', alt: "Estudiantes" },
    { id: "4", url: 'https://i.postimg.cc/HkxwLpmr/Botafofo-Campeao-Interperiodo-2023-1.jpg', alt: "BarSemLona x ..." }
  ];

  return (
    <section className={styles.Body}>
      <div className={styles.TextModalidades}>
        <h2>NOSSAS MODALIDADES</h2>
        <hr />
        <p>
          O Panterão conta com 9 modalidades físicas e 6 modalidades online.<br />
          Os Atletas participam de diversos campeonatos no decorrer do ano letivo, dos quais temos boas memórias e títulos para recordar.
        </p>
      </div>

      <div className={styles.DivisaoTela}>
        <div className={styles.BlocoEsquerda}>
          <div className={styles.ImgGarra}>
            <img src={garra} alt="GarraPantera" className={styles.Garra} />
          </div>
        </div>

        <div className={styles.BlocoDireita}>
          <div className={styles.ListModalidadesEsquerda}>
            <h2>ESPORTES</h2>
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
            <h2>E-SPORTS</h2>
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
            <h2>TREINOS</h2>
            <hr />
            <p>
              Nossos treinos das modalidades físicas de futsal, vôlei e basquete, acontecem no Centro Poliesportivo do CEFET MG - Leopoldina.<br />
              Já nossos treinos das modalidades de E-sports acontecem de forma remota.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.AcesseTreino}>
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