import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col, Card } from 'antd';

import { fetchProduct } from 'app/redux/product/product.thunk';
import { getProduct } from 'app/redux/product/product.selectors';
import { ProductCard } from 'widgets/ProductCard/ProductCard';

export const PhonesСatalog = () => {
  const data = useSelector(getProduct);
  // console.log(data)

  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(data);

  const location = useLocation();
  const dispatch = useDispatch();
  

  const queryString = location.search.substring(1);

  useEffect(() => {
    // Оновлення продукту після отримання нових даних
    setProduct(data);
  }, [data]);

  useEffect(() => {
    // Вивід рядка запиту
  // console.log('Query String:', queryString);
  dispatch(fetchProduct(queryString))

  }, [searchParams]);


  return (
    <Row gutter={[16, 40]} justify="center">

      {product && product.map((details) => (
        <Col key={details._id} xs={24} sm={12} md={8} lg={6} xl={6}>
        <ProductCard key={details._id} details={details} />
        </Col>
))}

    </Row>
  );
};

