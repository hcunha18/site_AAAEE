import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'

// Importação dos Componentes Principais
import Header from './components/base/navbar/Cabecalho';
import Rodape from './components/base/Footer';
import Container from './components/base/Container';

// Importação das Páginas
import Home from './pages/Home';
import Contato from './pages/Contato';
import Eventos from './pages/Eventos';
import Lojinha from './pages/Lojinha';
import Gestao2023_2 from './pages/Gestao2023_2';
import Documentos from './pages/Documentos';
import CampusAberto from './pages/CampusAberto';
import Competicoes from './pages/Competicoes';
import Galeria from './pages/Galeria';
import Modalidades from './pages/Modalidades';
import NossosParceiros from './pages/NossosParceiros';
import SejaUmParceiro from './pages/SejaUmParceiro';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Header />

        <Container customClass="min_height">
          <Routes>

              <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="Gestao2023_2" element={<Gestao2023_2/>}/>
              <Route path="Documentos" element={<Documentos/>}/>
              <Route path="Galeria" element={<Galeria/>}/>

              <Route path="Competicoes" element={<Competicoes/>}/>
              <Route path="Modalidades" element={<Modalidades/>}/>

              <Route path="Eventos" element={<Eventos/>}/>

              <Route path="Lojinha" element={<Lojinha/>}/>

              <Route path="SejaUmParceiro" element={<SejaUmParceiro/>}/>
              <Route path="NossosParceiros" element={<NossosParceiros/>}/>

              <Route path="CampusAberto" element={<CampusAberto/>}/>

              <Route path="Contato" element={<Contato/>}/>
            </Route>  

          </Routes>

        </Container>

        <Rodape/>

      </Router>
    </>
  )
}

export default App
