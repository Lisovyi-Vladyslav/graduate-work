import styled, {css} from 'styled-components'
import {NavLink } from "react-router-dom";


export const StyledLink = styled(NavLink)`

font-family: ${({theme}) => theme.font.bold.fontFamily};
  font-size: ${props => props.size || props.theme.font.bold.fontSize.small};
  line-height: ${props => props.height || props.theme.font.bold.lineHeight.small};
  letter-spacing: ${props => props.spacing || props.theme.font.bold.letterSpacing.small};

  color: ${props => props.colors || props.theme.colors.secondary};


&.active {
    color: ${({theme}) => theme.colors.primary};
    border-bottom: 3px solid ${({theme}) => theme.colors.primary};
    padding-bottom: 25px;
    padding-top: 27px;
}


  ${'' /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  background-color: ${props => props.background || props.theme.colors.white};
  color: ${props => props.colors || props.theme.colors.primary};
  
  font-family: ${({theme}) => theme.font.semiBold.fontFamily};
  font-size: ${props => props.size || props.theme.font.semiBold.fontSize.small};
  line-height: ${props => props.height || props.theme.font.semiBold.lineHeight.small};
  letter-spacing: ${props => props.spacing || props.theme.font.semiBold.letterSpacing.small};
   */}

`;


