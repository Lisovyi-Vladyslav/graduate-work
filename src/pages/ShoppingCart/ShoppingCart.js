import { selectAuthCart } from 'app/redux/auth/auth.selector';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import ListProductCart from 'widgets/ListProductCart/ListProductCart';
import { PlacingAnOrder } from 'widgets/PlacingAnOrder/PlacingAnOrder';


const ShoppingCart = () => {
  const cart = useSelector(selectAuthCart);

  return (
    <>
    <Conteiner>
      <ListProductCart cart={cart}></ListProductCart>
      <PlacingAnOrder cart={cart}></PlacingAnOrder>
    </Conteiner>
  );
    </>
);
};

export default ShoppingCart;
