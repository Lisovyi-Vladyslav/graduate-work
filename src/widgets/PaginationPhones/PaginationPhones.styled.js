import styled from 'styled-components';
import { Pagination } from 'antd';

export const StyledPagination = styled(Pagination)`
margin-top: 40px;

display: flex;
 
 flex-direction: row;
 justify-content: center;
 align-items: center;



  .ant-pagination-item {
    ${'' /* ${props => props.background || props.theme.colors.white} */}
    width: 32px;
    height: 32px;

font-family: ${({theme}) => theme.font.semiBold.fontFamily};
  font-size: ${props => props.size || props.theme.font.semiBold.fontSize.small};
  line-height: ${props => props.height || props.theme.font.semiBold.lineHeight.small};
  letter-spacing: ${props => props.spacing || props.theme.font.semiBold.letterSpacing.small};
    
    border: 1px solid ${props => props.theme.colors.elements};

    background-color: ${props => props.theme.colors.white};

border-radius: 0%;
text-align: center;
    
  }

  .ant-pagination-item a {
  margin-top: 5px
} 

  .ant-pagination-item-active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.primary};
  }

  .ant-pagination-item-active a {
    color: ${props => props.theme.colors.white};
  }

  .ant-pagination-prev, .ant-pagination-next {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.icons};
    border-radius: 0%;
  }

  .ant-pagination-prev:hover, .ant-pagination-next:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    
  }

`;
