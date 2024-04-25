import React from 'react';
import '../styles/DivRedondaArthur.css';
import Divider from './Divider';

function DivRedondaArthur() {
    return (
        <div className="redondo-container-arthur">
            <div className="quadrado-arthur"></div>
            <div className="redondo-arthur">
                <a href="https://imgbox.com/VOIgCQVs" target="_blank"><img src="https://thumbs2.imgbox.com/4a/08/VOIgCQVs_t.png" alt="Italo Aurélio"/></a>
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

export default DivRedondaArthur;
