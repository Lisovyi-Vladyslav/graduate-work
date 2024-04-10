
import { StyledImg } from './Img.styled';

// import image from '../../../app/image/products/img/phones/apple-iphone-11/white/00.jpg';



export const Img = (props) => {
    const {alt, src } = props;
    const imageProp = require(`../../../app/image/products/${src}`);
    
    return (
    <StyledImg {...props}  alt={alt} src={imageProp}>
    </StyledImg>
    );
  };