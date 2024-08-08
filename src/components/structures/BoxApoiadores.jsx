import React from 'react';
import '../styles/BoxApoiadores.css';
import Divider from './Divider';
import { IoMailSharp } from "react-icons/io5";

function BoxMembros({ imageLink, h1Text, h3Text, gitLink, mailLink, linkedLink, lattesLink }) {
    const links = [
        { url: imageLink, image: imageLink, alt: "Imagem Diretoria" },
        { url: `mailto:${mailLink}`, icon: <IoMailSharp /> },
        // Adicione outros links aqui, se necessário
    ];

    const filteredLinks = links.filter(link => link.url); // Filtra links válidos

    return (
        <div className="redondo-container2">
            <div className="quadrado2"></div>
            <div className="redondo2">
                {filteredLinks.map((link, index) => ( // Use o array filtrado
                    link.image ? (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            <img src={link.image} alt={link.alt} />
                        </a>
                    ) : null
                ))}
            </div>
            <div className="informacoes2">
                <div className="textoInformacoes2">
                    {h1Text}
                </div>
                <br />
                <div>
                    {h3Text}
                </div>
            </div>

            <div className="divisor2">
                <Divider />
            </div>
        </div>
    );
}

export default BoxMembros;
