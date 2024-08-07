import React from 'react';
import logo from '../images/Background.png';
import styles from './pages_styles/Gestao2023_2.module.css';
import Divider from '../components/structures/Divider';
import BoxMembros from '../components/structures/BoxMembros';
import FotoPrincipal from '../components/structures/BoxHomenagem';

function Gestao2023_2() {
  const membrosData = [
    {
      imageLink: 'https://i.ibb.co/CMd0t2J/humberto-1.jpg',
      h1Text: 'Humberto Motta da Cunha',
      h3Text: 'Presidente da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/hcunha18',
      mailLink: 'humbertomottadacunha@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/humberto-motta-da-cunha-447067188/'
    },
    {
      imageLink: 'https://i.ibb.co/V2zMvZz/yuri.jpg',
      h1Text: 'Yuri Moreira Ferreira',
      h3Text: 'Vice-Presidente da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/YuriFerreira03',
      mailLink: 'yurimoreiraferreira722@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/yuri-moreira-ferreira-663ab84a/'
    },
    {
      imageLink: 'https://i.ibb.co/6NdL5LR/marcelo-filho-1.jpg',
      h1Text: 'Marcelo Teixeira de Sousa Filho',
      h3Text: 'Secretário da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/Marcelotsfiilho',
      mailLink: 'marcelo.estudo.cefet@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/marcelo-teixeira-574926311/'
    },
    {
      imageLink: 'https://i.ibb.co/r3nv9Y9/diogo.jpg',
      h1Text: 'Diogo da Silva Carvalho',
      h3Text: '1° Conselheiro Fiscal da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/DiogoCarv',
      mailLink: 'diogoscarvalho02@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/diogo-das-carvalho/'
    },
    {
      imageLink: 'https://i.ibb.co/7Cxrz3L/lukas.jpg',
      h1Text: 'Lukas Julius Wolf',
      h3Text: '2° Conselheiro Fiscal da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/LukasWolf329',
      mailLink: 'lukasjuliuswolf@gmail.com',
      linkedLink: 'https://br.linkedin.com/in/lukas-wolf-990404269'
    },
    {
      imageLink: 'https://i.postimg.cc/KvpZ54Dm/foto-dayana.jpg',
      h1Text: 'Dayana Aparecida Souza Rocha',
      h3Text: '3° Conselheira Fiscal da A.A.A.E.E CEFET - Leopoldina',
      gitLink: '',
      mailLink: 'dayaprochs@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/dayana-rocha-349864233'
    },
    {
      imageLink: 'https://i.ibb.co/X73VkFM/murilo.jpg',
      h1Text: 'Murilo Aguiar Ribeiro',
      h3Text: '1° Diretor de Esportes da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/muriloaguiarr',
      mailLink: 'muriloaguiarr21@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/murilo-aguiar-ribeiro-ba52612a9/'
    },
    {
      imageLink: 'https://i.ibb.co/51sxxDZ/belgo.jpg',
      h1Text: 'Vinicius Rodrigues Belgo',
      h3Text: '2° Diretor de Esportes da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/Belgo0102',
      mailLink: 'viniciusktacs@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/vinicius-belgo-8aa8ab311?trk=recent-searches'
    },
    {
      imageLink: 'https://i.ibb.co/LYHYvz2/isabelly.jpg',
      h1Text: 'Isabelly Araújo Temoteo',
      h3Text: '1° Diretora de E-Sports da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/IsabellyTemoteo',
      mailLink: 'isabellyatemoteo@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/isabelly-temoteo-010131230/'
    },
    {
      imageLink: 'https://i.ibb.co/GTxzgpv/gabriel.jpg',
      h1Text: 'Gabriel Ferreira de Oliveira',
      h3Text: '1° Diretor de Relações da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/bigolzin',
      mailLink: 'gabrielferreolive@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/gabriel-oliveira-8651a9269/'
    },
    {
      imageLink: 'https://i.ibb.co/RNFWt34/victor-hugo.jpg',
      h1Text: 'Victor Hugo Nogueira Lima',
      h3Text: '2° Diretor de Relações da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/vhnogueira9',
      mailLink: 'vhnogueira9@gmail.com',
      linkedLink: 'www.linkedin.com/in/victor-hugo-nogueira-lima-24a4372a6'
    },
    {
      imageLink: 'https://i.ibb.co/nzMyVJw/talo.png',
      h1Text: 'Ítalo Aurélio de Paula Vieira',
      h3Text: '3° Diretor de Fiscal da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/italoaurelio',
      mailLink: 'italoaurelio0@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/italoaurelio/'
    },
    {
      imageLink: 'https://i.ibb.co/QkSgt5z/mateus.jpg',
      h1Text: 'Mateus Pereira Fernandes',
      h3Text: '1° Diretor de Eventos da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/Mateus321',
      mailLink: 'mateuspereirafernandes@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/mateus-pereira-fernandes-9b7974208/'
    },
    {
      imageLink: 'https://i.postimg.cc/G2TYbZ3y/david.jpg',
      h1Text: 'Davdi Beckhan Marinho de Castro',
      h3Text: '2° Diretor de Eventos da A.A.A.E.E CEFET - Leopoldina',
      gitLink: '',
      mailLink: 'dbeckhancastro@gmail.com',
      linkedLink: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
    },
    {
      imageLink: 'https://i.postimg.cc/sDgjS5Sn/foto-guilherme.jpg',
      h1Text: 'Guilherme Almeida Alvarenga',
      h3Text: '3° Diretor de Eventos da A.A.A.E.E CEFET - Leopoldina',
      gitLink: '',
      mailLink: 'alvarengaguips3@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/guilherme-alvarenga-152373234/'
    },
    {
      imageLink: 'https://i.ibb.co/48PB0Tv/vinicius.jpg',
      h1Text: 'Vinícius Lima Fernandes',
      h3Text: '1° Diretor de Financeiro da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/viniciuslfernandes',
      mailLink: 'viniciuslima99@live.com',
      linkedLink: 'https://www.linkedin.com/in/vin%C3%ADcius-lima-fernandes-889318261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      imageLink: '',
      h1Text: 'Letícia Faria Pereira Prado',
      h3Text: '1° Diretora de Produtos da A.A.A.E.E CEFET - Leopoldina',
      gitLink: '',
      mailLink: 'Leticiaprado943@yahoo.com',
      linkedLink: 'https://www.linkedin.com/in/leticia-prado-373016286/'
    },
    {
      imageLink: '',
      h1Text: 'Sophia Coura Martins Ferreira',
      h3Text: '1° Diretora de Patrimônio da A.A.A.E.E CEFET - Leopoldina',
      gitLink: 'https://github.com/sophiacmf',
      mailLink: 'sophiacmf20@gmail.com',
      linkedLink: 'https://www.linkedin.com/in/sophia-coura-martins-ferreira-2160641a5/'
    }
  ];

  return (
    <section className={styles.content}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>GESTÃO 2023.2</h1>
        <img src={logo} alt="Pantera" className={styles.bg}/>
      </div>
      <div className={styles.baseInformacoes}>
        <pre className={styles.textoInformacoes}>
          Menção Honrosa
        </pre>
        <Divider className={styles.dividerPrincipal}/>
      </div>
      <div className={styles.boxPrincipal}>
        <FotoPrincipal/>
      </div>

      <div className={styles.baseInformacoes}>
        <pre className={styles.textoInformacoes}>
          Membros
        </pre>
        <Divider className={styles.dividerPrincipal}/>
      </div>
      
      <div className={styles.groundColor}/> 

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
    </section>
  );
}

export default Gestao2023_2;
