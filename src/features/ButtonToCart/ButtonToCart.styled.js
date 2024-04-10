import { Buttons } from 'shared/UI/Button/Button.styled';
import styled, {css} from 'styled-components'

export const StyledButtonToCart = styled(Buttons)`
  
  
  
  width: 176px;
  height: 40px;
  border: 1px solid ${props => props.colors || props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.background || props.theme.colors.primary};

  &:hover{
    box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.26);
  }

  ${props => props.active === 'true'  && css`
  background-color: ${props =>  props.theme.colors.hover_BG};
  color: ${props => props.theme.colors.green};
  border: 1px solid ${props => props.colors || props.theme.colors.secondary};
  `};
`;


