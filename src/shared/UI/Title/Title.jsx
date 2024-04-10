import {StyledTitle} from './Title.styled'

export const Title = ({ children, ...props }) => {
    return (
    <StyledTitle {...props}>
         {children}
    </StyledTitle>
    );
  };