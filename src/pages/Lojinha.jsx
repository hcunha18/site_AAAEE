import React from 'react';
import SliderBanner from '../components/structures/SliderBanner';
import styles from './pages_styles/Lojinha.module.css';

function Lojinha() {

    // Array de imagens para a página Lojinha
    const linksSliderLojinha = [
      {id: "1", url: 'https://i.ibb.co/kq4SwwT/Yuri-Ariane-Adeus-Calouros1.jpg', alt: "Yuri e Ariane"},
      {id: "2", url: 'https://i.ibb.co/XSDJttt/DSCN7589.jpg', alt: "Galera no banner da Atlética"},
      {id: "3", url: 'https://i.ibb.co/4SgQyCy/DSCN7607.jpg', alt: "Meninas no banner da Atlética"},
      {id: "4", url: 'https://i.ibb.co/6vhMQVX/DSCN7609.jpg', alt: "Ze no banner da Atlética"}
  ];

    //Array de imagens para os produtos
    const linksSliderProdutos = [
      {id: "1", url: 'https://i.ibb.co/Tb4QjFD/Bucket-Panter-o.png', alt: "Yuri e Ariane"},
      {id: "2", url: 'https://i.ibb.co/Tb4QjFD/Bucket-Panter-o.png', alt: "Galera no banner da Atlética"},
      {id: "3", url: 'https://i.ibb.co/Tb4QjFD/Bucket-Panter-o.png', alt: "Meninas no banner da Atlética"},
      {id: "4", url: 'https://i.ibb.co/Tb4QjFD/Bucket-Panter-o.png', alt: "Ze no banner da Atlética"}
  ];

    return (
        <section className={styles.content}>
          <div className={styles.overlay}>
            <h1 className={styles.title}>Lojinha</h1>
            <div className={styles.bg}>
              <SliderBanner
                links={linksSliderLojinha}
              />
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
          <div className={styles.botao}>
            <h1>AQUI TERÁ UM BOTAO</h1>
          </div>
          {/* Section todos os produtos à venda */}
          <div className={styles.titleProdutos}>
            <h1>AQUI VOCÊ ENCONTRA OS MELHORES PRODUTOS DE TODO O CEFET</h1>
            <hr />
          </div>
          
          {/* Divisão da tela em 3 colunas para apresentacao dos produtos */}
          <div className={styles.DivisaoProdutos}>
            <div className={styles.ColunaEsquerda}>
              <div className={styles.slider}>
                <SliderBanner 
                  links={linksSliderProdutos}
                />
              </div>
              <div className={styles.descricaoProduto}>
                <h2>Bucket Panterão</h2>
                <hr/>
                <h2>R$ 50,00</h2>
              </div>
            </div>
            <div className={styles.ColunaCentro}>
              <div className={styles.slider}>
                <SliderBanner 
                  links={linksSliderProdutos}
                />
              </div>
              <div className={styles.descricaoProduto}>
                <h2>Caneca Panterão</h2>
                <hr/>
                <h2>R$ 50,00</h2>               
              </div>                
            </div>
            <div className={styles.ColunaDireita}>
              <div className={styles.slider}>
                <SliderBanner 
                  links={linksSliderProdutos}
                />
              </div>
              <div className={styles.descricaoProduto}>
                <h2>Camisa Algodão Panterão</h2>
                <hr/>
                <h2>R$ 50,00</h2>               
              </div>                             
            </div>
            {/* <div className={styles.imgGarra}>
              <img src='https://i.ibb.co/jkfGYSk/garra-1-2.png'/>
            </div> */}
          </div>



        </section>
      );
    }
export default Lojinha;
