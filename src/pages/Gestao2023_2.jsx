import React from 'react';
import logo from '../images/Background.png';
import styles from './pages_styles/Gestao2023_2.module.css';
import Divider from '../components/structures/Divider';
import BoxMembros from '../components/structures/BoxMembros';
import FotoPrincipal from '../components/structures/BoxHomenagem';

function Gestao2023_2() {
  const membrosData = [
    {
      imageLink: 'https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png',
      h1Text: 'Humberto Motta da Cunha',
      h3Text: 'Presidente da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://www.instagram.com/atleticaleopoldina/',
      mailLink: 'humberto@example.com',
      linkedLink: 'https://www.linkedin.com/in/humberto-motta-da-cunha'
    },
    {h1Text: 'a',},
    {h1Text: 'b',},
    {h1Text: 'c',},
    {},
    {},
    {},
    {},
  ];

  const organizarMembrosPorLinha = (membros) => {
    const membrosPorLinha = [];
    for (let i = 0; i < membros.length; i += 3) {
      membrosPorLinha.push(membros.slice(i, i + 3));
    }
    return membrosPorLinha;
  };

  const membrosPorLinha = organizarMembrosPorLinha(membrosData);

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
        {membrosPorLinha.map((linha, index) => (
          <div key={index} className={styles.membrosLinha}>
            {linha.map((membro, idx) => (
              <BoxMembros
                key={idx}
                imageLink={membro.imageLink}
                h1Text={membro.h1Text}
                h3Text={membro.h3Text}
                gitLink={membro.gitLink}
                mailLink={membro.mailLink}
                linkedLink={membro.linkedLink}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gestao2023_2;
