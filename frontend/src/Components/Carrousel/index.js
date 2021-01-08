import React from 'react';
import { CarouselContainer } from './styles';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";

import image from '../../Img/Data.png';
import image2 from '../../Img/Data@2x.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    
  ];


export default function CarouselComponent(){

    return (
        <CarouselContainer>

            <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={6500}>
                <Item><img src={image} alt="Invision"/></Item>
                <Item><img src={image2} alt="Invision"/></Item>
                <Item><img src={image} alt="Invision"/></Item>
            </Carousel>

            <p>Marcenas mattis egestas</p>
            <p>
                Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
            </p>
                
        </CarouselContainer>
      )
}