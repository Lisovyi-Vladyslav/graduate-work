import { Text } from "shared/UI/Text/Text";
import { StyledItem, StyledList } from "./TechnicalList.styled";


export const TechnicalList = ({texhList}) => {
    return (
        <StyledList>
        {Object.entries(texhList).map(([key, value]) => (
    <StyledItem key={key}>
      <Text smallText={true} colors='#89939A'>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
      <Text smallText={true}>{value}</Text>
    </StyledItem>
  ))}
    </StyledList>
    );
  };