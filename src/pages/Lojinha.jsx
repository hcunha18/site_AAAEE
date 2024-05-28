import React from 'react';
import styles from './pages_styles/Lojinha.module.css';

function Lojinha() {
    return (
        <section className={styles.content}>
          <div className={styles.overlay}>
            <h1 className={styles.title}>Lojinha</h1>
            <div className={styles.bg}>
              {/* <SliderBanner /> */}
            </div>
          </div>

          {/* section novidades */}
          <div className={styles.novidades}>
            <h1>NOVIDADES</h1>
            <hr />
          </div>
          {/* Imagem do produto novidade destaque */}
          <div className={styles.ImgProdutoDestaque}>
            <img src="https://i.ibb.co/t3GJPW1/Rectangle-18.png" alt="Rectangle-18" border="0" />
          </div>

          {/* Importação do botão COMPRAR */}


          {/* Section todos os produtos à venda */}
          <div className={styles.titleProdutos}>
            <h1>AQUI VOCÊ ENCONTRA OS MELHORES PRODUTOS DE TODO O CEFET</h1>
            <hr />
          </div>
          {/* Divisão da tela em 3 colunas para apresentacao dos produtos */}
          
        </section>
      );
    }
export default Lojinha;
