import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaAirbnb, FaTripadvisor } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer--container">
      <ul className="social--list">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100087083040479">
            {' '}
            <FaFacebook />
          </a>
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaAirbnb />
        </li>
        <li>
          <FaTripadvisor />
        </li>
      </ul>
      <p>
        <span> Casas de Margarida</span>&copy; 2022{' '}
      </p>
    </footer>
  );
}

export default Footer;
