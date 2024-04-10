import { StyledLogo } from './Logo.styled';
import sprite from '../../../app/styles/icon.svg';
import { Link } from 'react-router-dom';

export const Logo = ({ children, ...props }) => {
    return (
     <Link to="/">
    <StyledLogo {...props}>
              <use href={sprite + "#icon-Logo"}></use>
         {children}
    </StyledLogo>
</Link>
    );
  };