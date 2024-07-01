import React from 'react';
import '../styles/BoxApoiadores.css';
import Divider from './Divider';

function BoxApoiadores({ imageLink, h1Text, h3Text }) {
    const links = [
        { url: imageLink, image: imageLink, alt: "Imagem Diretoria" },
        { url: `mailto:${mailLink}`, icon: <IoMailSharp /> },
        //{ url: lattesLink, icon: <img src={lattes} alt="Lattes" style={{ width: '25px', height: '25px' }} /> }
    ];

    return (
        <div className="redondo-container">
            <div className="quadrado"></div>
            <div className="redondo">
                {links.map((link, index) => (
                    link.image ? (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            <img src={link.image} alt={link.alt} />
                        </a>
                    ) : null
                ))}
            </div>
            <div className="informacoes">
                <div className="textoInformacoes">
                    {h1Text}
                </div>
                <br />
                <div>
                    {h3Text}
                </div>
            </div>
        </div>
    );
}

export default BoxApoiadores;
