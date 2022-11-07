import React from 'react';
import Header from './layout/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Atracoes from './Pages/Atracoes.jsx';
import Comodidades from './Pages/Comodidades.jsx';
import Anfitrioes from './Pages/Anfitrioes.jsx';
import Contato from './Pages/Contato.jsx';
import Imoveis from './Pages/Imoveis.jsx';
import Footer from './layout/Footer.jsx';
import Container from './layout/Container.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/atracoes" element={<Atracoes />} />
          <Route path="/comodidades" element={<Comodidades />} />
          <Route path="/anfitrioes" element={<Anfitrioes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
