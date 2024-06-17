
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Conteiner } from "shared/UI/Conteiner/Conteiner";
import { InformationAboutUser } from "entities/InformationAboutUser/InformationAboutUser";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import { useSelector } from "react-redux";
import { selectAuthUserName, selectAuthUserRole } from "app/redux/auth/auth.selector";
import { Title } from "shared/UI/Title/Title";
import { StyledConteiner } from "./Profile.styled";





export default function Profile() {
    const name = useSelector(selectAuthUserName);
    const role = useSelector(selectAuthUserRole);
    const product = useSelector(getProduct);
    // const user = useSelector(selectAuthUser);
   

    console.log(role)


    return (
    <>
    <Conteiner>

{role === 'admin' && 

<Conteiner>

<Title>Admin</Title>


</Conteiner>


}

    {name === 'Vlad2' && role === 'user'
    ? <StyledConteiner>
        <Register/>
        <Title>Or</Title>
        <Login></Login>
      </StyledConteiner>
    : <InformationAboutUser/>}
    
    </Conteiner>
       
    </>
    );
  };