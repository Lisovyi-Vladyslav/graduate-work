import { Buttons } from 'shared/UI/Button/Button.styled';
import styled, {css} from 'styled-components'
import sprite from '../../app/styles/icon.svg';
import { StyledConteiner } from 'shared/UI/Conteiner/Conteiner.styled';

export const CarouselButton = styled(Buttons)`

width: 32px;
height: 32px;
border: 1px solid ${props => props.colors || props.theme.colors.secondary};

&:before {
    opacity: 0;
    visibility: hidden;
    display: none;
     /* Margin between the icon and the text */
}
  
`;

export const  CarouselButtonConteiner = styled(StyledConteiner)`

display: flex;
 
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 28px;
  margin-right: 10px;
  
`;