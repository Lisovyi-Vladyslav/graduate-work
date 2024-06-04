import { Buttons } from 'shared/UI/Button/Button.styled';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { Text } from 'shared/UI/Text/Text';
import styled, {css} from 'styled-components'

export const StyledButton = styled(Buttons)`
  height: 32px;
  width: 32px;
  
  border: 1px solid ${props => props.colors || props.theme.colors.elements};
  
  
  ${'' /* width: 176px;
  height: 40px;
  
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.background || props.theme.colors.primary};

  &:hover{
    box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.26);
  }

  ${props => props.active === 'true'  && css`
  background-color: ${props =>  props.theme.colors.hover_BG};
  color: ${props => props.theme.colors.green};
  border: 1px solid ${props => props.colors || props.theme.colors.secondary};
  `}; */}
`;

export const StyledConteiner = styled(Conteiner)`
  display: flex;
  flex-direction: row;
  justify-content: center;


  margin: 0px;
  
  
`;

export const StyledText = styled(Text)`

  margin: auto 10px auto 10px ;
  
  
`;

