import { Logo } from "shared/UI/Logo/Logo";
import { StyledNavigation } from "./Navigation.styled";
import { Link } from "shared/UI/Link/Link";


export const Navigation = ({ children, ...props }) => {
    return (
    <StyledNavigation {...props}>
          <Logo/>
          <Link to="/" end>Home</Link>
          <Link to="/phones">Phones</Link>
          <Link to="/profile">Profile</Link>
         {children}
    </StyledNavigation>
    );
  };