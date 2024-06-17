import { Text } from 'shared/UI/Text/Text';
import { StyledButton, StyledConteiner, StyledText } from './CounterForCart.styled';
import { Icon } from 'shared/UI/Icon/Icon';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthCart } from 'app/redux/auth/auth.selector';
import { counterForCartMinus } from 'app/redux/product/product.slice';
import { useEffect, useState } from 'react';
import { usersCartChangeQuantityAction } from 'app/redux/auth/auth.slice';


export const CounterForCart = (props) => {

    const [count, setCount] = useState(1);

    const dispatch = useDispatch();

    const cart = useSelector(selectAuthCart);

        useEffect(() => {
            dispatch(
                usersCartChangeQuantityAction([props._id , count]),
                );

          }, [count]);
  

    return (

    <>
    <StyledConteiner>

        <StyledButton  onClick={() => setCount(count - 1)}>
            <Icon icon='icon-Minus'></Icon>
        </StyledButton>
    
        <StyledText>{count}</StyledText>
    
        <StyledButton  onClick={() => setCount(count + 1)}>
            <Icon icon='icon-Plus'></Icon>
        </StyledButton>

    </StyledConteiner>
    </>
    );
  };