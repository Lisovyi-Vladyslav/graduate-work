
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
import { Text } from "shared/UI/Text/Text";

import PaginationPhones from "widgets/PaginationPhones/PaginationPhones";





export default function Phones() {
  const [searchParams, setsearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const getTasks = state => state.product;
  const filter = useSelector(getTasks);


    return (
    <>
    <Conteiner>
    <PaginationPhones></PaginationPhones>
    </Conteiner>
       
    </>
    );
  };