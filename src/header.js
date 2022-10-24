import React from 'react';
import Navbar from './navbar.js';
import logo from './assets/logo.png';

// import { Container } from './styles';

export default function Header() {
  return (
    <header className="primary--header flex">
      <div className="logo">
        <img src={logo} alt="logo" className="logo--img" />
      </div>
      <Navbar />
    </header>
  );
}
