import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image01 from '../assets/images/morrosaopaulo-1.jpeg';
import Image02 from '../assets/images/morrosaopaulo-2.jpeg';
import Image03 from '../assets/images/morrosaopaulo-3.jpeg';
import Image04 from '../assets/images/morrosaopaulo-4.jpeg';
import Image05 from '../assets/images/morrosaopaulo-5.jpeg';
import Image06 from '../assets/images/morrosaopaulo-6.jpeg';
import Image07 from '../assets/images/morrosaopaulo-7.jpeg';
import Image08 from '../assets/images/morrosaopaulo-8.jpeg';
import Image09 from '../assets/images/morrosaopaulo-9.jpeg';

const Home = () => {
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
  ];

  return (
    <>
      <h1>Pagina de Home</h1>
      <div className="pages">
        <h4>React-Bootstrap Carousel Component</h4>
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
    </>
  );
};

export default Home;
