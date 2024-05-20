import React, { useEffect, useState } from 'react';
import styles from './pages_styles/Documentos.module.css';
import logo from '../images/Background.png';
import DynamicCard from '../components/structures/DynamicCard.jsx';
import { VscFilePdf } from "react-icons/vsc";

function Documentos() {
  const [items, setItems] = useState([
    {
        icon: <VscFilePdf />,
        fileName: 'Regimento Interno',
        fileUrl: '../pdfs/Regimento InternodeESports.pdf',
        modDate: null,
        fileSize: null
    },
    {
        icon: <VscFilePdf />,
        fileName: 'Relatório Anual 2023',
        fileUrl: '/pdfs/RelatorioAnual2023.pdf',
        modDate: null,
        fileSize: null
    },
    {
      icon: <VscFilePdf />,
      fileName: 'Relatório Anual 2022',
      fileUrl: '/pdfs/RelatorioAnual2022.pdf',
      modDate: null,
      fileSize: null
    },
  ]);
  
  useEffect(() => {
    const fetchFileDetails = async () => {
      const updatedItems = await Promise.all(items.map(async item => {
        try {
          const response = await fetch(item.fileUrl, { method: 'HEAD' });
          if (!response.ok) {
            throw new Error(`Error fetching ${item.fileName}`);
          }
          const fileSize = response.headers.get('content-length');
          const lastModified = response.headers.get('last-modified');
          return {
            ...item,
            fileSize: fileSize ? (fileSize / (1024 * 1024)).toFixed(2) + ' MB' : 'Desconhecido',
            modDate: lastModified ? new Date(lastModified).toLocaleDateString('pt-BR') : 'Desconhecido'
          };
        } catch (error) {
          console.error(`Error fetching details for ${item.fileName}:`, error);
          return {
            ...item,
            fileSize: 'Erro ao obter tamanho',
            modDate: 'Erro ao obter data'
          };
        }
      }));
      setItems(updatedItems);
    };
    
    fetchFileDetails();
  }, [items]);

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
