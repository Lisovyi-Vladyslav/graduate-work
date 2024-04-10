import styled, {css} from 'styled-components'

export const Buttons = styled.button`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  background-color: ${props => props.background || props.theme.colors.white};
  color: ${props => props.colors || props.theme.colors.primary};
  
  font-family: ${({theme}) => theme.font.semiBold.fontFamily};
  font-size: ${props => props.size || props.theme.font.semiBold.fontSize.small};
  line-height: ${props => props.height || props.theme.font.semiBold.lineHeight.small};
  letter-spacing: ${props => props.spacing || props.theme.font.semiBold.letterSpacing.small};
  

  ${'' /* ${props => props.forColor  && css`
  font-family: ${({theme}) => theme.font.bold.fontFamily};
  font-size: ${props => props.size || props.theme.font.bold.fontSize.small};
  `};

  ${props => props.forHistory  && css`
  font-family: ${({theme}) => theme.font.bold.fontFamily};
  font-size: ${props => props.size || props.theme.font.bold.fontSize.small};
  `};

  ${props => props.forPagination  && css`
  width: 32px;
  height: 32px;
  border: 1px solid ${props => props.colors || props.theme.colors.secondary};

  ${props => props.Header  && css`
  width: 64px;
  height: 64px;
  
  `};


  `}; */}

  

   ${props => props.selected  && css`
  background-color: ${props => props.background || props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  `};

  ${props => props.disabled  && css`
  pointer-events:${(props)=>props.disabled?'none':null};
  
  `};

  &:hover{
    border: 1px solid ${props => props.colors || props.theme.colors.primary};
  }
 
  
`;


