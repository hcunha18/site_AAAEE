import React, { useEffect, useState } from 'react';
import styles from './pages_styles/Competicoes.module.css';

function Competicoes() {
  const [time, setTime] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <section className={styles.content}>
      <div className={styles.marquee}>
        <div className={styles.marqueeText}>CAMPEONATO ARTHUR RIBEIRO</div>
      </div>
      <div className={styles.scoreboardContainer}>
        <div className={styles.gameStatus}>JOGO EM ANDAMENTO</div>
        <div className={styles.scoreboard}>
          <div className={styles.boltTopLeft}></div>
          <div className={styles.boltTopRight}></div>
          <div className={styles.boltBottomLeft}></div>
          <div className={styles.boltBottomRight}></div>
          <div className={styles.header}>
            <div className={styles.fouls}>
              <div className={styles.foulsTitle}>Faltas</div>
              <div className={styles.foulsNumber}>5</div>
              <div className={styles.tempo}>
                <div>Tempo</div>
                <div className={styles.circle}></div>
              </div>
            </div>
            <div className={styles.possession}>
              <div className={styles.pos}>Período</div>
              <div className={styles.posNumber}>1</div>
            </div>
            <div className={styles.fouls}>
              <div className={styles.foulsTitle}>Faltas</div>
              <div className={styles.foulsNumber}>5</div>
              <div className={styles.tempo}>
                <div>Tempo</div>
                <div className={styles.circle}></div>
              </div>
            </div>
          </div>
          <div className={styles.scores}>
            <div className={styles.team1}>
              <div className={`${styles.teamLogo} ${styles.teamA}`}></div>
              <div className={styles.teamName1}>BTF</div>
              <div className={styles.teamScore}>0</div>
            </div>
            <div className={styles.period}>
              <div className={styles.periodTitle}>TEMPO</div>
              <div className={styles.periodNumber}>{formatTime(time)}</div>
            </div>
            <div className={styles.team2}>
              <div className={`${styles.teamLogo} ${styles.teamB}`}></div>
              <div className={styles.teamName2}>EST</div>
              <div className={styles.teamScore}>3</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.weeklyGames}>
        <div className={styles.title}>JOGOS DA SEMANA</div>
        <div className={styles.schedule}>
          <div className={styles.daySection}>
            <div className={styles.dayTitle}>TERÇA</div>
            <div className={styles.game}>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>F.D.G</div>
              </div>
              <div className={styles.time}>20H30</div>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>MOSSA</div>
              </div>
            </div>
            <div className={styles.game}>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>BOTAFOFO</div>
              </div>
              <div className={styles.time}>21H30</div>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>EST LAPLACE</div>
              </div>
            </div>
          </div>
          <div className={styles.daySection}>
            <div className={styles.dayTitle}>QUARTA</div>
            <div className={styles.game}>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>BAR SEM LONA</div>
              </div>
              <div className={styles.time}>18H45</div>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>URSOS SEM CURSO</div>
              </div>
            </div>
            <div className={styles.game}>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>TROPA DO RATO</div>
              </div>
              <div className={styles.time}>21H15</div>
              <div className={styles.team}>
                <div className={styles.logoPlaceholder}></div>
                <div className={styles.teamName}>JUMENTUS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.title}>GRUPO A</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>CLASSIFICAÇÃO</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo1.png)' }}>
              </div>F.D.G</div></td>
            <td>5</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo2.png)' }}>
              </div>TROPA DO RATO</div></td>
            <td>5</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo3.png)' }}>
              </div>E.C. URSOS SEM CURSO</div></td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo4.png)' }}>
              </div>BAR SEM LONA</div></td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.title}>GRUPO B</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>CLASSIFICAÇÃO</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo1.png)' }}>
              </div>MOSSA FC</div></td>
            <td>5</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo2.png)' }}>
              </div>EST LAPLACE</div></td>
            <td>5</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo3.png)' }}>
              </div>JUMENTUS</div></td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td><div className={styles.team}>
              <div className={styles.logo} style={{ backgroundImage: 'url(/path/to/logo4.png)' }}>
              </div>BOTAFOFO</div></td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Competicoes;
