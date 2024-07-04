import React from 'react';
import '../styles/BoxApoiadores.css';
import Divider from './Divider';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import lattes from '../../images/lattes.png';

function BoxMembros({ imageLink, h1Text, h3Text, gitLink, mailLink, linkedLink, lattesLink }) {
    const links = [
        { url: imageLink, image: imageLink, alt: "Imagem Diretoria" },
        { url: `mailto:${mailLink}`, icon: <IoMailSharp /> },
        
    ];

    return (
        <div className="redondo-container2">
            <div className="quadrado2"></div>
            <div className="redondo2">
                {links.map((link, index) => (
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
