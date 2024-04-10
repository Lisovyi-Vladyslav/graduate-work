import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${props => props.height || props.theme.sizes.header.height};
  
  .nav {
    display: flex;
  }
`;

export const StyledListButton = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;

  :not(:first-child) {
    border-right: 1px solid ${props => props.borderColor || props.theme.colors.secondary};
}
`;