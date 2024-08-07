import React from 'react';
import '../styles/BoxHomenagem.css';
import Divider from './Divider';

function BoxHomenagem() {
    return (
        <div className="redondo-container-arthur">
            <div className="quadrado-arthur"></div>
            <div className="redondo-arthur">
                <a href="https://i.postimg.cc/Y2gbbkCm/foto-arthurzin.jpg" target="_blank"><img src="https://i.postimg.cc/Y2gbbkCm/foto-arthurzin.jpg" alt="Arthur Ribeiro"/></a>
            </div>
            <div className="informacoes-arthur">
                <h1 className="textoInformacoes-arthur">
                    Arthur Ribeiro de Oliveira
                </h1>
                <h3>
                    Cofundador da A.A.A.E.E CEFET-Leopoldina
                </h3>
            </div>

            <div className="divisor-arthur">
                <Divider/>
            </div>

            <div className='agradecimentos-arthur'>
                <text>
                    A Atlética Panterão agradece em especial ao nosso cofundador, 
                    <br/>
                    Arthur Ribeiro, 
                    <br/>
                    pelo trabalho prestado e proporcionado.
                </text>
            </div>
        </div>
    );
}

export default BoxHomenagem;
