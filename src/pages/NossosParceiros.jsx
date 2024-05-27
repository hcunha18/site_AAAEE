import React from 'react';
import logo from '../images/Background.png';
import styles from './pages_styles/NossosParceiros.module.css';
import ParceiroRight from '../components/structures/ParceiroRight.jsx';

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

            <pre className={styles.textoMotivacional}>
              "O segredo de um grande sucesso está saber fazer parcerias duradouras"
            </pre>

        </div>

        <div>
         <ParceiroRight empresas={empresas} />
        </div>


        </section>
    );
}

export default NossosParceiros;
