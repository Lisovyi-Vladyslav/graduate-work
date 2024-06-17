import { selectAuthData, selectAuthUser } from "app/redux/auth/auth.selector";
import { useDispatch, useSelector } from "react-redux";
import { Conteiner } from "shared/UI/Conteiner/Conteiner";
import { Text } from "shared/UI/Text/Text";
import { Title } from "shared/UI/Title/Title";


export const InformationAboutUser = (props) => {

    const user = useSelector(selectAuthUser);
    console.log(user)

    return (
      <>
      <Conteiner>
      <Title h1>Personal information</Title>
      <Title h2>Name</Title>
      <Text>{user.name}</Text>
      <Title h2>Email</Title>
      <Text>{user.email}</Text>
      </Conteiner>
      {/* {user && user.map((data) => (
            <p>{data}</p>
        ))} */}
       
      </>
      
      
    );
  };
  