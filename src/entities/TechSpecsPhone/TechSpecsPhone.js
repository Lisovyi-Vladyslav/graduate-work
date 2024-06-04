import { Text } from "shared/UI/Text/Text";
import { Title } from "shared/UI/Title/Title";
import { StyledConteiner, StyledItem, StyledTitle } from "./TechSpecsPhone.styled";



export const TechSpecsPhone = ({techSpecs}) => {
    
  return (
    <>
    <StyledConteiner>
        <StyledTitle h1>Tech specs</StyledTitle>
        <ul>
        {Object.entries(techSpecs).map(([key, value]) => (
    <StyledItem key={key}>
      <Text smallText={true} colors='#89939A'>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
      <Text smallText={true}>{value}</Text>
    </StyledItem>
  ))}
        </ul>
</StyledConteiner>
    </>
  );
};

