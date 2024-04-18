import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../../images/Escrita.png';
import './styles.css';

const Header = () => {

    const [classOn, setClassOn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAtleticaOpen, setIsAtleticaOpen] = useState(false);
    const [isEsportivoOpen, setIsEsportivoOpen] = useState(false);
    const [isParceriasOpen, setIsParceriasOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsEsportivoOpen(false);
        setIsParceriasOpen(false);
        setIsAtleticaOpen(false);
    };

    const handleAtleticaToggle = () => {
        setIsAtleticaOpen(!isAtleticaOpen);
        setIsEsportivoOpen(false);
        setIsParceriasOpen(false);
    };

    const handleEsportivoToggle = () => {
        setIsEsportivoOpen(!isEsportivoOpen);
        setIsParceriasOpen(false);
        setIsAtleticaOpen(false);
    };

    const handleParceriasToggle = () => {
        setIsParceriasOpen(!isParceriasOpen);
        setIsEsportivoOpen(false);
        setIsAtleticaOpen(false);
    };
      
    return (
        <header>
            <div className="container">
                <Link to="/" onClick={() => setIsDropdownOpen(false)}>
                    <img src={logo} alt="Logo Panterão" className="logo" />
                </Link>
                <div className={ classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li className="item">
                                <div className="dropdown_toggle" onMouseEnter={handleAtleticaToggle}>
                                    A Atlética
                                </div>
                                <ul className="dropdown_menu">
                                    {isAtleticaOpen && (
                                        <>
                                            <li><Link to="/">Home</Link></li>
                                            <li><hr className="dropdown_divider" /></li>
                                            <li><Link to="/Gestao2023_2">Gestão 2023.2</Link></li>
                                            <li><hr className="dropdown_divider" /></li>
                                            <li><Link to="/Galeria">Galeria</Link></li>
                                            <li><hr className="dropdown_divider" /></li>
                                            <li><Link to="/Documentos">Documentos</Link></li>
                                        </>
                                    )}
                                </ul>
                            </li>
                            <li>
                                <Link to="/CampusAberto">Campus Aberto</Link>
                            </li>
                            <li className="item">
                                <div className="dropdown_toggle" onMouseEnter={handleEsportivoToggle}>
                                    Esportivo
                                </div>
                                <ul className="dropdown_menu">
                                    {isEsportivoOpen && (
                                        <>
                                            <li><Link to="/Modalidades">Modalidades</Link></li>
                                            <li><hr className="dropdown_divider" /></li>
                                            <li><Link to="/Competicoes">Competições</Link></li>
                                        </>
                                    )}
                                </ul>
                            </li>
                            <li>
                                <a href="/Eventos">Eventos</a>
                            </li>
                            <li>
                                <a href="/Lojinha">Lojinha</a>  
                            </li>
                            <li className="item">
                                <div className="dropdown_toggle" onMouseEnter={handleParceriasToggle}>
                                    Parcerias
                                </div>
                                <ul className="dropdown_menu">
                                    {isParceriasOpen && (
                                        <>
                                            <li><Link to="/SejaUmParceiro">Seja um parceiro</Link></li>
                                            <li><hr className="dropdown_divider" /></li>
                                            <li><Link to="/NossosParceiros">Nossos parceiros</Link></li>
                                        </>
                                    )}
                                </ul>
                            </li>
                            <li>
                                <a href="/Contato">Contato</a>  
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
    
export default Header;
