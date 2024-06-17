import { Button } from "shared/UI/Button/Button";
import { Conteiner } from "shared/UI/Conteiner/Conteiner";
import { Icon } from "shared/UI/Icon/Icon";
import { Link } from "shared/UI/Link/Link";
import { Logo } from "shared/UI/Logo/Logo";
import { StyledHeader, StyledListButton } from "./Header.styled";
import { Navigation } from "entities/Navigation/Navigation";
import { ButtonHeader } from "entities/ButtonHeader/ButtonHeader";
import { useDispatch } from 'react-redux';
import { fetchProduct } from "app/redux/product/product.thunk";
import { useEffect } from "react";
import { authLoginThunk } from "app/redux/auth/auth.thunk";


export const Header = ({ children, ...props }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProduct())
    dispatch(
      authLoginThunk({
        email: "nulla23.ante@vestibul.co.uk",
        password: "585898vl"
      }),
        );
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  }, []);



    return (
        <>
<Conteiner width='1440px' header={true} >
    <StyledHeader {...props}>
   
    <Navigation/>


<StyledListButton>
    <li>
      <ButtonHeader to="/profile" icon='icon-user'/>
    </li>
    <li>
      <ButtonHeader to="/user/favour" icon='icon-Favour'/>
    </li>
    <li>
      <ButtonHeader to="/user/cart" icon='icon-Shopp-bag'/>
    </li>
</StyledListButton>

     {children}
    </StyledHeader>
</Conteiner>
</>
    );
  };