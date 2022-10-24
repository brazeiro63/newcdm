import React from "react";
import "./style.css";

// import { Container } from './styles';

function Navbar() {
  return (
    <nav>
      <ul id="primary--navigation" className="primary--navigation flex">
        <li className="active">
          <a href="#imoveis">
            01
            <span aria-hidden="true" className="nav--option">
              Imóveis
            </span>
          </a>
        </li>
        <li>
          <a href="#comodidades">
            02
            <span aria-hidden="true" className="nav--option">
              Comodidades
            </span>
          </a>
        </li>
        <li>
          <a href="#atracoes">
            03
            <span aria-hidden="true" className="nav--option">
              Atrações{" "}
            </span>
          </a>
        </li>
        <li>
          <a href="#anfitrioes">
            04
            <span aria-hidden="true" className="nav--option">
              Anfitriões{" "}
            </span>
          </a>
        </li>
        <li>
          <a href="#contato">
            05
            <span aria-hidden="true" className="nav--option">
              Contato
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
