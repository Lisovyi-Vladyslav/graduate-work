
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Conteiner } from 'shared/UI/Conteiner/Conteiner';
import { ConteinerForm, StyledButton, StyledConteiner, StyledDiv, StyledForm, StyledLabel, Styledinput } from './Login.styled';
import { authLoginThunk } from 'app/redux/auth/auth.thunk';
import { Title } from 'shared/UI/Title/Title';
// import { authLoginThunk } from 'redux/auth/auth.thunk';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState,
     } = useForm({
    defaultValues: {
    email: '',
    password: '',
    }
  });
  const onSubmit = async  data => {
    console.log(data)
try {
  dispatch(
    authLoginThunk(data),
      );
    } catch {
    
    }
};

useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
    email: '',
    password: '', });
    }
  }, [formState, reset]);
  return (
    <>
    <StyledConteiner>
     <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title h2>Login</Title>

     
      <StyledDiv>
       <StyledLabel htmlFor="email">Email</StyledLabel>
      <Styledinput name="email" {...register("email")} type="text" />
      <br />
       <StyledLabel htmlFor="password">Password</StyledLabel>
          <Styledinput name="password" {...register("password")} type="text" />
          
          </StyledDiv>
     
      
      <StyledButton type='submit'>Login</StyledButton>
      </StyledForm>
      </StyledConteiner>
    </>
  )
}
