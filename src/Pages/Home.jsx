import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image01 from '../assets/images/carousel/carrossel01.jpg';
import Image02 from '../assets/images/carousel/carrossel02.jpg';
import Image03 from '../assets/images/carousel/carrossel03.jpg';
import Image04 from '../assets/images/carousel/carrossel04.jpg';

const Home = () => {
  const meusItens = [Image01, Image02, Image03, Image04];

  return (
    <>
      <div className="pages--container">
        <div className="pages--text">
          <h1 className="pages--text--title">Casas de Margarida</h1>
          <p className="pages--text--body">
            Casas de Margarida tem o melhor lugar para ficar, seja para descansar ou trabalhar. São
            imóveis bem localizados, nas melhores praias do Brasil, com todo o conforto e
            praticidade para que suas viagens sempre sejam momentos inesquecíveis.
          </p>
        </div>
        <div className="pages--image">
          <Carousel fade>
            {meusItens.map((item, index) => {
              return (
                <Carousel.Item interval={2000} key={index}>
                  <img className="d-block w-100" src={item} alt="Slide" />
                  <Carousel.Caption>
                    <h3>Caption</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
