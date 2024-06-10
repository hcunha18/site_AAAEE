import React from 'react';
import styles from '../styles/DynamicCard.module.css';

const Divider = () => <hr className={styles.divider} />;

const DynamicCard = ({ items }) => {
    return (
        <div className={styles.card}>
            <div className={styles.alignTitulos}>
                <div className={styles.textoTitulos}>Nome do arquivo</div>
                <div className={styles.textoTitulos}>Data de modificação</div>
                <div className={styles.textoTitulos}>Tamanho do arquivo</div>
            </div>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className={styles.cardItem}>
                        <div className={styles.fileInfo}>
                            <a href={item.fileUrl} download={item.fileName} className={styles.downloadLink}>
                                <span className={styles.pdfIcon}>{item.icon}</span>
                                <span className={styles.fileName}>{item.fileName}</span>
                            </a>
                        </div>
                        <div className={styles.modDate}>{item.modDate}</div>
                        <div className={styles.fileSize}>{item.fileSize}</div>
                    </div>
                    {index !== items.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default DynamicCard;
