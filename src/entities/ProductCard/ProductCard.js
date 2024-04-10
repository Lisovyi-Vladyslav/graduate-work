

import { getProduct } from 'app/redux/product/product.selectors';
import { useSelector } from 'react-redux';
import { Img } from 'shared/UI/Img/Img';
import { Title } from 'shared/UI/Title/Title';
import { Text } from 'shared/UI/Text/Text';
import { ButtonConteiner, FirstConteiner, PriseConteiner, StyledConteiner, StyledItem } from './ProductCard.styled';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { ButtonToCart } from 'features/ButtonToCart/ButtonToCart';
import { ButtonToFavorite } from 'features/ButtonToFavorite/ButtonToFavorite';


export const ProductCard = ({details}) => {
    // console.log('------------------------')
    // console.log(details)
    // console.log('------------------------')

    const {screen, capacity, ram, name, images, priceRegular, priceDiscount, _id} = details;

    const product = useSelector(getProduct);

    return (
    <StyledConteiner>
        <FirstConteiner>

            <Img alt={name} src={images[0]} Card={true}></Img>
            <Text bodyText={true}>{name}</Text>

                <PriseConteiner>
                    <Title h2={true}>${priceRegular}</Title>
                    <Title h2={true}>${priceDiscount}</Title>
                </PriseConteiner>
            
        </FirstConteiner>

        <Conteiner>
<ul>
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
</ul>
        </Conteiner>
  <ButtonConteiner>       
    <ButtonToCart _id={_id}></ButtonToCart>
    <ButtonToFavorite _id={_id} icon='icon-Favour'></ButtonToFavorite>
  </ButtonConteiner>
    </StyledConteiner>
    );
  };