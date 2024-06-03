import React from 'react';
import styles from '../styles/ParceiroRight.module.css';

function Divider() {
    return <hr className={styles.divider} />;
}

function ParceiroRight({ empresas }) {
  return (
    <section className={styles.content}>
      {empresas.map((empresa, index) => (
        <div
          key={index}
          className={`${styles.informacoes} ${index % 2 === 0 ? styles.background1 : styles.background2} ${index % 2 === 0 ? styles.rowReverse : ''}`}
        >
          <div className={styles.parceiro}>
            <img src={empresa.logo} alt={`${empresa.nome} logo`} />
            <div className={styles.parceiroDetalhes}>
              <p><strong>Endereço:</strong> {empresa.endereco}</p>
              <p><strong>Email:</strong> {empresa.email}</p>
              <p><strong>Telefone:</strong> {empresa.telefone}</p>
            </div>
          </div>
          <div className={styles.parceiroInfo}>
            <h2>{empresa.nome}</h2>
            <Divider />
            <p className={styles.descricaoEmpresa}>{empresa.descricao}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ParceiroRight;
