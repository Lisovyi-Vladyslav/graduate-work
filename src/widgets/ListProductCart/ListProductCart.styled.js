import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import styled, {css} from 'styled-components'


export const StyledConteiner = styled(Conteiner)`
display: flex;
justify-content: space-around;
flex-direction: row;
align-items: center;

width: 755px;
height: 128px;
padding: 40px;
border: 1px solid ${props => props.theme.colors.elements};
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;


