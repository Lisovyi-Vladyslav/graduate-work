import { Button } from 'shared/UI/Button/Button';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import styled, {css} from 'styled-components'

export const ButtonColors = styled(Button)`

  display: inline-block;
  border: 1px solid ${props => props.active === props.color ? props.theme.colors.primary : props.theme.colors.elements}; 
  border-radius:  50%;
  background-color: ${props => props.color || props.theme.colors.elements}; 
  cursor: pointer;
  text-align: center; 
  text-decoration: none;
  

  height: 32px;
  width: 32px;
  `;

  export const ButtonCapacity  = styled(Button)`

  border: 1px solid ${props => props.active === props.capacity ? props.theme.colors.primary : props.theme.colors.elements};
  background-color: ${props => props.active === props.capacity ? props.theme.colors.primary : props.theme.colors.white}; 
  color: ${props => props.active === props.capacity ? props.theme.colors.white : props.theme.colors.primary}; 
  cursor: pointer;
  text-decoration: none;
  

  min-height: 32px;
  min-width: 56px;
  `;


  export const ConteinerAvailable  = styled(Conteiner)`

  ${'' /* height: 125px; */}
  width: 320px;
  
  display: flex;
  flex-direction: column ;
  justify-content: flex-start;
  margin: 0px;
  `;

  export const List  = styled.ul`
  display: flex;
  flex-direction: row ;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  margin-bottom: 24px;
  ${'' /* margin-top: 24px; */}


  :not(:first-child){
    margin-left: 8px;
  }
  `;


  export const ConteinerDetails  = styled(Conteiner)`
  `;

  export const ConteinerFirst  = styled(Conteiner)`
  display: flex;
  flex-direction: row-reverse;
  `;

  export const ConteinerSecond  = styled(Conteiner)`
  `;
  
  export const ButtonConteiner = styled(Conteiner)`

  display: flex;
  flex-direction: row ;
  justify-content: flex-start;
  align-items: center; 

  margin: 0px 0px 10px 0px;
  
  
  > :last-child {
    margin-left: 8px;
  }
  `;

