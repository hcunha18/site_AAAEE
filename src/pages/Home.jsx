import { useNavigate } from "react-router-dom";
import styles from "./pages_styles/Home.module.css";
import logo from "../images/Background.png";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActions } from "@mui/material";
import { useMediaQuery } from "react-responsive"

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const navigate = useNavigate();

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
            "NA NOSSA LOJINHA! ",
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
            <h1 className={styles.h1}> Nossos produtos</h1>
            <Slider {...settings} className={styles.slider}>
              <div>
                <img
                  className="img2"
                  src="https://i.ibb.co/4jN6NWS/Bucket-Panterao.png"
                  alt="Jogos-Interperiodo"
                  border="0"
                />
              </div>
              <div>
                <img
                  className="img3"
                  src="https://i.ibb.co/myY8nyV/Post-caneca.jpg"
                  alt="Data-Jogos-Interperiodo"
                  border="0"
                />
              </div>
            </Slider>
            <button
              className={styles.verMaisButton}
              onClick={() => navigate("Lojinha/")}
            >
              Ver Todos
            </button>
          </div>
          <div className={styles.divisor}></div>
          <div className={styles.direita}>
            <h2 className={styles.h2}> Campeonatos em Andamento</h2>
            <Slider {...settings} className={styles.slider}>
              <div>
                <img
                  className="img2"
                  src="https://i.ibb.co/8zYBnyz/Jogos-Interperiodo.jpg"
                  alt="Jogos-Interperiodo"
                  border="0"
                />
              </div>
              <div>
                <img
                  className="img3"
                  src="https://i.ibb.co/yfR2X4x/Data-Jogos-Interperiodo.jpg"
                  alt="Data-Jogos-Interperiodo"
                  border="0"
                />
              </div>
            </Slider>
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
              </div>
              <button
              onClick={() => navigate("CampusAberto/")}
              className={styles.verMaisButton}>
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
        <div className={styles.direita2}>
          <div className={styles.logoc}>
            <img
              className="img4"
              src="https://i.ibb.co/SdYzHfR/Campus-Aberto-LOGO-1.png"
              alt="Campus-Aberto-LOGO-1"
              border="0"
            />
          </div>
        </div>
      </div>
      <Card className={styles.customCard}>
        <CardMedia
          component="img"
          image="https://i.ibb.co/KmPr9ww/1700099016684.jpg"
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
            style={{ margin: "20px 15px", fontSize: "17px", textAlign: "justify"}}
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
          <CardActions>
            <button
              onClick={() => navigate("CampusAberto/")}
              className={styles.verMaisButton}
            >
              Saiba Mais
            </button>
          </CardActions>
        </CardContent>
      </Card>
    </section>
  );
}

export default Home;