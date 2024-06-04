import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { Text } from 'shared/UI/Text/Text';
import styled, {css} from 'styled-components'


export const StyledConteiner = styled(Conteiner)`
width: 280px;
height: 450px;
padding: 24px;
border: 1px solid ${props => props.theme.colors.elements};
    ${'' /* fill: ${props => props.color || props.theme.colors.primary}; */}
  
`;


export const PriseConteiner = styled(Conteiner)`

display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;


margin: 0;


:last-child {
  margin-left: 8px;
  text-decoration: line-through;
}
   
  
`;

export const StyledItem = styled.li`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
   
  
`;

export const FirstConteiner = styled(Conteiner)`

display: flex;
flex-direction: column ;
justify-content: flex-start;
${'' /* align-items: center;  */}

:first-child {
  align-self: center;
}
`;

export const ButtonConteiner = styled(Conteiner)`

display: flex;
flex-direction: row ;
justify-content: center ;
align-items: center; 


> :last-child {
  margin-left: 8px;
}
`;

export const StyledText = styled(Text)`
white-space: nowrap;
  overflow: hidden; /* Обрізати текст, що не поміщається */
  text-overflow: ellipsis;
`;


