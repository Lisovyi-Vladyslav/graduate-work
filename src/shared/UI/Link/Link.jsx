import { StyledLink } from './Link.styled';


export const Link = ({ children, ...props }) => {
    return (
    <StyledLink {...props}>
         {children}
    </StyledLink>
    );
  };