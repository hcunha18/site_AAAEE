import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Animações
import LinearProgress from '@mui/material/LinearProgress';
import PageTransition from './components/animations/PageTransition';
import LoadingScreen from './components/animations/LoadingScreen';

// Imports principais
import Header from './components/base/NavBar';
import Container from './components/base/Container';

// Cookies
import CookieConsent from './components/structures/CookieConsent';
import { useCookies } from "react-cookie";

// Rotas com lazy
const Rodape = lazy(() => import('./components/base/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Contato = lazy(() => import('./pages/Contato'));
const Eventos = lazy(() => import('./pages/Eventos'));
const Lojinha = lazy(() => import('./pages/Lojinha'));
const Gestao2023_2 = lazy(() => import('./pages/Gestao2023_2'));
const TransparenciaAdministrativa = lazy(() => import('./pages/Documentos'));
const CampusAberto = lazy(() => import('./pages/CampusAberto'));
const Competicoes = lazy(() => import('./pages/Competicoes'));
const Galeria = lazy(() => import('./pages/Galeria'));
const Modalidades = lazy(() => import('./pages/Modalidades'));
const NossosParceiros = lazy(() => import('./pages/NossosParceiros'));

function App() {

  const [loading, setLoading] = useState(true);
  
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [showCookieConsent, setShowCookieConsent] = useState(!cookies.cookieConsent);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
    setShowCookieConsent(false);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Header />
      <Container customClass="min_height">
        <PageTransition>
          <Suspense fallback={<LinearProgress />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Gestao2023_2" element={<Gestao2023_2 />} />
              <Route path="TransparenciaAdministrativa" element={<TransparenciaAdministrativa />} />
              <Route path="Galeria" element={<Galeria />} />
              <Route path="Competicoes" element={<Competicoes />} />
              <Route path="Modalidades" element={<Modalidades />} />
              <Route path="Eventos" element={<Eventos />} />
              <Route path="Lojinha" element={<Lojinha />} />
              <Route path="NossosParceiros" element={<NossosParceiros />} />
              <Route path="CampusAberto" element={<CampusAberto />} />
              <Route path="Contato" element={<Contato />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </Container>
      <Rodape customClass="footer" />
      {showCookieConsent && <CookieConsent giveCookieConsent={giveCookieConsent} />}
    </Router>
  );
}

export default App;
