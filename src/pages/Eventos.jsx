import React, { useEffect } from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Eventos.module.css';

function Eventos() {

  // funçao para colocar o slider
  // {} -> objeto
  // [] -> array/vetor de links

  //Array com as imagens para o Banner da página Eventos
  const linksSliderBanner = [
    {id: "1", url: 'https://i.postimg.cc/tCd8c9Jc/banner-calcoolizando-1.jpg', alt: "Banner campus Aberto"},
    {id: "2", url: 'https://i.postimg.cc/9ff3TsWn/banner-calcoolizando-2.jpg', alt: "#"},
    {id: "3", url: 'https://i.postimg.cc/W3QxB30B/banner-calcoolizando-6.jpg', alt: "#"},
    {id: "4", url: 'https://i.postimg.cc/GmrqTYc7/adeus-calouros-foto-no-banner-4.jpg', alt: "#"},
    {id: "5", url: 'https://i.postimg.cc/T1gBf69p/banner-calcoolizando-7.jpg', alt: "#"},
    {id: "6", url: 'https://i.postimg.cc/HxJfv580/banner-calcoolizando-5.jpg', alt: "#"},
    {id: "7", url: 'https://i.postimg.cc/c4GVTvxY/banner-calcoolizando-9.jpg', alt: "#"},
];

// Array com as imagens da recepção de calouros
  const linksSliderRecepcao = [
    {id: "1", url: 'https://i.postimg.cc/Vsnq96Z3/atletica-recepcao.jpg', alt: "#"},
    {id: "2", url: 'https://i.postimg.cc/tTVhMCqn/Meninas-com-bandeira-da-atletica-na-recepcao.jpg', alt: "#"},
    {id: "3", url: 'https://i.postimg.cc/hP0VwYBs/pedro-e-calouro-recepcao.jpg', alt: "#"},
    {id: "4", url: 'https://i.postimg.cc/gkpvgWfr/tecnico-recepcao.jpg', alt: "#"}
];

// Array com as imagens da Calcoolizando
  const linksSliderCalcoolizando = [
    {id: "1", url: 'https://i.postimg.cc/RZDJx5b7/Cantor-Calcoolizando.jpg', alt: "Banda Pagode"},
    {id: "2", url: 'https://i.postimg.cc/3J2tw9H0/calcoolizando-1.jpg', alt: "#"},
    {id: "3", url: 'https://i.postimg.cc/t4Q5Hpvj/DSC-6834.jpg', alt: "#"},
    {id: "4", url: 'https://i.postimg.cc/XJTgjBHg/calcoolizando-4.jpg', alt: "#"}
];

// Array com as imagens da Adeus Calouros
  const linksSliderAdeus = [
    {id: "1", url: 'https://i.postimg.cc/KYWPfg2y/Yuri-e-Ariane-Adeus-Calouros.jpg', alt: "Yuri e Ariane"},
    {id: "2", url: 'https://i.postimg.cc/ydJPCyPd/adeus-calouros-foto-no-banner.jpg', alt: "Galera no banner da Atlética"},
    {id: "3", url: 'https://i.postimg.cc/6p0zr3q9/adeus-calouros-foto-no-banner-2.jpg', alt: "Meninas no banner da Atlética"},
    {id: "4", url: 'https://i.postimg.cc/wBj20pRD/adeus-calouros-foto-no-banner-3.jpg', alt: "Ze no banner da Atlética"}
];
  
  return (
    <section className={styles.Body}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>EVENTOS</h1>  
        <div className={styles.bg}>
          <SliderBanner
            links={linksSliderBanner}
          />
        </div>
      </div>

      <div className={styles.NossosEventos}>
        <h2>NOSSOS EVENTOS</h2>
        <hr />
        <p>
          A Atlética Panterão realiza diversos eventos durante o ano, sejam eles festas ou até mesmo eventos intitucionais. <br></br>
          Nosso objetivo é criar uma maior integração entre os alunos e deixar cada vez melhor sua experiência universitária.<br></br>
          Aqui, apresentamos algum de nossos eventos realizados durante o ano.
        </p>
      </div>

      <div className={styles.DivisaoTela1}>
        <div className={styles.TelaEsquerda}>
          <div className={styles.TextoEvento}>
            <h2>RECEPÇÃO DE CALOUROS</h2>
            <hr />
            <p>A Recepção de calouros é a festa mais tradicional da Atlética. Acontece no início de cada período e tem como objetivo receber os novos alunos das engenharias do CEFET - Leopoldina. É uma oportunidade incrível para fazer novas amizades, beber bastante e quem sabe até encontrar seu crush. Assim, a recepção de calouros é a melhor forma de começar o período.</p>
          </div>
        </div>
        <div className={styles.TelaDireita}>
          <div className={styles.ImgFestas}>
            <SliderBanner
              links={linksSliderRecepcao}
            />
          </div>
        </div>
      </div>

      <div className={styles.DivisaoTela2}>
        <div className={styles.TelaEsquerda}>
          <div className={styles.ImgFestas}>
            {/* Imagem / banner das fotos das festas */}
            <SliderBanner 
              links={linksSliderCalcoolizando}
            />
          </div>
        </div>
        <div className={styles.TelaDireita}>
          <div className={styles.TextoEvento}>
            <h2>CALCOOLIZANDO</h2>
            <hr />
            <p>A Recepção de calouros é a festa mais tradicional da Atlética. Acontece no início de cada período e tem como objetivo receber os novos alunos das engenharias do CEFET - Leopoldina. É uma oportunidade incrível para fazer novas amizades, beber bastante e quem sabe até encontrar seu crush. Assim, a recepção de calouros é a melhor forma de começar o período.</p>
          </div>
        </div>
      </div>

      <div className={styles.DivisaoTela3}>
        <div className={styles.TelaEsquerda}>
          <div className={styles.TextoEvento}>
            <h2>ADEUS CALOUROS</h2>
            <hr />
            <p>A Recepção de calouros é a festa mais tradicional da Atlética. Acontece no início de cada período e tem como objetivo receber os novos alunos das engenharias do CEFET - Leopoldina. É uma oportunidade incrível para fazer novas amizades, beber bastante e quem sabe até encontrar seu crush. Assim, a recepção de calouros é a melhor forma de começar o período.</p>
          </div>
        </div>
        <div className={styles.TelaDireita}>
          <div className={styles.ImgFestas}>
            <SliderBanner 
              links={linksSliderAdeus}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventos;
