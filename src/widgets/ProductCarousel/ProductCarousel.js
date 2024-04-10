import { getProduct } from "app/redux/product/product.selectors";
import { ProductCard } from "entities/ProductCard/ProductCard";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { CarouselButton, CarouselButtonConteiner } from "./ProductCarousel.styled";
import { Icon } from "shared/UI/Icon/Icon";

function ProductCarousel() {

  const product = useSelector(getProduct);

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className="slider-container">
    <CarouselButtonConteiner>

        <CarouselButton className="button" onClick={next}>
          <Icon icon='icon-ArrowLeft'/>
        </CarouselButton>

        <CarouselButton className="button" onClick={previous}>
          <Icon icon='icon-ArrowRight'/>
        </CarouselButton>

      </CarouselButtonConteiner>
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {product && product.map((details) => (
  <ProductCard key={details._id} details={details} />
))}
      </Slider>
      
    </div>
  );
}

export default ProductCarousel;
