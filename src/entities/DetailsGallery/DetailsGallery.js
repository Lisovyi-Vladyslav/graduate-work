import React, { Component } from "react";
import Slider from "react-slick";
import { Img } from "shared/UI/Img/Img";
import styled, {css} from 'styled-components'

import { CustomDots, PagingConteiner, PagingImg, SliderConteiner, SliderImg, StyledConteiner, StyledDots, StyledSlider } from "./DetailsGallery.styled";


function DetailsGallery({alt, srcImages}) {
console.log(Array.isArray(srcImages))


  const settings = {
    customPaging: function(i) {
      return (
       
        <PagingImg src={srcImages[i]} ></PagingImg>
      
            );
    },
    dots: true,
    dotsClass: "myDots",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <StyledConteiner>
    <StyledDots>
    <StyledSlider>
      <Slider {...settings}>
        {srcImages.map((src) => (
              <SliderConteiner key={src}>
              <SliderImg src={src} ></SliderImg>
              </SliderConteiner>
            ))}
      </Slider>
      </StyledSlider>
      </StyledDots>
    </StyledConteiner>
  );
}

export default DetailsGallery;
