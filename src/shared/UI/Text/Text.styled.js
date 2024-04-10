import styled, {css} from 'styled-components'


  export const StyledText = styled.p`
text-align: left;

${props => props.uppercase  && css`
  font-family: ${({theme}) => theme.font.bold.fontFamily};
  font-size: ${props => props.size || props.theme.font.bold.fontSize.small};
  line-height: ${props => props.height || props.theme.font.bold.lineHeight.small};
  letter-spacing: ${props => props.spacing || props.theme.font.bold.letterSpacing.small};
  color: ${props => props.colors || props.theme.colors.primary};
  `};

  ${props => props.buttons  && css`
  font-family: ${({theme}) => theme.font.semiBold.fontFamily};
  font-size: ${props => props.size || props.theme.font.semiBold.fontSize.small};
  line-height: ${props => props.height || props.theme.font.semiBold.lineHeight.small};
  letter-spacing: ${props => props.spacing || props.theme.font.semiBold.letterSpacing.small};
  margin: 0;
  `};

  ${props => props.bodyText  && css`
  font-family: ${({theme}) => theme.font.regular.fontFamily};
  font-size: ${props => props.size || props.theme.font.regular.fontSize};
  line-height: ${props => props.height || props.theme.font.regular.lineHeight};
  letter-spacing: ${props => props.spacing || props.theme.font.regular.letterSpacing};
  color: ${props => props.colors || props.theme.colors.primary};
  margin-bottom: 8px;
  `};

  ${props => props.smallText   && css`
  font-family: ${({theme}) => theme.font.regular.fontFamily};
  font-size: ${props => props.size || props.theme.font.semiBold.fontSize.tiny};
  line-height: ${props => props.height || props.theme.font.semiBold.lineHeight.tiny};
  letter-spacing: ${props => props.spacing || props.theme.font.semiBold.letterSpacing.small};
  color: ${props => props.colors || props.theme.colors.primary};
  margin-bottom: 8px;
  `};
  `;
  