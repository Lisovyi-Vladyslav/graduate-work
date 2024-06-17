import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from 'app/redux/product/product.selectors';
import { Row, Col, Card, Flex } from 'antd';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { fetchProductbyId } from 'app/redux/product/product.thunk';
import { Img } from 'shared/UI/Img/Img';
import { Text } from 'shared/UI/Text/Text';
import { StyledConteiner } from './ListProductCart.styled';
import { Title } from 'shared/UI/Title/Title';
import { ButtonDeleteProductCart } from 'features/ButtonDeleteProductCart/ButtonDeleteProductCart';
import { CounterForCart } from 'features/CounterForCart/CounterForCart';


const ListProductCart = ({cart}) => {
  
    const dispatch = useDispatch();

  const focus = cart;


 const idProducts = cart.map(id => Object.keys(id)[0]);

 const howQuantity = (id) => {

  const result = focus.find(obj => obj[id] !== undefined)
console.log(result[id])

  // if (Array.isArray(cart)) {
  //   // console.log(cart)
  //   const item = cart.find(item => item[id] !== undefined);
  // //  console.log(item)
  //   return item[id]
  // } else {
  //   console.error('cart is not an array');
  // }
  if (result[id] == null) {
    return 1
  }

  return  result[id];
 }
 
  useEffect(() => {
    dispatch(fetchProductbyId(idProducts))
  }, []);

  const productDetails = useSelector(getProductDetails);
  

  return (
    <>
    <Conteiner>
{cart = [] 
? <Title>You have no items in your cart</Title>
: <Title>Your cart</Title>}

    {productDetails && productDetails.map((details) => (
      
     <Flex align="center" vertical justify="center">
        <StyledConteiner>
            <ButtonDeleteProductCart _id={details._id}></ButtonDeleteProductCart>
            <Img src={details.images[0]} alt={details.name} ShoppingCart ></Img>
            <Text bodyText>{details.name}</Text>
            <CounterForCart _id={details._id} ></CounterForCart>
            <Title h2={true}>${details.priceDiscount * howQuantity(details._id)}</Title>
        </StyledConteiner>
        </Flex>
    
))}
    </Conteiner>
  );
    </>
);
};

{/* <Row gutter={[0, 16]} justify="center" direction="column">
{productDetails && productDetails.map((details) => (
    <Col key={details._id} xs={24} sm={12} md={8} lg={6} xl={6}>
        <StyledConteiner>
            <Img src={details.images[0]} alt={details.name}></Img>
            <Text>{details.name}</Text>
        </StyledConteiner>
    </Col>
))}
</Row> */}

export default ListProductCart;
