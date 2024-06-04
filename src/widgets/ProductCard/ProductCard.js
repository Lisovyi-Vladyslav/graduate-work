

import { getProduct } from 'app/redux/product/product.selectors';
import { useSelector } from 'react-redux';
import { Img } from 'shared/UI/Img/Img';
import { Title } from 'shared/UI/Title/Title';
import { Text } from 'shared/UI/Text/Text';
import { ButtonConteiner, FirstConteiner, StyledConteiner, StyledItem, StyledText } from './ProductCard.styled';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { ButtonToCart } from 'features/ButtonToCart/ButtonToCart';
import { ButtonToFavorite } from 'features/ButtonToFavorite/ButtonToFavorite';
import { Link } from 'shared/UI/Link/Link';
import { TechnicalList } from 'entities/TechnicalList/TechnicalList';
import { PriseConteiner } from 'entities/PriseConteiner/PriseConteiner';


export const ProductCard = ({details}) => {
    const {screen, capacity, ram, name, images, priceRegular, priceDiscount, _id} = details;

    const texhList = {
        screen,
        capacity,
        ram
    }
    

    return (
<StyledConteiner>

    <Link to={`/phones/${_id}`}>
        <FirstConteiner>
            <Img alt={name} src={images[0]} Card={true}></Img>
            <StyledText bodyText={true}>{name}</StyledText>
            <PriseConteiner priceRegular={priceRegular} priceDiscount={priceDiscount}></PriseConteiner>
        </FirstConteiner>
    </Link>

    <Conteiner>
        <TechnicalList texhList={texhList}></TechnicalList>
    </Conteiner>

    <ButtonConteiner>       
        <ButtonToCart _id={_id}></ButtonToCart>
        <ButtonToFavorite _id={_id} icon='icon-Favour'></ButtonToFavorite>
    </ButtonConteiner>

</StyledConteiner>
    
    );
  };







  {/* <ul>
    <StyledItem>
        <Text smallText={true} >Screen</Text>
        <Text smallText={true} colors='#89939A' >{screen}</Text>
    </StyledItem>
    <StyledItem>
        <Text smallText={true} >Capacity</Text>
        <Text smallText={true} colors='#89939A' >{capacity}</Text>
    </StyledItem>
    <StyledItem>
        <Text smallText={true} >RAM</Text>
        <Text smallText={true} colors='#89939A' >{ram}</Text>
    </StyledItem>
</ul> */}