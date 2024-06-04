
import { useDispatch } from 'react-redux';
import { StyledButton, StyledIcon } from './ButtonDeleteProductCart.styled';
import { usersCartDeleteAction } from 'app/redux/auth/auth.slice';



export const ButtonDeleteProductCart = (props) => {


    const dispatch = useDispatch();

    const handleClick = () => {
        console.log(props._id)
        dispatch(
            usersCartDeleteAction(props._id),
            );
       
        };
  

    return (
    <StyledButton onClick={handleClick}>
       <StyledIcon icon='icon-Close'></StyledIcon>
    </StyledButton>
    );
  };