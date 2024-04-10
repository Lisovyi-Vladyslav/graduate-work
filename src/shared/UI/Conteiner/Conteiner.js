import {StyledConteiner} from './Conteiner.styled'

export const Conteiner = ({ children, ...props }) => {
    return (
    <StyledConteiner {...props}>
         {children}
    </StyledConteiner>
    );
  };