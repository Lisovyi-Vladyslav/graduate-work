import { Button } from 'shared/UI/Button/Button';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import styled, {css} from 'styled-components'


export const StyledIcon = styled.svg`
width: 16px;
height: 16px;
    width: 16px;
    height: 16px;
    fill: ${props => props.color || props.theme.colors.primary};
  
`;

export const StyledConteiner = styled(Conteiner)`
display: flex;
 
 flex-direction: column;
 justify-content: center;
 align-items: center;


width: 370px;
height: 205px;

border: 1px solid ${props => props.theme.colors.elements};
  
`;

export const StyledButton = styled(Button)`
width: 320px;
  height: 50px;
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




