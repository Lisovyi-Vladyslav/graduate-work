import { Text } from 'shared/UI/Text/Text';
import { StyledButton, StyledConteiner, StyledText } from './CounterForCart.styled';
import { Icon } from 'shared/UI/Icon/Icon';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';



export const CounterForCart = (props) => {

 
//   const favorit = useSelector(selectAuthCart);
  

//   const hasFavorite  = favorit.some((element) => element === props._id);

//   const [active, setActive] = useState(hasFavorite.toString());
    
//     const dispatch = useDispatch();

//     const {colors} = useTheme();

//     const handleClick = () => {
    
//       if (active === 'false') {
//         setActive(true);
//         return
//       }

//         setActive(!active);
//       };

//       useEffect(() => {
// if (active.constructor === String) {
//   return
// }


// if (active === true) {
//   dispatch(
//     usersCartAddAction(props._id),
//     );
// }

// if (active === false) {
//   dispatch(
//     usersCartDeleteAction(props._id),
//     );
// }

        
//       }, [active]);

    return (
    // <StyledButtonToCart  {...props} onClick={handleClick} active={active.toString()}>
    //     <Text buttons={true} colors={colors.white}>
    //     Add to cart
    //     </Text>
    // </StyledButtonToCart>
    <>
    <StyledConteiner>

        <StyledButton>
            <Icon icon='icon-Minus'></Icon>
        </StyledButton>
    
        <StyledText>1</StyledText>
    
        <StyledButton>
            <Icon icon='icon-Plus'></Icon>
        </StyledButton>

    </StyledConteiner>
    </>
    );
  };