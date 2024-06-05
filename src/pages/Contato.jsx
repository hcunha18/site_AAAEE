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

      <div className={styles.mapaBox}>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.8161677813705!2d-42.63469456726882!3d-21.530911559534804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa2ceac9e2e24d7%3A0xbc944d7bf96a2136!2sCEFET-MG%20-%20Campus%20Leopoldina!5e0!3m2!1spt-BR!2sbr!4v1717600540595!5m2!1spt-BR!2sbr" 
          className={styles.mapa}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

      </div>

      <div className={styles.boxFormulario}>
        <h1>Entre em contato com a Atlética Panterão</h1>
      </div>

      </section>
  );
}

export default Contato;
