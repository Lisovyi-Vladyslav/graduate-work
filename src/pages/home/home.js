
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Alert } from 'antd';
import { Carousel } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { fetchProduct } from "app/redux/product/product.thunk";

import { authLoginThunk } from "app/redux/auth/auth.thunk";
import { Logo } from "shared/UI/Logo/Logo";
import CustomSlides from "widgets/HeroSlider/HeroSlider";
import { Conteiner } from "shared/UI/Conteiner/Conteiner";
import { Img } from "shared/UI/Img/Img";
import { getProduct } from "app/redux/product/product.selectors";
import { ProductCard } from "entities/ProductCard/ProductCard";
import { ButtonToCart } from "features/ButtonToCart/ButtonToCart";
import { Buttons } from "shared/UI/Button/Button.styled";
import ProductCarousel from "widgets/ProductCarousel/ProductCarousel";





export default function Home() {
  const [searchParams, setsearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const getTasks = state => state.product;
  const filter = useSelector(getTasks);


  function onChange(a, b, c) {
    console.log(a, b, c);
  }
//   setsearchParams({
//     color: "spacegray",
//     capacity: "64GB",
//   })

//   const query = searchParams.toString()
//  console.log(query)

// authLoginThunk({
//   email: "nulla23.ante@vestibul.co.uk",
//   password: "585898vl"
// }),

const handleProduct = idx => {
  
  
    };

    const product = useSelector(getProduct);
    // console.log(product)



    return (
    <>
    <Conteiner>
    {/* <Buttons onClick={handleProduct}>sdfghjkl</Buttons> */}
    <ProductCarousel></ProductCarousel>
    <CustomSlides></CustomSlides>
        {/* <Logo></Logo> */}
        {/* <Carousel afterChange={onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel> */}
  {/* <ButtonToCart></ButtonToCart> */}
  
  {/* {product && product.map((details) => (
  <ProductCard key={details._id} details={details} />
))} */}



    </Conteiner>
       
    </>
    );
  };