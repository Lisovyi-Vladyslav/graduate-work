
import { useTheme } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { fetchProductbyId } from 'app/redux/product/product.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectAuthCart, selectAuthFavorit } from 'app/redux/auth/auth.selector';
import { usersCartAddAction, usersCartDeleteAction, usersFavoriteAddAction, usersFavoriteDeleteAction } from 'app/redux/auth/auth.slice';
import { StyledButtonToFavorite, StyledIconFavorite } from './ButtonToFavorite.styled';
import { Icon } from 'shared/UI/Icon/Icon';



export const ButtonToFavorite = (props) => {

 
  const favorit = useSelector(selectAuthFavorit);
  // console.log(favorit)
  // console.log(props._id)

  const hasFavorite  = favorit.some((element) => element === props._id);
  // console.log(hasFavorite.toString())

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
    usersFavoriteAddAction(props._id),
    );
}

if (active === false) {
  dispatch(
    usersFavoriteDeleteAction(props._id),
    );
}

        
      }, [active]);

    return (
    <StyledButtonToFavorite  {...props} onClick={handleClick} >
        <StyledIconFavorite active={active.toString()} icon='icon-Favour'></StyledIconFavorite>
    </StyledButtonToFavorite>
    );
  };