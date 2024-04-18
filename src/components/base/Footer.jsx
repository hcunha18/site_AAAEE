import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitch, FaYoutube } from 'react-icons/fa6';
import styles from '../styles/Footer.module.css';
import Divider from '../structures/Divider';
import logo from '../../images/Logo-atletica.png';
import logoCEFET from '../../images/DEDC_CEFET.png';

function Footer() {
    return (
        <footer className={styles.footer}>

            {/* Rodapé */}

            <p className={styles.copy_right}>
                <span>Copyright</span>
                &copy; 2023
                <span>Atlética Panterão - Todos os direitos reservados</span>
            </p>

            <div>
                <div className={styles.textoRow}>
                    <div className={styles.text}>
                        <br/>
                        <p>
                            A.A.A.E.E. CEFET Leopoldina - CNPJ:0932039203-23 - R. José Péres, 558
                            <br/>
                            Centro - Prédio 3 - CEP: 36700-000 - Leopoldina - MG
                        </p>
                    </div>
                    <div className={styles.textRightEnd}>
                        <p>
                            Formas de pagamento aceitas: Pix, Cartão de crédito, Cheers e Picpay.
                        </p>
                    </div>
                </div>
            </div>

            <Divider/>
            <br/>

            <div className={styles.aux}>
                <div className={styles.images}>
                    <img src={logo} alt="Logo Panterão" className={styles.logo}/>
                    <img src={logoCEFET} alt="Logo CEFET-MG e DEDC" className={styles.logoCEFET}/> {/* Links para as redes sociais da atlética */}
                </div>
                
                <div className={styles.auxsocial}>
                    <ul className={styles.social_list}>

                        <li>
                            <br/>
                            <text>Siga-nos</text>
                        </li>

                        <li>
                            <br/>
                            <a href="https://api.whatsapp.com/send?phone=5532998510529&text=">
                                <FaWhatsapp/>
                            </a>
                        </li>
                        <li>
                            <br/>
                            <a href="https://www.instagram.com/atleticaleopoldina/">
                                <FaInstagram/>
                            </a>
                        </li>

                        <li>
                            <br/>
                            <a href="https://www.twitch.tv/atleticapanterao">
                                <FaTwitch/>
                            </a>
                        </li>
                        <li>
                            <br/>
                            <a href="https://www.youtube.com/@AtleticaPanterao">
                                <FaYoutube/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
