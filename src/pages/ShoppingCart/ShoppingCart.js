import React, { useEffect } from 'react'
import { Flex, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductDetails } from 'app/redux/product/product.selectors';
import { ProductCard } from 'widgets/ProductCard/ProductCard';
import { Row, Col, Card } from 'antd';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { selectAuthCart, selectAuthFavorit } from 'app/redux/auth/auth.selector';
import { fetchProductbyId } from 'app/redux/product/product.thunk';
import ListProductCart from 'widgets/ListProductCart/ListProductCart';


const ShoppingCart = () => {
    

  return (
    <>
    <Conteiner>
      <ListProductCart></ListProductCart>
    </Conteiner>
  );
    </>
);
};

export default ShoppingCart;
