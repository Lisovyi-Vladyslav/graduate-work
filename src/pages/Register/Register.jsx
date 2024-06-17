// import { publicApi } from 'http/http';
import { authRegisterThunk } from 'app/redux/auth/auth.thunk';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Title } from 'shared/UI/Title/Title';
import { StyledButton, StyledConteiner, StyledDiv, StyledForm, StyledLabel, Styledinput } from './Register.styled';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';

export default function Register() {
const dispatch = useDispatch();
const navigate = useNavigate();
  
const {
    register,
    handleSubmit,
    reset,
    formState,
     } = useForm({
    defaultValues: {
    name: '',
    email: '',
    password: '',
    }
     });
  
  const onSubmit = async (data) => {
  try {
    dispatch(
      authRegisterThunk(data),
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
    name: '',
    email: '',
    password: '', });
    }
  }, [formState, reset]);
  return (
    <>
    <StyledConteiner>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title h2>Register</Title>
      <StyledDiv>
         <StyledLabel htmlFor="name">Name</StyledLabel>
      <Styledinput name="name" {...register("name")} type="text" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
<br />
       <StyledLabel htmlFor="email">Email</StyledLabel>
      <Styledinput name="email" {...register("email")} type="text" />
<br />
       <StyledLabel htmlFor="password">Password</StyledLabel>
          <Styledinput name="password" {...register("password")} type="text" />
      </StyledDiv>
      
      <StyledButton type='submit'>Register</StyledButton>
        </StyledForm>
      </StyledConteiner>
    </>
  )
}
