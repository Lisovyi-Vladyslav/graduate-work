import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import styled, {css} from 'styled-components'

export const Prise = styled(Conteiner)`

display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;

border-bottom: 1px solid #E2E6E9;

margin:  0px 0px 10px 0px;

:last-child {
  margin-left: 8px;
  text-decoration: line-through;
}
   
  
`;