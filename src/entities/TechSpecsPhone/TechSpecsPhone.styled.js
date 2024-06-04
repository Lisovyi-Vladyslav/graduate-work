import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { Title } from 'shared/UI/Title/Title';
import styled, {css} from 'styled-components'


export const StyledItem = styled.li`
display: flex;
justify-content: space-between;
align-item: center;
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;

export const StyledConteiner = styled(Conteiner)`
width: 512px
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;

export const StyledTitle = styled(Title)`
margin: 0px 0px 25px 0px;
padding-bottom: 25px;
border-bottom: 1px solid ${props => props.color || props.theme.colors.elements};

    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;