import { useEffect, useState } from 'react';
import styles from './pages_styles/Home.module.css';
import logo from '../images/Background.png';
import escrita from '../images/Escrita.png';
import AnimatedTyping from '../components/animation/AnimatedTyping';

function Home() {

  return (


    <section className={styles.content}>

      <img src={logo} alt="Pantera" className={styles.bg} />

      <div className='Letreiro'>
        <div className={styles.tittleDestaques}>
          <AnimatedTyping title="Fiquem ligados nas nossa NOVIDADES!" />
        </div>
      </div>

      <div className={styles.fundo}></div>


      <div className={styles.Divisor1}>
        <div className={styles.esquerda}>
          <h1>Nossos produtos</h1>
          <div className={styles.imagem1}>
            <img className='img1' src="https://i.ibb.co/KL2t43c/Bucket-Panter-o.png" alt="Bucket-Panter-o" border="0" />
          </div>
          <div className={styles.Botao1}>
            <button className={styles.Botao}>Ver Todos</button>
          </div>
        </div>
        <div className={styles.direita}>
          <h2>Campeonatos em andamento</h2>
          <div className={styles.imagem1}>
            <img className='img2' src="https://i.ibb.co/8zYBnyz/Jogos-Interperiodo.jpg" alt="Jogos-Interperiodo" border="0" />
            <img className='img3' src="https://i.ibb.co/yfR2X4x/Data-Jogos-Interperiodo.jpg" alt="Data-Jogos-Interperiodo" border="0" />
          </div>
        </div>
      </div>


      <div className='Divisor2'>
        <div className={styles.esquerda2}>
          <div className='Campus_Aberto'>
            <div className={styles.campus}>
              <div className={styles.texto1}>
                <div className={styles.titulo1}>
                  <h1>Campus Aberto Atlética Panterão</h1>
                </div>
                <div className={styles.paragrafo1}>
                  <p> O Campus Aberto é um projeto de extensão da equipe
                    de competição ATLÉTICA CEFET LEOPOLDINA, no
                    contexto esportivo, que tem por objetivo geral
                    representar o CEFET-MG em competições esportivas e
                    promover a aproximação do Campus Leopoldina com a
                    comunidade através do esporte, como ferramenta de
                    promoção da saúde e da educação.</p>
                </div>
              </div>
            </div>
            <div className={styles.Botao2}>
              <button className={styles.Botao}>Saiba Mais</button>
            </div>
          </div>
        </div>
        <div className={styles.direita2}>
          <div className={styles.logoc}>
            <img className='img4' src="https://i.ibb.co/SdYzHfR/Campus-Aberto-LOGO-1.png" alt="Campus-Aberto-LOGO-1" border="0" />
          </div>
          <div className={styles.Botao3}>
            <button className={styles.Botao}>Acesse o Site</button>
          </div>
        </div>
      </div>



      <div className={styles.quadrado}>
        <div className={styles.metade}>
          <div className={styles.Incentivo}>
            <div className={styles.titulo2}>
              <h1>Lei Incentivo ao Esporte</h1>
            </div>
            <div className={styles.paragrafo2}>
              <p> A Lei nº 11.438/06 – Lei de Incentivo ao Esporte (LIE) –, como é
                mais conhecida, permite que recursos provenientes de renúncia
                fiscal sejam aplicados em projetos das diversas manifestações
                desportivas e paradesportivas distribuídos por todo o território
                nacional. Por meio de doações e patrocínios, os projetos
                executados via Lei de Incentivo ao Esporte atendem crianças,
                adolescentes, jovens, adultos, pessoas com deficiência e idosos.
                Mais do que um instrumento jurídico, trata-se de uma inovação e
                um avanço na consolidação do paradigma do esporte como um
                meio de inclusão social.</p>
            </div>
            <div className={styles.Botao4}>
              <button className={styles.Botao}>Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );

}

export default Home;