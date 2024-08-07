import React from 'react';
import '../styles/BoxMembros.css';
import Divider from './Divider';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import lattes from '../../images/lattes.png';

function BoxMembros({ imageLink, h1Text, h3Text, gitLink, mailLink, linkedLink, lattesLink }) {
    const links = [
        { url: imageLink, image: imageLink, alt: "Imagem Diretoria" },
        { url: gitLink, icon: <FaGithub /> },
        { url: `mailto:${mailLink}`, icon: <IoMailSharp /> },
        { url: linkedLink, icon: <FaLinkedin /> },
        //{ url: lattesLink, icon: <img src={lattes} alt="Lattes" style={{ width: '25px', height: '25px' }} /> }
    ];

    const filteredLinks = links.filter(link => link.url);

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

            <div className="divisor">
                <Divider />
            </div>

            <div className="icones">
                {filteredLinks.map((link, index) => (
                    link.icon ? (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link">
                            {link.icon}
                        </a>
                    ) : null
                ))}
            </div>
        </div>
    );
}

export default BoxMembros;
