import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
// import '../style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image01 from '../assets/images/imoveis/imovelMuro/imovelMuro01.jpg';
import Image02 from '../assets/images/imoveis/imovelMuro/imovelMuro02.jpg';
import Image03 from '../assets/images/imoveis/imovelMuro/imovelMuro03.jpg';
import Image04 from '../assets/images/imoveis/imovelMuro/imovelMuro04.jpg';
import Image05 from '../assets/images/imoveis/imovelMuro/imovelMuro05.jpg';
import Image06 from '../assets/images/imoveis/imovelMuro/imovelMuro06.jpg';
import Image07 from '../assets/images/imoveis/imovelMuro/imovelMuro07.jpg';
import Image08 from '../assets/images/imoveis/imovelMuro/imovelMuro08.jpg';
import Image09 from '../assets/images/imoveis/imovelMuro/imovelMuro09.jpg';
import Image10 from '../assets/images/imoveis/imovelMuro/imovelMuro10.jpg';
import Image11 from '../assets/images/imoveis/imovelMuro/imovelMuro11.jpg';
import Image12 from '../assets/images/imoveis/imovelMuro/imovelMuro12.jpg';
import Image13 from '../assets/images/imoveis/imovelMuro/imovelMuro13.jpg';
import Image14 from '../assets/images/imoveis/imovelMuro/imovelMuro14.jpg';
import Image15 from '../assets/images/imoveis/imovelMuro/imovelMuro15.jpg';
import Image16 from '../assets/images/imoveis/imovelMuro/imovelMuro16.jpg';
import Image17 from '../assets/images/imoveis/imovelMuro/imovelMuro17.jpg';
import Image18 from '../assets/images/imoveis/imovelMuro/imovelMuro18.jpg';
import Image19 from '../assets/images/imoveis/imovelMuro/imovelMuro19.jpg';
import Image20 from '../assets/images/imoveis/imovelMuro/imovelMuro20.jpg';
import Image21 from '../assets/images/imoveis/imovelMuro/imovelMuro21.jpg';
import Image22 from '../assets/images/imoveis/imovelMuro/imovelMuro22.jpg';

const ImoveisMuro = () => {
  const meusItens = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
    Image09,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
  ];

  return (
    <>
      <div className="pages--container">
        <div className="pages--text">
          <h1 className="pages--text--title">Imóvel Muro Alto</h1>
          <p className="pages--text--body">
            Casas de Margarida oferece imóveis nas melhores praias do nordeste do Brasil.
            <br />
            <Link to="/imoveismorro">
              <strong>Morro de São Paulo</strong>
            </Link>
            - Cairú(BA) - casa de 110 m<sup>2</sup>&nbsp; na Quarta Praia, muito aconchegante e
            cercada de verde. Acomoda até 8 pessoas.
            <br />
            <strong>Muro Alto</strong>
            - Ipojuca(PE) - flat confortável para até 4 pessoas. Dentro de um condomínio com toda
            estrutura de lazer
            <br />
            <Link to="/imoveismaceio">
              <strong>Pajuçara</strong>
            </Link>
            - Maceió(AL) - apto duplex para até 6 pessoas. Excelente localização, em frente as
            piscinas de Pajuçara, e próximo a tudo.
            <br />
            <Link to="/imoveisporto">
              <strong>Porto de Galinhas</strong>
            </Link>
            - Ipojuca(PE) (Em br/eve) - apartamento de 105 m<sup>2</sup>&nbsp;- para até 8 pessoas.
            Pé na areia, na melhor localização de Porto de Galinhas.
            <br />
          </p>
          <Outlet />
        </div>
        <div className="pages--image">
          <Carousel fade>
            {meusItens.map((item, index) => {
              return (
                <Carousel.Item interval={2000} key={index}>
                  <img className="d-block w-100" src={item} alt="Slide" />
                  {/* <Carousel.Caption>
                    <h3>Caption</h3>
                  </Carousel.Caption> */}
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ImoveisMuro;
