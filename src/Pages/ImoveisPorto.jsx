import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
// import '../style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image01 from '../assets/images/imoveis/imovelPortoAtlantis/imovelPortoAtlantis01.jpg';
import Image02 from '../assets/images/imoveis/imovelPortoBelga/imovelPortoBelga01.jpg';
import Image03 from '../assets/images/imoveis/imovelPortoBelga/imovelPortoBelga02.jpg';
import Image04 from '../assets/images/imoveis/imovelPortoBelga/imovelPortoBelga03.jpg';
import Image05 from '../assets/images/imoveis/imovelPortoBelga/imovelPortoBelga04.jpg';

const ImoveisPorto = () => {
  const meusItens = [Image01, Image02, Image03, Image04, Image05];

  return (
    <>
      <div className="pages--container">
        <div className="pages--text">
          <h1 className="pages--text--title">Imóveis Porto de Galinhas</h1>
          <p className="pages--text--body">
            Casas de Margarida oferece imóveis nas melhores praias do nordeste do Brasil.
            <br />
            <Link to="/imoveismorro">
              <strong>Morro de São Paulo</strong>
            </Link>
            - Cairú(BA) - casa de 110 m<sup>2</sup>&nbsp; na Quarta Praia, muito aconchegante e
            cercada de verde. Acomoda até 8 pessoas.
            <br />
            <Link to="/imoveismuro">
              <strong>Muro Alto</strong>
            </Link>
            - Ipojuca(PE) - flat confortável para até 4 pessoas. Dentro de um condomínio com toda
            estrutura de lazer
            <br />
            <Link to="/imoveismaceio">
              <strong>Pajuçara</strong>
            </Link>
            - Maceió(AL) - apto duplex para até 6 pessoas. Excelente localização, em frente as
            piscinas de Pajuçara, e próximo a tudo.
            <br />
            <strong>Porto de Galinhas</strong>- Ipojuca(PE) (Em br/eve) - apartamento de 105 m
            <sup>2</sup>&nbsp;- para até 8 pessoas. Pé na areia, na melhor localização de Porto de
            Galinhas.
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

export default ImoveisPorto;
