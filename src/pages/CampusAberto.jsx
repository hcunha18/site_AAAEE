import React from 'react';
import styles from './pages_styles/CampusAberto.module.css';
import bannerCampusAberto from '../images/bannerCampusAbertoMembros.png';
import Divider from '../components/structures/Divider';
import DivRedonda from '../components/structures/BoxMembros';
import FotoPrincipal from '../components/structures/BoxHomenagem';
import BoxMembros from '../components/structures/BoxMembros';
import BoxApoiadores from '../components/structures/BoxApoiadores';

// Definição das boxs
const coordenadoraData = [
  {
    imageLink: 'https://i.postimg.cc/fLpk1x2M/perfil-gabriela.jpg',
    h1Text: 'Drª  Gabriela Rezende de Oliveira Venturini',
    h3Text: 'Coordenadora',
    gitLink: '',
    mailLink: 'humbertomottadacunha@gmail.com',
    linkedLink: 'https://www.linkedin.com/in/humberto-motta-da-cunha-447067188/'
  }
]

// Box dos bolsistas
const membrosData = [
  {
    imageLink: 'https://i.postimg.cc/P55hzCyy/isabelly.jpg',
    h1Text: 'Isabelly Araújo Temoteo',
    h3Text: 'Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão',
    gitLink: 'https://github.com/IsabellyTemoteo',
    mailLink: 'isabellyatemoteo@gmail.com',
    linkedLink: 'https://www.linkedin.com/in/isabelly-temoteo-010131230/'
  },
  {
    imageLink: 'https://i.postimg.cc/G3gx3dJ4/sophia-membro.jpg',
    h1Text: 'Sophia Coura Martins Ferreira',
    h3Text: 'Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão',
    gitLink: 'https://github.com/sophiacmf',
    mailLink: 'sophiacmf20@gmail.com',
    linkedLink: 'https://www.linkedin.com/in/sophia-coura-martins-ferreira-2160641a5/'
  },
  {
    imageLink: 'https://i.postimg.cc/FKf48w2J/gabriel.jpg',
    h1Text: 'Gabriel Ferreira de Oliveira',
    h3Text: 'Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão',
    gitLink: 'https://github.com/bigolzin',
    mailLink: 'gabrielferreolive@gmail.com',
    linkedLink: 'https://www.linkedin.com/in/gabriel-oliveira-8651a9269/'
  },
  {
    imageLink: 'https://i.postimg.cc/8CqSStSX/marcelo-filho.jpg',
    h1Text: 'Marcelo Teixeira de Sousa Filho',
    h3Text: 'Bolsista do Projeto de Extensão Campus Aberto - Atlética Panterão',
    gitLink: 'https://github.com/Marcelotsfiilho',
    mailLink: 'marcelo.estudo.cefet@gmail.com',
    linkedLink: 'https://www.linkedin.com/in/marcelo-teixeira-574926311/'
  }

]

// Box Apoiadores
const apoiadoresData = [
  {
    imageLink: 'https://i.ibb.co/YhLDpdF/Ellipse-3.png',
    h1Text: 'Centro Federal de Educação Tecnológica de Minas Gerais - Campus Leopoldina',
  },
  {
    imageLink: 'https://i.ibb.co/0tHRtWN/Ellipse-2.png',
    h1Text: 'Prefeitura Municipal de Leopoldina',

  },
  {
    imageLink: 'https://i.ibb.co/fHTvSbb/Ellipse-4.png',
    h1Text: 'Diretoria de Extensão e Desenvolvimento Comunitário',
  }
]

