import styled, {css} from 'styled-components'


export const StyledTitle = styled.h1`

${props => props.h1 && css`
  font-family: ${({theme}) => theme.font.bold.fontFamily};
  font-size: ${props => props.size || props.theme.font.bold.fontSize.large};
  line-height: ${props => props.height || props.theme.font.bold.lineHeight.large};
  letter-spacing: ${props => props.spacing || props.theme.font.bold.letterSpacing.large};
  color: ${props => props.colors || props.theme.colors.primary};
  text-align: left;
  
      
  `};

  ${props => props.h2 && css`
  font-family: ${({theme}) => theme.font.bold.fontFamily};
  font-size: ${props => props.size || props.theme.font.bold.fontSize.medium};
  line-height: ${props => props.height || props.theme.font.bold.lineHeight.medium};
  letter-spacing: ${props => props.spacing || props.theme.font.bold.letterSpacing.medium};
  color: ${props => props.colors || props.theme.colors.primary};
  text-align: left;
  margin: 0;
  `}

  ${props => props.h3 && css`
  font-family: ${({theme}) => theme.font.semiBold.fontFamily};
  font-size: ${props => props.size || props.theme.font.semiBold.fontSize.medium};
  line-height: ${props => props.height || props.theme.font.semiBold.lineHeight.medium};
  letter-spacing: ${props => props.spacing || props.theme.font.semiBold.letterSpacing.medium};
  color: ${props => props.colors || props.theme.colors.primary};
  text-align: left;
      
  `}
`;

