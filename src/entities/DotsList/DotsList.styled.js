import styled, {css} from 'styled-components'

export const Styledlist = styled.ul`
  display: 'flex';
  justifyContent: 'center';
  
`;

export const StyledItem = styled.li`
  width: 20;
   height: 20;
    borderRadius: '50%';
     margin: '0 5px';
    background: ${props => props.index === props.dot.index ? '#000' : '#ccc'} ;
    
  
`;
