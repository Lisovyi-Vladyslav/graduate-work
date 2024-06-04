import styled, {css} from 'styled-components'


export const StyledImg = styled.img`


${props => props.Card && css`
width: 160px;
height: 190px;

margin-bottom: 24px; 
  `};

  ${props => props.ShoppingCart && css`
max-width: 66px;
max-height: 66px;

${'' /* margin-bottom: 24px;  */}
  `};
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;




