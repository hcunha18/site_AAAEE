import React, { useEffect } from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Eventos.module.css';

function Eventos() {

  // funçao para colocar o slider
  // {} -> objeto
  // [] -> array/vetor de links
  const linksSlider = [
    {url: 'https://i.ibb.co/QnB9ktC/banner-Campus-Aberto-Membros.png', alt: "Banner campus Aberto", id: "1"},
    {url: 'https://i.ibb.co/Sc0ffLy/1700099016684-1.jpg', alt: "#", id: "2"},
    {url: 'https://i.ibb.co/Lhhj1t0/DSC-7079.jpg', alt: "#", id: "3"},
    {url: 'https://i.ibb.co/YP9zsKk/DSC-6625.jpg', alt: "#", id: "4"}
];

useEffect(() => {
  // Código a ser executado quando o componente é montado ou atualizado
  
  console.log("montou o componente eventos!");
  return () => {
    // Código de limpeza, executado quando o componente é desmontado ou antes do próximo efeito
    console.log("desmontou o componente eventos");
  };
}, [/* array de dependências */]);
  
  return (
    <section className={styles.Body}>
      {/* <div className={styles.overlay}> */}
        <h1 className={styles.title}>EVENTOS</h1>  
        {/* <div className={styles.bg}> */}
          {/*  */}
          <SliderBanner
            links={linksSlider}
          />
        {/* </div>
      </div> */}

      <div className={styles.NossosEventos}>
        <h1>NOSSOS EVENTOS</h1>
        <hr />
        <pre>
          {"A Atlética Panterão realiza diversos eventos durante o ano, sejam eles festas ou até mesmo eventos intitucionais. \n"}
          {"Nosso objetivo é criar uma maior integração entre os alunos e deixar cada vez melhor sua experiência universitária. \n"}
          {"Aqui, apresentamos algum de nossos eventos realizados durante o ano."}
        </pre>
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
            {/* Imagem / banner das fotos das festas */}
            {/* <img src='https://i.ibb.co/MPNLbJY/PHOTO-2023-04-01-09-59-55-1.jpg' alt='Recepção Panterão 2023.1' /> */}
          </div>
        </div>
      </div>

      <div className={styles.DivisaoTela2}>
        <div className={styles.TelaEsquerda}>
          <div className={styles.ImgFestas}>
            {/* Imagem / banner das fotos das festas */}
            <SliderBanner />
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
            {/* Imagem / banner das fotos das festas */}
            <SliderBanner />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventos;
