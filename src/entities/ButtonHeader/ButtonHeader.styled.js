import { Buttons } from 'shared/UI/Button/Button.styled';
import styled, {css} from 'styled-components'

  export const ButtonIcon = styled(Buttons)`
  
  width: 64px;
  height: 64px;
  ${'' /* border: 1px solid ${props => props.borderColor || props.theme.colors.secondary}; */}
  border-right: 0px;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 1px solid ${props => props.borderColor || props.theme.colors.secondary};
  margin-top: 16px;
  
  `;

//   max-width: ${props => props.width || props.theme.sizes.container.width};
//   margin: 0 auto;
//   padding: 0 16px;

//   ${props => props.header  && css`
//   border-bottom: 1px solid ${props.theme.colors.secondary};
//   `};