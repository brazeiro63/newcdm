import React from 'react';
import './style.css';

function Navbar() {
  const [menu, setMenu] = React.useState({
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
            <a href="#imoveis">
              <span aria-hidden="true" className="nav--option">
                01
              </span>
              Imóveis
            </a>
          </li>
          <li>
            <a href="#comodidades">
              <span aria-hidden="true" className="nav--option">
                02
              </span>
              Comodidades
            </a>
          </li>
          <li>
            <a href="#atracoes">
              <span aria-hidden="true" className="nav--option">
                03
              </span>
              Atrações{' '}
            </a>
          </li>
          <li>
            <a href="#anfitrioes">
              <span aria-hidden="true" className="nav--option">
                04
              </span>
              Anfitriões{' '}
            </a>
          </li>
          <li>
            <a href="#contato">
              <span aria-hidden="true" className="nav--option">
                05
              </span>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
