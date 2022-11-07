import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaAirbnb, FaTripadvisor } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer--container">
      <ul className="social--list">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100087083040479">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/casasdemargarida">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+5561992172427">
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="https://airbnb.com.br/p/casasdemargarida">
            <FaAirbnb />
          </a>
        </li>
        <li>
          <a href="https://www.tripadvisor.com.br/VacationRentalReview-g488168-d24158166-Casas_de_Margarida_Casa_na_Quarta_Praia_Morro_de_Sao_Paulo_BA-Morro_de_Sao_Paulo_Ilha.html">
            <FaTripadvisor />
          </a>
        </li>
      </ul>
      <p>
        <span> Casas de Margarida</span>&copy; 2022{' '}
      </p>
    </footer>
  );
}

export default Footer;
