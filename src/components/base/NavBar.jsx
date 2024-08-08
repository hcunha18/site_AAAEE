import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from '../../images/Escrita.png';

const StyledHeader = styled.header`
  background-color: #d9d9d9;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 6rem;


  .nav_logo {
    
    align-items: center;
    justify-content: flex-start;
    opacity: ${(props) => (props.$isToggleOpen ? "0" : "1")}; 
    visibility: ${(props) => (props.$isToggleOpen ? "hidden" : "visible")}; 
    transition: opacity 0.3s, visibility 0s linear ${(props) => (props.$isToggleOpen ? "0.3s" : "0s")};
    pointer-events: ${(props) => (props.$isToggleOpen ? "none" : "auto")}; 
  }

  .menuToggleBtn {
    display: none;
    color: black;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media screen and (max-width: 872px) {
    height: ${(props) => (props.$isToggleOpen ? "100%" : "6rem")}; 
    .menuToggleBtn {
      display: block;
    }
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  position: relative;
  margin-top: 10px;

  @media screen and (max-width: 872px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    margin-left: -9.5rem;
  }

  li {
    position: relative;
    margin: 0 10px;
    width: 100%;
  }

  .nav-menu-list {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    text-align: center;
    transition: color 0.3s, box-shadow 0.3s;
    box-shadow: 0px 0px 0px transparent;

    &:hover {
      color: #2d7ea3;
      border-radius: 4px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    }
  }

  .dropdownButton {
    text-decoration: none;
    color: black;
    display: block;
    padding: 10px 20px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: auto;
    text-align: center;
    transition: color 0.3s, box-shadow 0.3s;
    box-shadow: 0px 0px 0px transparent;
    min-width: 10rem;

    &:hover {
      color: #2d7ea3;
      border-radius: 4px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    }
  }

  .dropdown_menu {
    border-radius: 4px;
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #d9d9d9;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    display: ${(props) => (props.$isDropdownOpen ? "block" : "none")};
    margin-top: 10px;
    z-index: 1;
  }

  @media screen and (max-width: 872px) {
    width: 100%;
    z-index: 10;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    li {
      width: 100%;
      margin: 0 0px;
    }
    .nav-menu-list {
      padding: 20px 12px;
      background-color: #d9d9d9;
      border-radius: 4px;
      margin: 5px 0;
      margin-left: 0;
    }
    .dropdown_menu {
      position: static;
      background: none;
      padding: 0 0 20px 0;
      border: none;
      border-radius: 0;
      top: 0%;
      left: 0%;
      transform: translateX(0%);
      display: ${(props) => (props.$isDropdownOpen ? "block" : "none")};
    }
    .dropdown_menu li {
      background-color: #d9d9d9;
      padding: 1px 2px;
      margin-top: 10px;
    }
    .dropdownButton {
      margin-left: -2rem;
    }
  }
`;

const styles = {
  dropdown_divider: {
    width: "100%",
    height: "1px",
    background: "#2d7ea3",
    border: "none",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    marginLeft: "-10px",
  
    "@media screen and (max-width: 872px)": {
      marginLeft: "0px", 
    }
  },
  
  logo:{
    justifyContent: "left",
    width: "140px",
    height: "auto",
  },
};

const LogoLink = styled(Link)`
  visibility: ${(props) => (props.$isToggleOpen ? "hidden" : "visible")};
  transition: visibility;
`;

const LogoImage = styled.img`
  width: 140px;
  height: auto;
`;

const DropdownButton = styled.button`
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  text-align: center;
  transition: color 0.3s, box-shadow 0.3s;
  box-shadow: 0px 0px 0px transparent;
  margin-left: -10px;

  &:hover {
    color: #2d7ea3;
    border-radius: 4px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }
  @media screen and (max-width: 871px) {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    margin-left: 0px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #2d7ea3;
  border: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-left: -10px;

  @media screen and (max-width: 872px) {
    margin-left: 0;
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEsportivoDropdownOpen, setIsEsportivoDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    setIsEsportivoDropdownOpen(false);
    setIsEsportivoDropdownOpen(false);
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsEsportivoDropdownOpen(false);
  };

  const handleEsportivoDropdownOpen = () => {
    setIsEsportivoDropdownOpen(!isEsportivoDropdownOpen);
    setIsDropdownOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsToggleOpen(false);
    setIsDropdownOpen(false);
    setIsEsportivoDropdownOpen(false);
  };

  return (
    <>
      <StyledHeader $isToggleOpen={isToggleOpen}>
        <div className="nav_logo">
          <LogoLink
            to="/"
            className="nav-logo-link"
            $isToggleOpen={isToggleOpen}
          >
            <LogoImage className={styles.logo} src={logo} alt="Atlética Panterão" /> 
          </LogoLink>
        </div>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
        <NavMenu $isOpen={isToggleOpen} $isDropdownOpen={isDropdownOpen}>
          <li onClick={handleDropdownOpen}>
            <button className="nav-menu-list">A Atlética</button>
            <ul className="dropdown_menu" $isDropdownOpen={isDropdownOpen}>
              <li>
                <DropdownButton onClick={() => handleNavigation("/")}>
                  Home
                </DropdownButton>
              </li>
              <li>
                <Divider/>
              </li>
              <li>
                <DropdownButton onClick={() => handleNavigation("/Gestao2023_2")}>
                  Gestão 2023.2
                </DropdownButton>
              </li>
              <li>
                <Divider/>  
              </li>
              <li>
                <DropdownButton onClick={() => handleNavigation("/Galeria")}>
                  Galeria
                </DropdownButton>
              </li>
              <li>
                <Divider/>
              </li>
              <li>
                <DropdownButton onClick={() => handleNavigation("/TransparenciaAdministrativa")}>
                   Transparência Administrativa
                </DropdownButton>
              </li>
            </ul>
          </li>
          <li>
            <button
              className="nav-menu-list"
              onClick={() => handleNavigation("/CampusAberto")}
            >
              Campus Aberto
            </button>
          </li>
          <li onClick={handleEsportivoDropdownOpen}>
            <button className="nav-menu-list">Esportivo</button>
            <ul
              className="dropdown_menu"
              style={{ display: isEsportivoDropdownOpen ? "block" : "none" }}
            >
              <li>
                <DropdownButton onClick={() => handleNavigation("/Modalidades")}>
                  Modalidades
                </DropdownButton>
              </li>
              <li>
                <Divider/>
              </li>
              <li>
                <DropdownButton onClick={() => handleNavigation("/Competicoes")}>
                  Competições
                </DropdownButton>
              </li>
            </ul>
          </li>
              <li>
                <button 
                className="nav-menu-list"
                onClick={() => handleNavigation("/NossosParceiros")}>
                  Parcerias
                </button>
              </li>
          <li>
            <button
              className="nav-menu-list"
              onClick={() => handleNavigation("/Eventos")}
            >
              Eventos
            </button>
          </li>
          {/*
          <li>
            <button
              className="nav-menu-list"
              onClick={() => handleNavigation("/Lojinha")}
            >
              Lojinha
            </button>
          </li>
          */}
          <li>
            <button
              className="nav-menu-list"
              onClick={() => handleNavigation("/Contato")}
            >
              Contato
            </button>
          </li>
        </NavMenu>
      </StyledHeader>
    </>
  );
};

export default Header;