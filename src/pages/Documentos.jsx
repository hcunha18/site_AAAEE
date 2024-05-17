import React from 'react';
import styles from './pages_styles/Documentos.module.css';
import logo from '../images/Background.png';
import DynamicCard from '../components/structures/DynamicCard.jsx';
import { VscFilePdf } from "react-icons/vsc";

function Documentos() {

  const items = [
    {
        icon: <VscFilePdf />,
        fileName: 'Relatório Anual',
        modDate: '2024-05-17',
        fileSize: '1.2 MB'
    },
    {
        icon: <VscFilePdf />,
        fileName: 'Relatório Anual',
        modDate: '2024-05-16',
        fileSize: '850 KB'
    },
    {
      icon: <VscFilePdf />,
      fileName: 'Relatório Anual',
      modDate: '2024-05-16',
      fileSize: '850 KB'
    },
  ];

  return (
    
    <section className={styles.content}>

      <div className={styles.overlay}>
        <h1 className={styles.title}>DOCUMENTOS</h1>
        <img src={logo} alt="Pantera" className={styles.bg}/>
      </div>

      <div className={styles.baseInformacoes}>
            <DynamicCard items={items} />
      </div> 

      </section>
  );

}

export default Documentos;
