import React, { useEffect } from 'react'
import { Flex, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductDetails } from 'app/redux/product/product.selectors';
import { ProductCard } from 'widgets/ProductCard/ProductCard';
import { StyledList } from './Favour.styled';
import { Row, Col, Card } from 'antd';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { selectAuthFavorit } from 'app/redux/auth/auth.selector';
import { fetchProductbyId } from 'app/redux/product/product.thunk';
import { Title } from 'shared/UI/Title/Title';


const Favour = () => {
    const dispatch = useDispatch();

  const favorit = useSelector(selectAuthFavorit);

  useEffect(() => {
    dispatch(fetchProductbyId(favorit))
  }, []);

  const productDetails = useSelector(getProductDetails);

  return (
    <>
    
    <Conteiner>
    <Title h1>Favourites</Title>
        <Row gutter={[16, 40]} justify="center">
            {productDetails && productDetails.map((details) => (
                <Col key={details._id} xs={24} sm={12} md={8} lg={6} xl={6}>
                    <ProductCard  details={details} />
                </Col>
            ))}
        </Row>
    </Conteiner>
  );
    </>
);
};

export default Favour;
