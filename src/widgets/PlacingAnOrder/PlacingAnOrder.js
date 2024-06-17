import { Conteiner } from "shared/UI/Conteiner/Conteiner";
import { Text } from "shared/UI/Text/Text";
import { Title } from "shared/UI/Title/Title";
import { StyledButton, StyledConteiner } from "./PlacingAnOrder.styled";
import { useSelector } from "react-redux";
import { getProductDetails } from "app/redux/product/product.selectors";
import { useEffect, useState } from "react";
import { Button } from "antd";
import Modal from "features/Modal/Modal";
import ModalContent from "features/ModalContent/ModalContent";


export const PlacingAnOrder = ({cart}) => {

    const focus = cart;
    
    const [price, setprice] = useState(0);
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    

    const productDetails = useSelector(getProductDetails);



    const howPrice = (id, prise) => {
        // console.log(id)
        // console.log(prise)
        // const result = cart.find(obj => obj[id] !== undefined)
       
        // bfcghgj = bfcghgj + result[id]*prise
        // if (prevprice === price) {
        //    retu 
        // }
        // setprice(prevprice => prevprice + result[id]*prise);
       
       }

       useEffect(() => {
        
      }, [])


    //    productDetails.forEach((details) => howPrice(details._id, details.priceDiscount || details.priceRegular
    //     ));

    console.log('first', productDetails)

    return (
    <StyledConteiner>
        {/* <Title h1>sdgsfdhgjfhkgjlhk;jl</Title>
        <Text>asrstdfgjhkjlk;</Text> */}
        <StyledButton onClick={handleOpenModal}>Checkout</StyledButton>
        <Modal show={showModal} onClose={handleCloseModal}>
        <ModalContent></ModalContent>
      </Modal>
    </StyledConteiner>
    );
  };