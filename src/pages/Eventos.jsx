import React, { useEffect } from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Eventos.module.css';

function Eventos() {

  // funçao para colocar o slider
  // {} -> objeto
  // [] -> array/vetor de links

  //Array com as imagens para o Banner da página Eventos
  const linksSliderBanner = [
    {id: "1", url: 'https://i.ibb.co/QnB9ktC/banner-Campus-Aberto-Membros.png', alt: "Banner campus Aberto"},
    {id: "2", url: 'https://i.ibb.co/Sc0ffLy/1700099016684-1.jpg', alt: "#"},
    {id: "3", url: 'https://i.ibb.co/Lhhj1t0/DSC-7079.jpg', alt: "#"},
    {id: "4", url: 'https://i.ibb.co/hdhQQZs/DSC-6531.jpg', alt: "#"}
];

// Array com as imagens da recepção de calouros
  const linksSliderRecepcao = [
    {id: "1", url: 'https://i.ibb.co/MPNLbJY/PHOTO-2023-04-01-09-59-55-1.jpg', alt: "#"},
    {id: "2", url: 'https://i.ibb.co/jG07Lb0/IMG-0488-1.jpg', alt: "#"},
    {id: "3", url: 'https://i.ibb.co/LCbgkWT/PHOTO-2023-04-01-09-59-58-1.jpg', alt: "#"},
    {id: "4", url: 'https://i.ibb.co/Y0MhwJM/PHOTO-2023-04-01-10-00-05.jpg', alt: "#"}
];

// Array com as imagens da Calcoolizando
  const linksSliderCalcoolizando = [
    {id: "1", url: 'https://i.ibb.co/rd1GLVT/DSC-7212.jpg', alt: "Banda Pagode"},
    {id: "2", url: 'https://i.ibb.co/k5zxwnq/DSC-6820.jpg', alt: "#"},
    {id: "3", url: 'https://i.ibb.co/C0gN1dq/DSC-7071.jpg', alt: "#"},
    {id: "4", url: 'https://i.ibb.co/rxbHvxD/DSC-6870.jpg', alt: "#"}
];

// Array com as imagens da Adeus Calouros
  const linksSliderAdeus = [
    {id: "1", url: 'https://i.ibb.co/kq4SwwT/Yuri-Ariane-Adeus-Calouros1.jpg', alt: "Yuri e Ariane"},
    {id: "2", url: 'https://i.ibb.co/XSDJttt/DSCN7589.jpg', alt: "Galera no banner da Atlética"},
    {id: "3", url: 'https://i.ibb.co/4SgQyCy/DSCN7607.jpg', alt: "Meninas no banner da Atlética"},
    {id: "4", url: 'https://i.ibb.co/6vhMQVX/DSCN7609.jpg', alt: "Ze no banner da Atlética"}
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
        <h1>NOSSOS EVENTOS</h1>
        <hr />
        <h2>
          A Atlética Panterão realiza diversos eventos durante o ano, sejam eles festas ou até mesmo eventos intitucionais. <br></br>
          Nosso objetivo é criar uma maior integração entre os alunos e deixar cada vez melhor sua experiência universitária.<br></br>
          Aqui, apresentamos algum de nossos eventos realizados durante o ano.
        </h2>
        {/* <pre>
          {"A Atlética Panterão realiza diversos eventos durante o ano, sejam eles festas ou até mesmo eventos intitucionais. \n"}
          {"Nosso objetivo é criar uma maior integração entre os alunos e deixar cada vez melhor sua experiência universitária. \n"}
          {"Aqui, apresentamos algum de nossos eventos realizados durante o ano."}
        </pre> */}
      </div>

      <div className={styles.DivisaoTela1}>
        <div className={styles.TelaEsquerda}>
          <div className={styles.TextoEvento}>
            <h1>RECEPÇÃO DE CALOUROS</h1>
            <hr />
            <h2>A Recepção de calouros é a festa mais tradicional da Atlética. Acontece no início de cada período e tem como objetivo receber os novos alunos das engenharias do CEFET - Leopoldina. É uma oportunidade incrível para fazer novas amizades, beber bastante e quem sabe até encontrar seu crush. Assim, a recepção de calouros é a melhor forma de começar o período.</h2>
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
            <h1>CALCOOLIZANDO</h1>
            <hr />
            <h2>A Recepção de calouros é a festa mais tradicional da Atlética. Acontece no início de cada período e tem como objetivo receber os novos alunos das engenharias do CEFET - Leopoldina. É uma oportunidade incrível para fazer novas amizades, beber bastante e quem sabe até encontrar seu crush. Assim, a recepção de calouros é a melhor forma de começar o período.</h2>
          </div>
        </div>
      </div>

      <div className={styles.DivisaoTela3}>
        <div className={styles.TelaEsquerda}>
          <div className={styles.TextoEvento}>
            <h1>ADEUS CALOUROS</h1>
            <hr />
            <h2>A Recepção de calouros é a festa mais tradicional da Atlética. Acontece no início de cada período e tem como objetivo receber os novos alunos das engenharias do CEFET - Leopoldina. É uma oportunidade incrível para fazer novas amizades, beber bastante e quem sabe até encontrar seu crush. Assim, a recepção de calouros é a melhor forma de começar o período.</h2>
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
