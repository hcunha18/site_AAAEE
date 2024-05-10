import React from 'react';
import '../styles/BoxMembros.css';
import Divider from './Divider';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

function BoxMembros({ imageLink, h1Text, h3Text, iconLink }) {
    const links = [
        { url: "https://imgbox.com/VOIgCQVs", image: imageLink, alt: "Imagem Diretoria" },
        { url: iconLink, icon: <FaGithub/> },
        { url: "mailto:seuemail@example.com", icon: <IoMailSharp/> }, 
        { url: "https://www.linkedin.com/seuperfil", icon: <FaLinkedin/> } 
    ];

    return (
        <div className="redondo-container">
            <div className="quadrado"></div>
            <div className="redondo">
                {links.map((link, index) => (
                    link.image ? (
                        <a key={index} href={link.url} target="_blank"><img src={link.image} alt={link.alt}/></a>
                    ) : null
                ))}
            </div>
            <div className="informacoes">
                <text className="textoInformacoes">
                    {h1Text}
                </text>
                <br/>
                <text>
                    {h3Text}
                </text>
            </div>

            <div className="divisor">
                <Divider/>
            </div>

            <div className="icones">
                {links.map((link, index) => (
                    link.icon ? (
                        <a key={index} href={link.url} target="_blank">{link.icon}</a>
                    ) : null
                ))}
            </div>
        </div>
    );
}

export default BoxMembros;