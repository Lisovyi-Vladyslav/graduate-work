import { Title } from 'shared/UI/Title/Title';
import { Prise } from './PriseConteiner.styled';

export const PriseConteiner = ({priceRegular, priceDiscount}) => {
console.log('zxc')

    return (
    <Prise>
        <Title h2={true}>${priceRegular}</Title>
        <Title h2={true}>${priceDiscount}</Title>
    </Prise>
    );
  };