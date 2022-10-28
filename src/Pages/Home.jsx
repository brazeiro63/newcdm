import React from 'react';
import { Carousel, Item } from 'react-elastic-carousel';

const Home = () => {
  return (
    <>
      <h1>Pagina de Home</h1>
      <p>Conteudo da página</p>
      <Carousel itemsToShow={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Carousel>
    </>
  );
};

export default Home;
