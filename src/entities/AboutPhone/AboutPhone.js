import { Title } from "shared/UI/Title/Title";
import { AboutConteiner, Item, ItemTitle, StyledTitle } from "./AboutPhone.styled";
import { Conteiner } from "shared/UI/Conteiner/Conteiner";
import { Text } from "shared/UI/Text/Text";


export const AboutPhone = ({description}) => {

  return (
    <>
        <AboutConteiner>
            <StyledTitle h1>About</StyledTitle>
            <ul>
            {description && description.map(({text, title}) => (
                <Item>
                {/* <Conteiner> */}
                    <ItemTitle h2>{title}</ItemTitle>

                    {text && text.map((text) => (
                        <Text bodyText={true}>{text}</Text>
                ))}
                {/* </Conteiner> */}
                </Item>
            ))}
            </ul>
        </AboutConteiner>
    </>
  );
};

