import { Buttons } from 'shared/UI/Button/Button.styled';
import styled, {css} from 'styled-components'
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { Title } from 'shared/UI/Title/Title';

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

export const  CarouselButtonConteiner = styled(Conteiner)`
display: flex;
 
 flex-direction: row;

margin: 0px;

`;

export const  CarouselConteiner = styled(Conteiner)`

display: flex;
 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 28px;
  margin-right: 10px;
  

  
`;

export const  CarouselTitle = styled(Title)`
margin: 0px;
margin-left: 10px;
  
`;

export const  SliderConteiner = styled(Conteiner)`
  margin-bottom: 80px;
  
`;



