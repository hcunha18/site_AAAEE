import { useNavigate } from "react-router-dom";
import styles from "./pages_styles/Home.module.css";
import logo from "../images/Background.png";
import { TypeAnimation } from "react-type-animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import SliderBanner from '../components/structures/SliderBanner';
import { useEffect } from "react";

function Home() {

  const SliderBannerDireita = [
    { id: "1", url: 'https://i.postimg.cc/XqGpfFBB/Data-Jogos-Interperiodo.jpg', alt: "Jogos interperiodo" },
    { id: "2", url: 'https://i.postimg.cc/hvkhpjVy/Jogos-Interperiodo.jpg', alt: "Data jogos interperiodo" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    window.gtranslateSettings = {
      "default_language": "pt",
      "languages": ["pt", "es", "en"],
      "wrapper_selector": ".gtranslate_wrapper",
      "alt_flags": {
        "en": "usa",
        "pt": "brazil",
        "es": "argentina"
      }
    };

    const gtranslateFunction = () => {
      const userLang = navigator.language || navigator.userLanguage;
      const lang = userLang.substring(0, 2);

      if (lang !== 'pt') {
        const select = document.querySelector('.gtranslate_wrapper select');
        if (select) {
          select.value = lang;
          const event = new Event('change');
          select.dispatchEvent(event);
        }
      }
    };

    script.onload = () => {
      if (typeof gtranslateSettings !== 'undefined') {
        gtranslateFunction();
      } else {
        window.onload = gtranslateFunction;
      }
    };
  }, []);

  return (
    <section className={styles.content}>
      <img src={logo} alt="Pantera" className={styles.bg} />
      <div className={styles.letreiroContainer}>
        <div className={styles.staticMessage}>FIQUEM LIGADOS</div>
        <TypeAnimation
          sequence={[
            "NOS NOSSOS EVENTOS!",
            2000,
            "NOS NOSSOS CAMPEONATOS!",
            2000,
            "NOS NOSSOS PARCEIROS!",
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className={styles.typeAnimation}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.Divisor1}>
          <div className={styles.esquerda}>
          <h2 className={styles.h2}> Campeonatos em Andamento</h2>
            <div className={styles.slider}>
              <SliderBanner
                links={SliderBannerDireita}
              />
            </div>
          </div>
          {/* Linha divisoria no meio da tela */}
          <div className={styles.divisor}></div>

          <div className={styles.direita}>
            <h2 className={styles.h02}> A Atlética</h2>
            <div className={styles.paragrafo1}>
                <p>
                A ASSOCIAÇÃO ATLÉTICA ACADÊMICA DAS ESCOLAS DE ENGENHARIA
                DO CENTRO FEDERAL DE EDUCAÇÃO E TECNOLOGIA DE MINAS GERAIS
                CEFET-MG CAMPUS LEOPOLDINA, denominada Atlética CEFET
                Leopoldina, é pessoa jurídica de direito privado, constituída
                na forma de associação civil sem fins lucrativos,
                caracterizando-se como apartidária, laica, livre e
                independente de orientações filosóficas, com autonomia 
                administrativa e financeira, regida pelo presente estatuto
                e pelas normas da legislação brasileira.
                É uma representatividade dos estudantes do Campus
                Leopoldina do CEFET-MG.
<br />
<br />
                A Atlética CEFET Leopoldina tem por finalidade promover o Esporte
                em suas diferentes dimensões (educacional, social, cultural, 
                científica, tecnológica, da saúde e da gestão) e 
                níveis/manifestações de prática (formação esportiva, excelência 
                esportiva e esporte para toda a vida), através de ações sociais 
                de ensino, pesquisa e extensão baseadas nos princípios fundamentais
                do esporte previstos na Lei Geral do Esporte - nº 14.597/23 
                (autonomia, democratização, descentralização, diferenciação, 
                educação, eficiência, especificidade, gestão democrática, identidade
                nacional, inclusão, integridade, liberdade, participação, qualidade,
                saúde, segurança) sem qualquer distinção de raça, cor, nacionalidade,
                credo, sexo, gênero, sexualidade, convicção política, religiosa, social.
                </p>
              </div>
              <div className={styles.garra}>
            <img
              className={styles.garra}
              src="https://i.postimg.cc/PxH177MQ/garra-panterao.png"
              alt="Garra"
              border="0"
            />
          </div>
          </div>
        </div>
      </div>

      <div className={styles.Divisor2}>
        <div className={styles.esquerda2}>
          <div className={styles.campus}>
            <div className={styles.texto1}>
              <div className={styles.titulo1}>
                <h1>Campus Aberto Atlética Panterão</h1>
              </div>
              <div className={styles.paragrafo1}>
                <p>
                  O Campus Aberto é um projeto de extensão da equipe de
                  competição ATLÉTICA CEFET LEOPOLDINA, no contexto esportivo,
                  que tem por objetivo geral representar o CEFET-MG em
                  competições esportivas e promover a aproximação do Campus
                  Leopoldina com a comunidade através do esporte, como
                  ferramenta de promoção da saúde e da educação.
                </p>
                <button
                  onClick={() => navigate("CampusAberto/")}
                  className={styles.verMaisButton}>
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.direita2}>
          <div className={styles.logoc}>
            <img
              className="img4"
              src="https://i.postimg.cc/HLzcdTCn/Campus-Aberto-LOGO-1.png"
              alt="Campus-Aberto-LOGO-1"
              border="0"
            />
          </div>
        </div>
      </div>
      <Card className={styles.customCard}>
        <CardMedia
          component="img"
          image="https://i.postimg.cc/cHjJLHkx/EDL-X-Botafofo-Lei-de-incentivo-ao-esporte.jpg"
          alt="Incentivo ao Esporte"
          className={styles.cardMedia}
        />
        <CardContent className={styles.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={styles.cardTitle}
            style={{
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "Jockey One, sans-serif",
              color: "#000",
              marginBottom: "20px",
            }}
          >
            LEI DE INCENTIVO AO ESPORTE
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.cardText}
            style={{ margin: "20px 15px", fontSize: "18px", textAlign: "justify", color: "black", fontStyle: "bold" }}
          >
            A Lei nº 11.438/06 – Lei de Incentivo ao Esporte (LIE), como é mais
            conhecida, permite que recursos provenientes de renúncia fiscal
            sejam aplicados em projetos das diversas manifestações esportivas e
            paradesportivas distribuídos por todo o território nacional. Por
            meio de doações e patrocínios, os projetos executados via Lei de
            Incentivo ao Esporte atendem crianças, adolescentes, jovens,
            adultos, pessoas com deficiência e idosos. Mais do que um
            instrumento jurídico, trata-se de uma inovação e um avanço na
            consolidação do paradigma do esporte como um meio de inclusão
            social.
          </Typography>
          <CardActions className={styles.button}>
            <button
              onClick={() => navigate("CampusAberto/")}
              className={styles.verMaisButton}
            >
              Saiba Mais
            </button>
          </CardActions>
        </CardContent>
      </Card>
      <div className="gtranslate_wrapper"></div>
    </section>
  );
}

export default Home;
