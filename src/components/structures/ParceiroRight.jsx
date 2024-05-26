import React from 'react';
import styles from '../styles/ParceiroRight.module.css';

function Divider() {
    return <hr className={styles.divider} />;
  }

  
function ParceiroRight({ empresas }) {
  return (
    <section className={styles.content}>
      {empresas.map((empresa, index) => (

        <div key={index} className={styles.informacoes}>
            <div className={styles.parceiro}>
                <img src={empresa.logo} alt={`${empresa.nome} logo`} />
                <div className={styles.parceiroInfo}>
                    <div className={styles.parceiroDetalhes}>
                    <p><strong>Endereço:</strong> {empresa.endereco}</p>
                    <p><strong>Email:</strong> {empresa.email}</p>
                    <p><strong>Localização:</strong> {empresa.localizacao}</p>
                    </div>
                </div>
            </div>

            <div>

                <div className={styles.parceiroInfo}>
                        <h2>{empresa.nome}</h2>
                        <Divider/>
                        <p className={styles.descricaoEmpresa}>{empresa.descricao}</p>
                </div>
            </div>
        </div>

      ))}
    </section>
  );
}

export default ParceiroRight;
