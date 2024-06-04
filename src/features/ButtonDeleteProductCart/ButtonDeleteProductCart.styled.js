import { Buttons } from 'shared/UI/Button/Button.styled';
import { Icon } from 'shared/UI/Icon/Icon';
import styled, {css} from 'styled-components'

export const StyledButton = styled(Buttons)`
  
  width: 16px;
height: 16px;
  border: 0px solid;
  ${'' /* color: ${props => props.theme.colors.white}; */}
  background-color: ${props => props.background || props.theme.colors.white};

  &:hover{
    box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.26);
    border: 0px solid;
  }
  

  ${'' /* ${props => props.active === 'true'  && css`
  .svg {
    fill: ${props =>  props.theme.colors.red};
  }
 background-color: ${props =>  props.theme.colors.hover_BG};
  color: ${props => props.theme.colors.green};
  border: 1px solid ${props => props.colors || props.theme.colors.secondary};
  `}; */}
`;


export const StyledIcon = styled(Icon)`
fill: ${props => props.active === 'true' ? props.theme.colors.red : props.theme.colors.icons};

`