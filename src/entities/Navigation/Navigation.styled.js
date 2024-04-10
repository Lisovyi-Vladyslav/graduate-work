import styled, {css} from 'styled-components'

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  

  :not(:first-child) {
  margin-left: 64px;
}
  `;


//   max-width: ${props => props.width || props.theme.sizes.container.width};
//   margin: 0 auto;
//   padding: 0 16px;

//   ${props => props.header  && css`
//   border-bottom: 1px solid ${props.theme.colors.secondary};
//   `};