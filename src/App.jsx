import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LinearProgress from '@mui/material/LinearProgress';

import Header from './components/base/NavBar';
import Container from './components/base/Container';
import PageTransition from './components/animations/PageTransition';

const Rodape = lazy(() => import('./components/base/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Contato = lazy(() => import('./pages/Contato'));
const Eventos = lazy(() => import('./pages/Eventos'));
const Lojinha = lazy(() => import('./pages/Lojinha'));
const Gestao2023_2 = lazy(() => import('./pages/Gestao2023_2'));
const Documentos = lazy(() => import('./pages/Documentos'));
const CampusAberto = lazy(() => import('./pages/CampusAberto'));
const Competicoes = lazy(() => import('./pages/Competicoes'));
const Galeria = lazy(() => import('./pages/Galeria'));
const Modalidades = lazy(() => import('./pages/Modalidades'));
const NossosParceiros = lazy(() => import('./pages/NossosParceiros'));
const SejaUmParceiro = lazy(() => import('./pages/SejaUmParceiro'));


function App() {
  const [count, setCount] = useState(0);

  return (
      <Router>
        <Header />
        <Container customClass="min_height">
          <PageTransition>
            <Suspense fallback={<LinearProgress />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Gestao2023_2" element={<Gestao2023_2 />} />
                <Route path="Documentos" element={<Documentos />} />
                <Route path="Galeria" element={<Galeria />} />
                <Route path="Competicoes" element={<Competicoes />} />
                <Route path="Modalidades" element={<Modalidades />} />
                <Route path="Eventos" element={<Eventos />} />
                <Route path="Lojinha" element={<Lojinha />} />
                <Route path="SejaUmParceiro" element={<SejaUmParceiro />} />
                <Route path="NossosParceiros" element={<NossosParceiros />} />
                <Route path="CampusAberto" element={<CampusAberto />} />
                <Route path="Contato" element={<Contato />} />
              </Routes>
            </Suspense>
          </PageTransition>
        </Container>
        <Rodape customClass="footer" />
      </Router>
  );
}

export default App;
