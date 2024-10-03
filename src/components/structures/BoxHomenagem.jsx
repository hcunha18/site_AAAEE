import React from 'react';
import '../styles/BoxHomenagem.css';
import Esporte from '../../images/Esporte.png'
import Divider from './Divider';

function BoxHomenagem() {
    return (

        <div className="container">
            <div className="card">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={Esporte} alt="Pessoa realizando esporte" className="fundoCard"/>
                <div className="imagemRedonda">
                    <img src="https://i.postimg.cc/Y2gbbkCm/foto-arthurzin.jpg" alt="Arthur Ribeiro"/>
                </div>
                <div className="escritasHomenagem">
                    <h1>Arthur Ribeiro de Oliveira</h1>
                    <p>Cofundador da A.A.A.E.E CEFET-Leopoldina</p>
                    <p>Arthur Ribeiro de Oliveira foi um dos pilares na fundação da nossa Atlética Panterão. Sua dedicação e paixão pelo esporte deixaram um legado que continuamos a honrar em cada evento e competição. <br/> Agradecemos por tudo, Arthur.</p>
                </div>
            </div>
        </div>

    );
}

export default BoxHomenagem;
