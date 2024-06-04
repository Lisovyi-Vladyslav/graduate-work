import { getProductDetails } from "app/redux/product/product.selectors";
import { fetchProductbyId } from "app/redux/product/product.thunk";
import { AboutPhone } from "entities/AboutPhone/AboutPhone";
import DetailsGallery from "entities/DetailsGallery/DetailsGallery";
import { TechSpecsPhone } from "entities/TechSpecsPhone/TechSpecsPhone";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "shared/UI/Button/Button";
import { Row, Col, Card } from 'antd';

import { Conteiner } from "shared/UI/Conteiner/Conteiner";
import { Title } from "shared/UI/Title/Title";
import { ButtonCapacity, ButtonColors, ButtonConteiner, CapacityList, ConteinerAvailable, ConteinerCapacity, ConteinerDetails, ConteinerFirst, List } from "./PhonesDetails.styled";
import { Text } from "shared/UI/Text/Text";
import ProductCarousel from "widgets/ProductCarousel/ProductCarousel";
import { PriseConteiner } from "entities/PriseConteiner/PriseConteiner";
import { TechnicalList } from "entities/TechnicalList/TechnicalList";
import { ButtonToCart } from "features/ButtonToCart/ButtonToCart";
import { ButtonToFavorite } from "features/ButtonToFavorite/ButtonToFavorite";





export default function PhonesDetails() {
    const { productId } = useParams();

    const dispatch = useDispatch();

   
    useEffect(() => {
        dispatch(fetchProductbyId([productId]))
      }, []);

    const productDetails = useSelector(getProductDetails);

const {
  name,
  images,
  description,
  camera,
  screen,
  resolution, 
  ram,
  zoom, 
  cell, 
  processor, 
  colorsAvailable, 
  capacityAvailable, 
  color,
  capacity,
  priceDiscount,
  priceRegular,
  _id,
} = productDetails[0];
console.log(productDetails[0])

const techSpecs = {
    screen,
    resolution,
    processor,
    ram,
    zoom,
    // cell,
    camera
  };

  const texhList = {
    screen,
    capacity,
    ram
}

    return (
    <>
    <ConteinerDetails>
    <Title>{name}</Title>
    <Row gutter={[64, 80]} justify="center">


  <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
  <DetailsGallery alt={name} srcImages={images}></DetailsGallery>
  </Col>

  <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
  <ConteinerAvailable>
    <Text smallText colors='#89939A'>Available colors</Text>
    <List>
    {colorsAvailable && colorsAvailable.map((colors) => (
      <li>
                      <ButtonColors key={colors} color={colors} active={color}></ButtonColors>
                      </li>
          ))}
    </List>
    
    <Text smallText colors='#89939A'>Select capacity</Text>
    <List>
    {capacityAvailable && capacityAvailable.map((capacityA) => (
          <li>
          <ButtonCapacity key={capacityA} active={capacity} capacity={capacityA}>{capacityA}</ButtonCapacity>
          </li>
          ))}
    </List>

    <PriseConteiner priceRegular={priceRegular} priceDiscount={priceDiscount}></PriseConteiner>
    <ButtonConteiner>       
        <ButtonToCart _id={_id}></ButtonToCart>
        <ButtonToFavorite _id={_id} icon='icon-Favour'></ButtonToFavorite>
    </ButtonConteiner>
  
    <TechnicalList texhList={texhList}></TechnicalList>
  
  </ConteinerAvailable>
    
  </Col>

  <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
  <AboutPhone description={description}></AboutPhone>
  </Col>

  <Col  xs={24} sm={24} md={12} lg={12} xl={12}>
  <TechSpecsPhone techSpecs={techSpecs}></TechSpecsPhone>
  </Col>

</Row>

<ProductCarousel title={'You may also like'}></ProductCarousel>

    
   

    
    

    {/* <PhonesСatalog />
    <PaginationPhones></PaginationPhones> */}
    </ConteinerDetails>
       
    </>
    );
  };