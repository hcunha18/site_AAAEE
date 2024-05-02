import React from 'react';
import logo from '../images/Background.png';
import styles from './pages_styles/Gestao2023_2.module.css';
import Divider from '../components/structures/Divider';
import DivRedonda from '../components/structures/DivRedonda';
import FotoPrincipal from '../components/structures/DivRedondaArthur';

function Gestao2023_2() {
  return (
    <section className={styles.content}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>GESTÃO 2023.2</h1>
        <img src={logo} alt="Pantera" className={styles.bg}/>
      </div>
      <div className={styles.baseInformacoes}>
        <pre className={styles.textoInformacoes}>
          Menção Honrosa
        </pre>
        <Divider className={styles.dividerPrincipal}/>
      </div>
      <div className={styles.boxPrincipal}>
        <FotoPrincipal/>
      </div>

      <div className={styles.baseInformacoes}>
        <pre className={styles.textoInformacoes}>
          Membros
        </pre>
        <Divider className={styles.dividerPrincipal}/>
      </div>
      <div className={styles.groundColor}> 
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <div className={styles.baseDiretoria}>
        <div className={styles.linhaDiretoria}>
          <DivRedonda imageLink="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" h1Text="Humberto Motta da Cunha" h3Text="Presidente da A.A.A.E.E CEFET -Leopoldina" iconLink="https://www.instagram.com/atleticaleopoldina/" />
        </div>
        <div className={styles.linhaDiretoria}>
          <DivRedonda />
        </div>
        <div className={styles.linhaDiretoria}>
          <DivRedonda />
        </div>
      </div>

      <div className={styles.baseDiretoria}>
        <div className={styles.linhaDiretoria}>
          <DivRedonda />
        </div>
        <div className={styles.linhaDiretoria}>
          <DivRedonda />
        </div>
        <div className={styles.linhaDiretoria}>
          <DivRedonda />
        </div>
      </div>

    </section>
  );
}

export default Gestao2023_2;
