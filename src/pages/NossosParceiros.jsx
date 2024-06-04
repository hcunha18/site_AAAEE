import React from 'react';
import logo from '../images/Background.png';
import styles from './pages_styles/NossosParceiros.module.css';
import Parceiros from '../components/structures/Parceiros.jsx';

function Divider() {
    return <hr className={styles.divider} />;
}

const empresas = [
    {
      logo: 'https://th.bing.com/th/id/OIP.KRURSIfETIgNFlh3zeL8GAHaE2?rs=1&pid=ImgDetMain',
      nome: 'Empresa 1',
      descricao: 'A Mecânica PowerMEC, é uma oficina mecânica completa com sede própria em Sorocaba, localizada na Zona Oeste na Av. General Carneiro, 1149 – Sorocaba/SP. Somos especializados no conserto de veículo e automóveis de todas as marcas nacionais e importadas, com uma equipe diversificada de mecânicos devidamente uniformizados e treinados.Trabalhamos com: Mecânica Geral, Freios, Pneus, Suspensão, Troca de Óleo e Filtro, Troca de Correia, Injeção Eletrônica, Troca de Embreagem, Limpeza de Radiador, Bico Injetor, Alinhamento / Balanceamento. ',
      endereco: 'Endereço da Empresa 1',
      email: 'email@empresa1.com',
      telefone: '(31) xxxxx-xxxx'
    },
    {
      logo: 'https://i.pinimg.com/originals/87/4f/00/874f00b0e6a9f0c905433bf6d3b50979.jpg',
      nome: 'Empresa 2',
      descricao: 'A Mecânica PowerMEC, é uma oficina mecânica completa com sede própria em Sorocaba, localizada na Zona Oeste na Av. General Carneiro, 1149 – Sorocaba/SP. Somos especializados no conserto de veículo e automóveis de todas as marcas nacionais e importadas, com uma equipe diversificada de mecânicos devidamente uniformizados e treinados.Trabalhamos com: Mecânica Geral, Freios, Pneus, Suspensão, Troca de Óleo e Filtro, Troca de Correia, Injeção Eletrônica, Troca de Embreagem, Limpeza de Radiador, Bico Injetor, Alinhamento / Balanceamento. ',
      endereco: 'Endereço da Empresa 2',
      email: 'email@empresa2.com',
      telefone: '(31) xxxxx-xxxx'
    },
    {
      logo: 'https://i.pinimg.com/originals/87/4f/00/874f00b0e6a9f0c905433bf6d3b50979.jpg',
      nome: 'Empresa 2',
      descricao: 'A Mecânica PowerMEC, é uma oficina mecânica completa com sede própria em Sorocaba, localizada na Zona Oeste na Av. General Carneiro, 1149 – Sorocaba/SP. Somos especializados no conserto de veículo e automóveis de todas as marcas nacionais e importadas, com uma equipe diversificada de mecânicos devidamente uniformizados e treinados.Trabalhamos com: Mecânica Geral, Freios, Pneus, Suspensão, Troca de Óleo e Filtro, Troca de Correia, Injeção Eletrônica, Troca de Embreagem, Limpeza de Radiador, Bico Injetor, Alinhamento / Balanceamento. ',
      endereco: 'Endereço da Empresa 2',
      email: 'email@empresa2.com',
      telefone: '(31) xxxxx-xxxx'
    },
    {
      logo: 'https://i.pinimg.com/originals/87/4f/00/874f00b0e6a9f0c905433bf6d3b50979.jpg',
      nome: 'Empresa 2',
      descricao: 'A Mecânica PowerMEC, é uma oficina mecânica completa com sede própria em Sorocaba, localizada na Zona Oeste na Av. General Carneiro, 1149 – Sorocaba/SP. Somos especializados no conserto de veículo e automóveis de todas as marcas nacionais e importadas, com uma equipe diversificada de mecânicos devidamente uniformizados e treinados.Trabalhamos com: Mecânica Geral, Freios, Pneus, Suspensão, Troca de Óleo e Filtro, Troca de Correia, Injeção Eletrônica, Troca de Embreagem, Limpeza de Radiador, Bico Injetor, Alinhamento / Balanceamento. ',
      endereco: 'Endereço da Empresa 2',
      email: 'email@empresa2.com',
      telefone: '(31) xxxxx-xxxx'
    },
  ];



function NossosParceiros() {
    return (
        <section className={styles.content}>

        <div className={styles.overlay}>
          <h1 className={styles.title}>PARCEIROS</h1>
          <img src={logo} alt="Pantera" className={styles.bg}/>
        </div>

        <div className={styles.baseInformacoes}>
            <pre className={styles.textoInformacoes}>
            Parceiros
            </pre>

            <Divider/>

            <p className={styles.textoMotivacional}>
              "O segredo de um grande sucesso está saber fazer parcerias duradouras"
            </p>

        </div>

        <div className={styles.empresas}>
         <Parceiros empresas={empresas} />
        </div>

        <div className={styles.endPage}>
          <div className={styles.endPageLeft}>
            <img src="https://i.ibb.co/xGSc8GS/Pantera-removebg-preview.png" className={styles.pantera}/>
          </div>

          <div className={styles.endPageRight}>
            <a className={styles.Texto}>Quer ser nosso parceiro?</a>
            <hr className={styles.finalDivider} />
            <a className={styles.CliqueNoBotao}>Clique no botão abaixo</a>
            <div className={styles.AlinharBotao}>
                <a href='https://linktr.ee/atleticacefetleopoldina?fbclid=PAAaaWLmmqzTtQD8Rd91MLRPsl2xphEkKPZEYuHeYrWGWES4P6NVKB0cZNvus'><button className={styles.Botao}>Saiba Mais</button></a>
            </div>
          </div >
        </div >


        </section>
    );
}

export default NossosParceiros;
