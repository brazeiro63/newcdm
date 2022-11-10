import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image01 from '../assets/images/comodidades/comodidades01.jpg';
import Image02 from '../assets/images/comodidades/comodidades02.jpg';
import Image03 from '../assets/images/comodidades/comodidades03.jpg';
import Image04 from '../assets/images/comodidades/comodidades04.jpg';
import Image05 from '../assets/images/comodidades/comodidades05.jpg';
import Image06 from '../assets/images/comodidades/comodidades06.jpg';
import Image07 from '../assets/images/comodidades/comodidades07.jpg';
import Image09 from '../assets/images/comodidades/comodidades09.jpg';
import Image10 from '../assets/images/comodidades/comodidades10.jpg';
import Image11 from '../assets/images/comodidades/comodidades11.jpg';
import Image12 from '../assets/images/comodidades/comodidades12.jpg';
import Image13 from '../assets/images/comodidades/comodidades13.jpg';
import Image15 from '../assets/images/comodidades/comodidades15.jpg';
import Image16 from '../assets/images/comodidades/comodidades16.jpg';

const Comodidades = () => {
  const meusItens = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image09,
    Image10,
    Image11,
    Image12,
    Image13,
    Image15,
    Image16,
  ];

  return (
    <>
      <div className="pages--container">
        <div className="pages--text">
          <h1 className="pages--text--title">Comodidades</h1>
          <p className="pages--text--body">
            Os imóveis são equipados com eletrodomésticos e utilidades necessários para o preparo
            das refeições e conforto dos hóspedes.
            <br />
            <br />
            Todos os quartos são climatizados e conectados com internet para que você possa se
            divertir e eventualmente trabalhar, se for necessário.
            <br />
            <br />
            Camas confortáveis e lençóis de boa qualidade.
            <br />
            <br />
            Smart TV de telas grandes e WI-FI para você assistir aos seus programas favoritos ao
            retornar dos passeios.
          </p>
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

export default Comodidades;
