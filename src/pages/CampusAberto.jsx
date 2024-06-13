import React from 'react';
import styles from './pages_styles/CampusAberto.module.css';
import bannerCampusAberto from '../images/bannerCampusAbertoMembros.png';
import Divider from '../components/structures/Divider';
import DivRedonda from '../components/structures/BoxMembros';
import FotoPrincipal from '../components/structures/BoxHomenagem';

function CampusAberto() {
  return (
    <section className={styles.Body}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>PROJETO CAMPUS ABERTO</h1>
        <img src={bannerCampusAberto} alt='Banner' className={styles.bg} />
      </div>

      <div className={styles.TituloOrientadora}>
        <h1>ORIENTADORA</h1>
      </div>
      <div className={styles.DivisaoTela}>
        <div className={styles.TelaEsquerda}>

        <div className={styles.CardCorpo}>
              <div className={styles.ImgPerfil}>
                <img
                  className={styles.img1}
                  src="https://i.ibb.co/vX972Gc/foto-gabriela.jpg" 
                  alt="gabriela"
                />
              </div>
              <div className={styles.profileinfo}>
              </div>
              <h2>Drª  Gabriela Rezende de Oliveira Venturini</h2>
              <p>Coordenadora</p>
            </div>

        </div>









        <div className={styles.TelaDireita}>
          <h2>
            O projeto Campus Aberto Atlética Panterão é coordenado pela professora Drª
            Gabriela Venturini (PORTARIA ADMINISTRATIVA DEDC/CEFET-MG Nº 207,
            DE 14 DE SETEMBRO DE 2023).
          </h2>
        </div>
      </div>

      <div className={styles.TituloBolsistas}>
        <h1>BOLSISTAS</h1>
        <hr />
      </div>
      <div className={styles.DivisaoTela2}>
        <div className={styles.TelaEsquerda2}>
          <img src="https://i.ibb.co/kJSTLwq/Campus-Preto-e-Branco-1.png" alt="Campus-Preto-e-Branco-1" border="0" />
        </div>
        <div className={styles.TelaDireita2}>

          <div className={styles.ParteDireita}>
            <div className={styles.CardBols}>
              <div className={styles.ImgPerfil}>
                <img
                  className={styles.img2}
                  src="https://i.ibb.co/LYHYvz2/isabelly.jpg"
                  alt="isabelly"
                />
              </div>
              <div className={styles.profileinfo}>
              <h2>Isabelly Araújo Temoteo</h2>
              </div>
              <p>Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão</p>
            </div>

            <div className={styles.CardBols}>
              <div className={styles.ImgPerfil}>
                <img
                  className={styles.img3}
                  src="https://i.ibb.co/GTxzgpv/gabriel.jpg"
                  alt="gabriel"
                />
              </div>
              <div className={styles.profileinfo}>
              <h2>Gabriel Ferreira de Oliveira</h2>
              </div>
              <p>Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão</p>
            </div>

          </div>
          <div className={styles.ParteMeio}><h1>Integrantes</h1></div>

          <div className={styles.ParteEsquerda}>

            <div className={styles.CardBols}>
              <div className={styles.ImgPerfil}>
                <img
                  className={styles.img4}
                  src="https://i.ibb.co/B6d09rx/foto-sophia.jpg"
                  alt="sophia"
                />
              </div>
              <div className={styles.profileinfo}>
              <h2>Sophia Coura Martins Ferreira</h2>
              </div>
              <p>Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão</p>
            </div>

            <div className={styles.CardBols}>
              <div className={styles.ImgPerfil}>
                <img
                  className={styles.img5}
                  src="https://i.ibb.co/6NdL5LR/marcelo-filho-1.jpg" 
                  alt="marcelo-filho-1" 
                />
              </div>
              <div className={styles.profileinfo}>
              <h2>Marcelo Teixeira de Sousa Filho</h2>
              </div>
              <p>Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão</p>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.TituloSobre}>
        <h1>O QUE É?</h1>
        <hr />
        <h2>
          Equipe de competição é uma iniciativa estudantil, constituindo-se de um grupo organizado de estudantes com vínculo ativo e regular em curso de educação
          profissional técnica de nível médio, graduação ou pós-graduação ofertado pelo CEFET-MG, visando participar e representar a Instituição em competições de
          cunho acadêmico.
          A ATLÉTICA CEFET LEOPOLDINA é uma equipe de competição acadêmico esportiva, que realiza ações de ensino, pesquisa e extensão nas áreas do esporte,
          da saúde, da educação, da cultura e da tecnologia, integrando discentes dos diferentes níveis de ensino da Instituição.
        </h2>
      </div>

      <div className={styles.SobreProjeto}>
        <h1>PROJETO CAMPUS ABERTO - ATLÉTICA PANTERÃO</h1>
        <hr />
        <h2>
          O Campus Aberto é um projeto de extensão da equipe de competição ATLÉTICA CEFET LEOPOLDINA, no contexto esportivo, que tem por objetivo geral
          representar o CEFET-MG em competições esportivas e promover a aproximação do Campus Leopoldina com a comunidade através do esporte, como
          ferramenta de promoção da saúde e da educação.
        </h2>
        <h2>
          Para isso, serão realizadas as seguintes ações:
          <ul>
            <li>participação de competições esportivas representando o CEFET-MG Campus Leopoldina;</li>
            <li>participação em Congresso Internacional de Educação Física;</li>
            <li>oferecimento de oficinas esportivas para público interno e externo dentro do Complexo Esportivo do campus;</li>
            <li>desenvolvimento de habilidades socioemocionais do público alvo e dos discentes que compõem a equipe de competição através das oficinas esportivas;</li>
            <li>programação de atividades esportivas gratuitas e abertas à sociedade na MOCITEC MG 2024, proporcionando o contato do público externo do projeto a
              outras ações de extensão existentes no CEFET-MG.</li>
          </ul>
        </h2>
        <h2>
          São beneficiados aproximadamente 350 discentes, gratuitamente e igualitariamente, de forma a fortalecer o compromisso do CEFET-MG com os marcos
          legais da inclusão social, e igualdade entre os gêneros.
        </h2>
      </div>

      <div className={styles.Pesquisa}>
        <h1>PESQUISA, ENSINO E EXTENSÃO</h1>
        <hr />
        <h2>A GABRIELA VAI ESCREVER E MANDAR SOBRE ESSE ASSUNTO</h2>
      </div>

      <div className={styles.Galeria}>
        <h1>GALERIA DE FOTOS</h1>
        <hr />
      </div>

      <div className={styles.DivisaoFotos}>
        <div className={styles.ColunaEsquerda}>
          <img className={styles.ImgCampeonato} src="https://i.ibb.co/f40hxB0/IMG-20231122-150512-1.jpg" alt="ImgCampeonato"></img>
        </div>
        <div className={styles.ColunaCentro}>
          <img className={styles.ImgCampeonato} src="https://i.ibb.co/P5RNW7z/IMG-20231122-150749.jpg" alt="ImgCampeonato"></img>
        </div>
        <div className={styles.ColunaDireita}>
          <img className={styles.ImgCampeonato} src="https://i.ibb.co/PFdMRQY/IMG-20231122-150735.jpg" alt="ImgCampeonato"></img>
        </div>
      </div>
      <div className={styles.Apoiadores}>
        <h1>APOIADORES</h1>
        <hr />
        <div className={styles.Apoio}>
          <div className={styles.CardAp}>
            <div className={styles.ImgPerfil}>
            <img
                  className={styles.ImgApoia}
                  src="https://i.ibb.co/j5QRrf8/DSC-6514.jpg" 
                  alt="Apoia" 
                />           
            </div>
            <div className={styles.apoiainfo}>

              <h2>Centro Federal de Educação Tecnológica de Minas Gerais - Campus Leopoldina</h2> </div>
          </div>


          <div className={styles.CardAp}>
              <div className={styles.ImgPerfil}>
                <img
                  className={styles.ImgApoia}
                  src="https://i.ibb.co/j5QRrf8/DSC-6514.jpg" 
                  alt="Apoia" 
                />
            </div>
            <div className={styles.apoiainfo}>
              <h2>Prefeitura Municipal de Leopoldina</h2> 
          </div>
          </div>

          <div className={styles.CardAp}>
            <div className={styles.ImgPerfil}>
            <img
                  className={styles.ImgApoia}
                  src="https://i.ibb.co/j5QRrf8/DSC-6514.jpg" 
                  alt="Apoia" 
                />            
            </div>
            <div className={styles.apoiainfo}>
              <h2>Diretoria de Extensão e Desenvolvimento Comunitário</h2> </div>
          </div>
          <hr />
        </div>

      </div>




      <div className={styles.DivisaoTela3}>
        <div className={styles.ColunaEsquerda1}>
          <h1>PARA MAIS INFORMAÇÕES</h1>
          <hr />
          <h2>Nos acompanhe no Instagram</h2>

          <div className={styles.AlinharBotao}>
            <a href='https://www.instagram.com/campusabertocefetleopoldina/'><button className={styles.Botao}>@campusabertocefetleopoldina</button></a>
          </div>
        </div>
        <div className={styles.ColunaDireita1}>
          <img className={styles.LogoCampusAberto} src="https://i.ibb.co/CMCf4Ph/Campus-Aberto-LOGO-1.png" alt="LogoCampusAberto"></img>
        </div>
      </div>
    </section>
  );
}

export default CampusAberto;
