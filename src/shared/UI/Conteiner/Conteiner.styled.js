import styled, {css} from 'styled-components'

export const StyledConteiner = styled.div`
  max-width: ${props => props.width || props.theme.sizes.container.width};
  margin: 0 auto;
  padding: 0;


  ${props => props.header  && css`
  border-bottom: 1px solid ${props.theme.colors.secondary};
  margin-bottom: 40px;
  `};
  `;


