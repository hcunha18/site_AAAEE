import React from 'react';
import styles from './pages_styles/Contato.module.css'

function Contato() {
  return (
    <section className={styles.content}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>CONTATO</h1>
        <img src={'https://i.ibb.co/hmj05Ly/imagem-2024-06-05-104727447.png'} alt="Pantera" className={styles.bg}/>
      </div>

      <div className={styles.informacoes}>
        <>
          <h1> ENTRE EM CONTATO </h1>
          <hr className={styles.h1Divider} />
        </>
        <div className={styles.informacoesSegundaBox}> 
          <div className={styles.informacoesDeContato}>
            <h1>ENDEREÇO</h1>
            <hr className={styles.h1Divider} />
            <p>R. José Péres, 558 - Centro,<br/>Leopoldina - MG<br/>CEP : 36700-000</p>

            <h1>TELEFONE</h1>
            <hr className={styles.h1Divider} />
            <p>(32) 9 9851-0529</p>

            <h1>E-MAIL</h1>
            <hr className={styles.h1Divider} />
            <p>aaaecefetleopoldina@gmail.com</p>

          </div>
          <div className={styles.informacoesDivider}>
            <hr className={styles.verticalDivider}/>
          </div>
          <div className={styles.informacoesClicaveis}>
            <h1>SUGESTÕES</h1>
            <hr className={styles.h1Divider} />
            <p>Gostaria de fazer sugestões? Sua <br/>mensagem será direcionada para <br/>nosso centro de atendimento e<br/> retornaremos o mais rápido possível.</p>
            <div className={styles.AlinharBotao}>
                <a href='https://linktr.ee/atleticacefetleopoldina?fbclid=PAAaaWLmmqzTtQD8Rd91MLRPsl2xphEkKPZEYuHeYrWGWES4P6NVKB0cZNvus'><button className={styles.Botao}>Saiba Mais</button></a>
            </div>

            <h1>SEJA NOSSO PARCEIRO</h1>
            <hr className={styles.h1Divider} />
            <p>Você tem uma empresa e gostaria de<br/> ter sua logo empurrando o<br/> espírito esportivo do panterão?</p>
            <div className={styles.AlinharBotao}>
                <a href='https://linktr.ee/atleticacefetleopoldina?fbclid=PAAaaWLmmqzTtQD8Rd91MLRPsl2xphEkKPZEYuHeYrWGWES4P6NVKB0cZNvus'><button className={styles.Botao}>Saiba Mais</button></a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mapa}>
   
      </div>

      </section>
  );
}

export default Contato;
