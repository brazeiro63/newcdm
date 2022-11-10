import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const [menu, setMenu] = useState({
    isVisible: false,
    isExpanded: false,
  });

  function navToggle() {
    setMenu(prevMenu => {
      return {
        isVisible: !prevMenu.isVisible,
        isExpanded: !prevMenu.isExpanded,
      };
    });
  }

  return (
    <>
      <header className="primary--header flex">
        <div className="logo">
          <img src={logo} alt="logo" className="logo--img" />
        </div>
        <div className="flex">
          <button
            className="mobile--nav--toggle"
            aria-controls="primary--navigation"
            aria-expanded={menu.isExpanded}
            onClick={navToggle}
          >
            <span className="sr-only"></span>
          </button>
          <nav>
            <ul
              id="primary--navigation"
              data-visible={menu.isVisible}
              className="primary--navigation flex"
            >
              <li className="active">
                <Link to="/" onClick={navToggle}>
                  <span aria-hidden="true" className="nav--option">
                    00
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/imoveismorro" onClick={navToggle}>
                  <span aria-hidden="true" className="nav--option">
                    01
                  </span>
                  Imóveis
                </Link>
              </li>
              <li>
                <Link to="/comodidades" onClick={navToggle}>
                  <span aria-hidden="true" className="nav--option">
                    02
                  </span>
                  Comodidades
                </Link>
              </li>
              <li>
                <Link to="/atracoes" onClick={navToggle}>
                  <span aria-hidden="true" className="nav--option">
                    03
                  </span>
                  Atrações{' '}
                </Link>
              </li>
              <li>
                <Link to="/anfitrioes" onClick={navToggle}>
                  <span aria-hidden="true" className="nav--option">
                    04
                  </span>
                  Anfitriões{' '}
                </Link>
              </li>
              {/* <li>
                <Link to="/contato" onClick={navToggle}>
                  <span aria-hidden="true" className="nav--option">
                    05
                  </span>
                  Contato
                </Link>
              </li> */}
              <Outlet />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
