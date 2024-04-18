import React from 'react';
import '../styles/DivRedonda.css';
import Divider from './Divider';
import { FaInstagram } from "react-icons/fa";

function DivRedonda({ imageLink, h1Text, h3Text, iconLink }) {
    const links = [
        { url: "https://imgbox.com/VOIgCQVs", image: imageLink, alt: "Imagem Diretoria" },
        { url: iconLink, icon: <FaInstagram/> }
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
                <h1 className="textoInformacoes">
                    {h1Text}
                </h1>
                <h3>
                    {h3Text}
                </h3>
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

export default DivRedonda;
