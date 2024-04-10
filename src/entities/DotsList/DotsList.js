const { Styledlist, StyledItem } = require("./DotsList.styled");

export const DotsList = ({ dots }) => {
    return (
      <Styledlist>
        {dots.map((dot, index) => (
          <StyledItem key={index} dot index >
            {dot.props.children}
          </StyledItem>
        ))}
      </Styledlist>
    );
  };
  