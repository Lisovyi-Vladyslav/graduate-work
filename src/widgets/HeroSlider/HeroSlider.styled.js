import { Buttons } from 'shared/UI/Button/Button.styled';
import styled, {css} from 'styled-components'
import sprite from '../../app/styles/icon.svg';
import { StyledConteiner } from 'shared/UI/Conteiner/Conteiner.styled';

export const HeroButton = styled(Buttons)`

width: 32px;
height: 400px;
border: 1px solid ${props => props.colors || props.theme.colors.secondary};

&:before {
    opacity: 0;
    visibility: hidden;
    display: none;
     /* Margin between the icon and the text */
}
  
`;

export const HeroConteiner = styled(StyledConteiner)`


${'' /* display: flex;
 
  flex-direction: row;
  justify-content: center;
  align-items: left; */}
  
`;

export const StyledImage = styled.img`
  width: 1040px;
height: 400px;
padding: 0 20px;

  
`;

