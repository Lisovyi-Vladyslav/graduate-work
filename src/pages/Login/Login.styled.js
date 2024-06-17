import { Buttons } from 'shared/UI/Button/Button.styled';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { Title } from 'shared/UI/Title/Title';
import styled, {css} from 'styled-components'

export const  ConteinerForm = styled(Conteiner)`
  display: flex;
 
 flex-direction: column;
 justify-content: flex-start;
 align-items: flex-start;


 width: 400px;

 & > *:last-child {
    margin-top: 20px; /* Зовнішній відступ для останньої дитини */
  }

`;

export const StyledButton = styled(Buttons)`
  width: 250px;
  height: 40px;
  border: 1px solid ${props => props.colors || props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.background || props.theme.colors.primary};

  &:hover{
    box-shadow: 0 3px 13px 0 rgba(23, 32, 49, 0.26);
  }

  ${props => props.active === 'true'  && css`
  background-color: ${props =>  props.theme.colors.hover_BG};
  color: ${props => props.theme.colors.green};
  border: 1px solid ${props => props.colors || props.theme.colors.secondary};
  `};
`;

export const StyledConteiner = styled(Conteiner)`
  display: flex;
  flex-direction: row;
  justify-content: center;


  margin: 0px;
  
  
`;

export const StyledLabel = styled.label`
margin-bottom: 15px;
  
  
`;

export const StyledDiv = styled.div`
display: flex;

justify-content: centre;
flex-direction: column;

margin-top: 20px;
`;

export const Styledinput = styled.input`
height: 40px;
padding: 15px;
font-size: 16px;
border-radius: 5px;

border: 2px solid  ${props => props.theme.colors.secondary}; /* Початковий колір контуру */

&:focus {
    border-color: #${props => props.theme.colors.primary}; /* Колір контуру при фокусі */
  }
`;
export const StyledForm = styled.form`
width: 400px;


display: flex;

justify-content: centre;
flex-direction: column;

& > *:last-child {
    margin-top: 20px; /* Зовнішній відступ для останньої дитини */
  }
`;

