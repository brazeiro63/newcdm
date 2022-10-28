import React from 'react';
import Header from './Header.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Atracoes from './Pages/Atracoes.jsx';
import Comodidades from './Pages/Comodidades.jsx';
import Anfitrioes from './Pages/Anfitrioes.jsx';
import Contato from './Pages/Contato.jsx';
import Imoveis from './Pages/Imoveis.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/imoveis" element={<Imoveis />} />
        <Route path="/atracoes" element={<Atracoes />} />
        <Route path="/comodidades" element={<Comodidades />} />
        <Route path="/anfitrioes" element={<Anfitrioes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