function CampusAberto() {
  return (
    <section className={styles.Body}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>PROJETO CAMPUS ABERTO</h1>
        <img src={bannerCampusAberto} alt='Banner' className={styles.bg} />
      </div>
      <div className={styles.TituloOrientadora}>
        <h2>ORIENTADORA</h2>
        <hr />
      </div>
      <div className={styles.DivisaoTela}>
        <div className={styles.TelaEsquerda}>
          <div className={styles.baseDiretoria}>
            {coordenadoraData.map((membro, index) => (
              <div key={index} className={styles.membro}>
                <BoxMembros
                  imageLink={membro.imageLink}
                  h1Text={membro.h1Text}
                  h3Text={membro.h3Text}
                  gitLink={membro.gitLink}
                  mailLink={membro.mailLink}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.TelaDireita}>
          <p>
            O projeto Campus Aberto Atlética Panterão é coordenado pela professora Drª
            Gabriela Venturini (PORTARIA ADMINISTRATIVA DEDC/CEFET-MG Nº 207,
            DE 14 DE SETEMBRO DE 2023).
          </p>
          {/* Botao Saiba Mais Campus Aberto */}
          <button
            className={styles.verMaisButton}
            onClick={() => window.location.href = "https://www.extensao.leopoldina.cefetmg.br/2023/06/19/campus-aberto/"}>
            Saiba Mais
          </button>
        </div>
      </div>

      {/* Area Bolsistas */}
      <div className={styles.TituloBolsistas}>
        <h2>BOLSISTAS</h2>
        <hr />
      </div>
      <div className={styles.DivisaoTela2}>
        <div className={styles.TelaEsquerda2}>
          <img src="https://i.ibb.co/kJSTLwq/Campus-Preto-e-Branco-1.png" alt="Campus-Preto-e-Branco-1" border="0" />
        </div>
        <div className={styles.TelaDireita2}>

          <div className={styles.ParteDireita}>
            <div className={styles.baseDiretoria}>
              {membrosData.map((membro, index) => (
                <div key={index} className={styles.membro}>
                  <BoxMembros
                    imageLink={membro.imageLink}
                    h1Text={membro.h1Text}
                    h3Text={membro.h3Text}
                    gitLink={membro.gitLink}
                    mailLink={membro.mailLink}
                    linkedLink={membro.linkedLink}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className={styles.TituloSobre}>
        <h2>O QUE É?</h2>
        <hr />
        <p>
          Equipe de competição é uma iniciativa estudantil, constituindo-se de um grupo organizado de estudantes com vínculo ativo e regular em curso de educação
          profissional técnica de nível médio, graduação ou pós-graduação ofertado pelo CEFET-MG, visando participar e representar a Instituição em competições de
          cunho acadêmico.
          A ATLÉTICA CEFET LEOPOLDINA é uma equipe de competição acadêmico esportiva, que realiza ações de ensino, pesquisa e extensão nas áreas do esporte,
          da saúde, da educação, da cultura e da tecnologia, integrando discentes dos diferentes níveis de ensino da Instituição.
        </p>
      </div>

      <div className={styles.SobreProjeto}>
        <h2>PROJETO CAMPUS ABERTO - ATLÉTICA PANTERÃO</h2>
        <hr />
        <p>
          O Campus Aberto é um projeto de extensão da equipe de competição ATLÉTICA CEFET LEOPOLDINA, no contexto esportivo, que tem por objetivo geral
          representar o CEFET-MG em competições esportivas e promover a aproximação do Campus Leopoldina com a comunidade através do esporte, como
          ferramenta de promoção da saúde e da educação.
        </p>
        <p>
          Para isso, serão realizadas as seguintes ações:
          <ul>
            <li>- participação de competições esportivas representando o CEFET-MG Campus Leopoldina;</li>
            <li>- participação em Congresso Internacional de Educação Física;</li>
            <li>- oferecimento de oficinas esportivas para público interno e externo dentro do Complexo Esportivo do campus;</li>
            <li>- desenvolvimento de habilidades socioemocionais do público alvo e dos discentes que compõem a equipe de competição através das oficinas esportivas;</li>
            <li>- programação de atividades esportivas gratuitas e abertas à sociedade na MOCITEC MG 2024, proporcionando o contato do público externo do projeto a
              outras ações de extensão existentes no CEFET-MG.</li>
          </ul>
        </p>
        <p>
          São beneficiados aproximadamente 350 discentes, gratuitamente e igualitariamente, de forma a fortalecer o compromisso do CEFET-MG com os marcos
          legais da inclusão social, e igualdade entre os gêneros.
        </p>
      </div>

      <div className={styles.Pesquisa}>
        <h2>PESQUISA, ENSINO E EXTENSÃO</h2>
        <hr />
        <p>O projeto de pesquisa do Campus Aberto possui 2 bolsistas, um da graduação e um do técnico integrado em informática,
          e busca desenvolver um aplicativo que meça o nível de atividade física dos discentes do campus.
        </p>
        <br></br>

        <p>Ensino: o projeto de ensino está sendo relizado com as tumas dos cursos técnicos integrado do campus, e tem como objetivo
          conhecer as principais tecnologias utiilzadas nos Jogos Olímpicos e Paralímpicos PARIS 2024.
        </p>
        <br></br>
        <p>O Campus Aberto possui um núcleo de extensão chamado Atlética Panterão, que realiza diferentes ações no contexto esportivo,
          dentre elas, a realização do Torneio de Futsal Interperíodos, a programação esportiva da MOCITEC MG.
          a oferta de oficinas esportivas gratuitas para alunos das escolas públicas da cidade ( em parceria com a Prefeitura de Leopoldina),
          a oferta de cursos de extensão, entre outras.
        </p>
      </div>

      <div className={styles.Galeria}>
        <h2>GALERIA DE FOTOS</h2>
        <hr />
        <div className={styles.DivisaoFotos}>
          <div className={styles.ColunaEsquerda}>
            <img className={styles.ImgCampeonato} src="https://i.postimg.cc/431pDgxN/gabriela-lei-palestra.jpg" alt="ImgCampeonato"></img>
          </div>
          <div className={styles.ColunaCentro}>
            <img className={styles.ImgCampeonato} src="https://i.postimg.cc/DzhqpZFM/Equipe-Campus-Aberto-Lei-de-Incentivo-ao-Esporte-1.jpg" alt="ImgCampeonato"></img>
          </div>
          <div className={styles.ColunaDireita}>
            <img className={styles.ImgCampeonato} src="https://i.postimg.cc/Qd1Qq5L7/Gabriela-Palestrando.jpg" alt="ImgCampeonato"></img>
          </div>
        </div>
        <div className={styles.Botao1}>
          <button
            className={styles.verMaisButton}
            onClick={() => navigate("Galeria/")}>
            Galeria
          </button>
        </div>
      </div>
      <div className={styles.Apoiadores}>
        <h2>APOIADORES</h2>
        <hr />
        <div className={styles.ParteDireita2} >
          <div className={styles.apoiadorescard}>
            {apoiadoresData.map((membro, index) => (
              <div key={index} className={styles.membro}>
                <BoxApoiadores
                  imageLink={membro.imageLink}
                  h1Text={membro.h1Text}
                  h3Text={membro.h3Text}
                />
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>



      <div className={styles.DivisaoTela3}>
        <div className={styles.ColunaEsquerda1}>
          <h2>PARA MAIS INFORMAÇÕES</h2>
          <hr />
          <p>Nos acompanhe no Instagram</p>
          <button
            className={styles.verMaisButton}
            onClick={() => window.location.href = "https://www.instagram.com/campusabertocefetleopoldina/"}>
            @campusabertocefetleopoldina
          </button>


        </div>
        <div className={styles.ColunaDireita1}>
          <img className={styles.LogoCampusAberto} src="https://i.postimg.cc/HLzcdTCn/Campus-Aberto-LOGO-1.png" alt="LogoCampusAberto"></img>
        </div>
      </div>
    </section>
  );
}

export default CampusAberto;
