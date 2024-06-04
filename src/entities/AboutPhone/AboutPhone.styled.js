import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { Title } from 'shared/UI/Title/Title';
import styled, {css} from 'styled-components'

export const AboutConteiner = styled(Conteiner)`
width: 560px;
height: 630px;

${'' /* display: flex;
justify-content: center; */}
`;

export const StyledTitle = styled(Title)`
margin: 0px 0px 25px 0px;
padding-bottom: 25px;
border-bottom: 1px solid ${props => props.color || props.theme.colors.elements};

    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;

export const ItemTitle = styled(Title)`
margin: 0px 0px 16px 0px;
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;

export const Item = styled.li`
margin: 0px 0px 16px 0px;
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;