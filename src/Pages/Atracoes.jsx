import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image01 from '../assets/images/atracoes/maceio/atracoesMaceio01.jpg';
import Image02 from '../assets/images/atracoes/maceio/atracoesMaceio02.jpg';
import Image03 from '../assets/images/atracoes/maceio/atracoesMaceio03.jpg';
import Image04 from '../assets/images/atracoes/maceio/atracoesMaceio04.jpg';
import Image05 from '../assets/images/atracoes/maceio/atracoesMaceio05.jpg';
import Image06 from '../assets/images/atracoes/maceio/atracoesMaceio06.jpg';
import Image07 from '../assets/images/atracoes/morro/atracoesMorro01.jpg';
import Image09 from '../assets/images/atracoes/morro/atracoesMorro02.jpg';
import Image10 from '../assets/images/atracoes/morro/atracoesMorro03.jpg';
import Image11 from '../assets/images/atracoes/morro/atracoesMorro04.jpg';
import Image12 from '../assets/images/atracoes/morro/atracoesMorro05.jpg';
import Image13 from '../assets/images/atracoes/morro/atracoesMorro06.jpg';
import Image15 from '../assets/images/atracoes/morro/atracoesMorro07.jpg';
import Image16 from '../assets/images/atracoes/morro/atracoesMorro08.jpg';
import Image17 from '../assets/images/atracoes/morro/atracoesMorro09.jpg';
import Image18 from '../assets/images/atracoes/morro/atracoesMorro10.jpg';
import Image19 from '../assets/images/atracoes/morro/atracoesMorro11.jpg';
import Image20 from '../assets/images/atracoes/morro/atracoesMorro12.jpg';
import Image21 from '../assets/images/atracoes/morro/atracoesMorro13.jpg';
import Image22 from '../assets/images/atracoes/morro/atracoesMorro14.jpg';
import Image23 from '../assets/images/atracoes/morro/atracoesMorro15.jpg';
import Image24 from '../assets/images/atracoes/morro/atracoesMorro16.jpg';
import Image25 from '../assets/images/atracoes/morro/atracoesMorro17.jpg';
import Image26 from '../assets/images/atracoes/porto/atracoesPorto01.jpg';
import Image27 from '../assets/images/atracoes/porto/atracoesPorto02.jpg';
import Image28 from '../assets/images/atracoes/porto/atracoesPorto03.jpg';
import Image29 from '../assets/images/atracoes/porto/atracoesPorto04.jpg';
import Image30 from '../assets/images/atracoes/porto/atracoesPorto05.jpg';
import Image31 from '../assets/images/atracoes/porto/atracoesPorto06.jpg';
import Image32 from '../assets/images/atracoes/porto/atracoesPorto07.jpg';
import Image33 from '../assets/images/atracoes/porto/atracoesPorto08.jpg';
import Image34 from '../assets/images/atracoes/porto/atracoesPorto09.jpg';
import Image35 from '../assets/images/atracoes/porto/atracoesPorto10.jpg';
import Image36 from '../assets/images/atracoes/porto/atracoesPorto11.jpg';
import Image37 from '../assets/images/atracoes/porto/atracoesPorto12.jpg';
import Image38 from '../assets/images/atracoes/porto/atracoesPorto13.jpg';
import Image39 from '../assets/images/atracoes/porto/atracoesPorto14.jpg';

const Atracoes = () => {
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
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
    Image27,
    Image28,
    Image29,
    Image30,
    Image31,
    Image32,
    Image33,
    Image34,
    Image35,
    Image36,
    Image37,
    Image38,
    Image39,
  ];

  return (
    <>
      <div className="pages--container">
        <div className="pages--text">
          <h1 className="pages--text--title">Atrações</h1>
          <p className="pages--text--body">
            As localizações dos nossos imóveis são as mais atrativas do Nordeste e são avaliadas nas
            melhores posições no ranking de praias e destinos turísticos de várias publicações.{' '}
            <br />
            <br />
            Não falta o que fazer: passeios, restaurantes, piscinas naturais, tirolesa, feiras de
            artesanato, locais históricos e muita diversão o tempo todo. Além, é claro, de toda a
            beleza do litoral nordestino.
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

export default Atracoes;
