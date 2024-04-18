import React from 'react';
import styles from './pages_styles/Modalidades.module.css';
import garra from '../images/garra 1.png';

function Modalidades() {
    return (
        <section className={styles.Body}>
            <div className={styles.TextModalidades}>
                <h1>NOSSAS MODALIDADES</h1>
                <hr />
                <h2>O Panterão conta com 9 modalidades físicas e 6 modalidades online.<br />
                    Os Atletas participam de diversos campeonatos no decorrer do ano letivo, dos quais temos boas memórias e títulos para recordar.</h2>
            </div>

            <div className={styles.DivisaoTela}>
                <div className={styles.BlocoEsquerda}>
                    <div className={styles.ImgGarra}>
                        <img src={garra} alt="GarraPantera" className={styles.Garra} />
                    </div>
                </div>

                <div className={styles.BlocoDireita}>
                    <div className={styles.ListModalidadesEsquerda}>
                        <h1>ESPORTES</h1>
                        <hr />
                        <ul>
                            <li>FUTSAL</li>
                            <li>TÊNIS DE MESA</li>
                            <li>SINUCA</li>
                            <li>PETECA</li>
                            <li>FUTVOLEI</li>
                            <li>NATAÇÃO</li>
                            <li>ESCALADA</li>
                            <li>FUTEBOL</li>
                            <li>BASQUETE</li>
                            <li>VÔLEI</li>
                        </ul>
                    </div>

                    <div className={styles.ListModalidadesDireita}>
                        <h1>E-SPORTS</h1>
                        <hr />
                        <ul>
                            <li>LEAGUE OF LEGENDS</li>
                            <li>COUNTER-STRIKE 2</li>
                            <li>VALORANT</li>
                            <li>OVERWATCH</li>
                            <li>FIFA</li>
                            <li>TEAM FIGHT TATICS</li>
                        </ul>
                    </div>

                    <div className={styles.Treino}>
                        <h1>TREINOS</h1>
                        <hr />
                        <p>Nossos treinos das modalidades físicas de futsal, vôlei e basquete, acontecem no Centro Poliesportivo do CEFET MG - Leopoldina.<br />
                            Já nossos treinos das modalidades de E-sports acontecem de forma remota.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.AcesseTreino}>
                <h1>TREINOS</h1>
                <hr />
                <h2>Quer ser um atleta Panterão?</h2>
            </div>

            <div className={styles.AlinharBotao}>
                <a href='https://linktr.ee/atleticacefetleopoldina?fbclid=PAAaaWLmmqzTtQD8Rd91MLRPsl2xphEkKPZEYuHeYrWGWES4P6NVKB0cZNvus'><button className={styles.Botao}>Saiba Mais</button></a>
            </div>

            <div className={styles.DivisaoFotos}>
                <div className={styles.ColunaEsquerda}>
                    <img className={styles.ImgCampeonato} src="https://i.ibb.co/f40hxB0/IMG-20231122-150512-1.jpg" alt="ImgCampeonato" />
                </div>
                <div className={styles.ColunaCentro}>
                    <img className={styles.ImgCampeonato} src="https://i.ibb.co/P5RNW7z/IMG-20231122-150749.jpg" alt="ImgCampeonato" />
                </div>
                <div className={styles.ColunaDireita}>
                    <img className={styles.ImgCampeonato} src="https://i.ibb.co/PFdMRQY/IMG-20231122-150735.jpg" alt="ImgCampeonato" />
                </div>
            </div>
        </section>
    );
}

export default Modalidades;
