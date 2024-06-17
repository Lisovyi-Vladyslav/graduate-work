import { Text } from 'shared/UI/Text/Text';
import {StyledButtonToCart} from './ButtonToCart.styled'
import { useTheme } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { fetchProductbyId } from 'app/redux/product/product.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectAuthCart, selectAuthFavorit } from 'app/redux/auth/auth.selector';
import { usersCartAddAction, usersCartDeleteAction } from 'app/redux/auth/auth.slice';



export const ButtonToCart = (props) => {

 
  const cart = useSelector(selectAuthCart);
  
  const idProducts = cart.map(id => Object.keys(id)[0]);

  const hasFavorite  = idProducts.some((element) => element === props._id);
  
  const [active, setActive] = useState(hasFavorite.toString());
    
    const dispatch = useDispatch();

    const {colors} = useTheme();

    const handleClick = () => {
      if (active === 'false') {
        setActive(true);
        return
      }

        setActive(!active);
      };

useEffect(() => {

    if (active.constructor === String) {
      return
    }

    if (active === true) {
      
      dispatch(
        usersCartAddAction(props._id),
        );
    }

    if (active === false) {
      dispatch(
        usersCartDeleteAction(props._id),
        );
    }      
}, [active]);

    return (
    <StyledButtonToCart  {...props} onClick={handleClick} active={active.toString()}>
        <Text buttons={true} colors={colors.white}>
        Add to cart
        </Text>
    </StyledButtonToCart>
    );
  };