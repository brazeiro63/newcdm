import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image01 from '../assets/images/Anfitriao.jpg';

const Anfitrioes = () => {
  const meusItens = [Image01];

  return (
    <>
      <div className="pages--container">
        <div className="pages--text">
          <h1 className="pages--text--title">Anfitriões</h1>
          <p className="pages--text--body">
            Somos Paulo Brazeiro e Maria Margarida e temos um prazer que é compartilhar o conforto e
            aconchego dos imóveis de Casas de Margarida com os nossos hóspedes.
            <br />
            <br />
            Adoramos cozinhar as nossas refeições e acreditamos que utensílios adequados fazem a
            diferença na preparação do alimento.
            <br />
            <br />
            Gostamos de aproveitar o lugar, a paisagem, as pessoas, mas queremos retornar para um
            lugar confortável, estirar em um sofá e assistir os nossos programas favoritos na TV.
            Assim, compartilhamos com vocês os nossos imóveis para que eles sejam a extensão de suas
            próprias casas.
            <br />
            <br />
            Apreciamos as pessoas por sua essência independentemente de origem, etnia, religião,
            ideologia ou qualquer escolha ou característica pessoal.
            <br />
            <br />
            Estaremos sempre felizes em recebê-los.
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

export default Anfitrioes;
