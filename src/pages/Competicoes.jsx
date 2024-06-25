import React from 'react';
import styles from './pages_styles/Competicoes.module.css';

function Competicoes() {
  return (
    <section className={styles.content}>
      <div className={styles.letreiroContainer}>
        <div className={styles.letreiro}>CAMPEONATOS EM ANDAMENTO</div>
        <p className={styles.campeonatoDescription}>
          O Campeonato Arthur Ribeiro, organizado pela Atlética Panterão,
          é um  emocionante torneio de futsal realizado no Ginásio Poliesportivo
          do CEFET-MG. Este  campeonato conta com a participação de times convidados
          de diversas faculdades  da região, além dos times formados pelos próprios
          alunos do CEFET-MG que tenham  interesse e um grupo completo para competir.
          Este evento esportivo não se limita apenas à comunidade acadêmica local,
          mas  também tem um alcance mais amplo, envolvendo a cidade e várias outras regiões.
          Com isso, o Campeonato Arthur Ribeiro promove uma rica interação entre os  estudantes
          de diferentes instituições, fortalecendo os laços comunitários e ampliando  a rede de
          contatos entre os participantes.  A competição promete ser um marco no calendário esportivo da região,
          destacando-se  pela organização, pela qualidade dos jogos e pelo espírito esportivo que a Atlética
          Panterão sempre busca incentivar
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.secao - grupos}>
          <h2>GRUPOS</h2>
          <div className={stylesinformacoes - partida}>
            <img src="/caminho-para-o-logo-botafogo.png" alt="Logo do Botafogo" />
            <p>15:20</p>
            <img src="/caminho-para-o-logo-mossa-fc.png" alt="Logo do Mossa FC" />
          </div>
        </div>

        <div className={styles.secao - jogos}>
          <h2>JOGOS</h2>
          {/* Repita este bloco para cada linha de estatísticas de jogos */}
          <div className="estatisticas-jogo">
            {/* Insira as estatísticas do jogo aqui */}
          </div>
        </div>

        <div className={styles.secao - artilharia}>
          <h2>ARTILHARIA</h2>
          {/* Repita este bloco para cada linha de estatísticas de artilharia */}
          <div className={styles.estatisticas - artilharia}>
            {/* Insira as estatísticas de artilharia aqui */}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Competicoes;
