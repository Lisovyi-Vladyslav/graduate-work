// import { publicApi } from 'http/http';
import { authRegisterThunk, authUpdateInfoThunk } from 'app/redux/auth/auth.thunk';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledDiv, StyledForm, StyledLabel, Styledinput } from './ModalContent.styled';
import { Button } from 'antd';

export default function ModalContent() {
const dispatch = useDispatch();
const navigate = useNavigate();
  
const {
    register,
    handleSubmit,
    reset,
    formState,
     } = useForm({
    defaultValues: {
        phone: '',
        email: '',
        name: '',
        surname: '',
        addressOfRsidence: '',
    }
     });
  
  const onSubmit = async (data) => {
  try {

    
    dispatch(
        authUpdateInfoThunk(data),
        );
    // await publicApi.post('users/signup', { password, email, name });
    // navigate('/login', { replace: true });
  } catch (error) {
    console.log(error);
  }
};

 
useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        phone: '',
        email: '',
        name: '',
        surname: '',
        addressOfRsidence: '', });
    }
  }, [formState, reset]);
  return (
    <>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Register Order</h2>
      <StyledDiv>
      <StyledLabel htmlFor="phone">Phone</StyledLabel>
          <Styledinput name="phone" {...register("phone")} type="text" />
<br />
       <StyledLabel htmlFor="email">Email</StyledLabel>
      <Styledinput name="email" {...register("email")} type="text" />
<br />
<StyledLabel htmlFor="name">Name</StyledLabel>
      <Styledinput name="name" {...register("name")} type="text" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
      <br />
       <StyledLabel htmlFor="surname">Surname</StyledLabel>
          <Styledinput name="surname" {...register("surname")} type="text" />
       
          <br />
       <StyledLabel htmlFor="addressOfRsidence">AddressOfRsidence</StyledLabel>
          <Styledinput name="addressOfRsidence" {...register("addressOfRsidence")} type="text" />
      </StyledDiv>
      
      <StyledButton type='submit'>Register</StyledButton>
        </StyledForm>
    </>
  )
}
