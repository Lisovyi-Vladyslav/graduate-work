import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { HeroButton, HeroConteiner, StyledImage } from "./HeroSlider.styled";
import { Icon } from "shared/UI/Icon/Icon";

import {bannerImage} from '../../app/image/decor/bannerImage'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <HeroButton
      className={className}
      onClick={onClick}
    >
    <Icon icon='icon-ArrowRight'/>
    </HeroButton>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <HeroButton
      className={className}
      onClick={onClick}
    >
    <Icon icon='icon-ArrowLeft'/>
    </HeroButton>
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: (dots) => <DotsList dots={dots} />
  };
  return (
    <HeroConteiner>
      <Slider {...settings}>
        
      {bannerImage.map((image) => (
                <StyledImage key={image.src} src={image.src} alt={image.alt} />
        ))}
        
      </Slider>
    </HeroConteiner>
  );
}

export default CustomArrows;
