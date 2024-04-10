import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, setAuthHeader } from "shared/API/changeDefaultsApi/changeDefaultsApi";
import { privateApi, publicApi } from "shared/API/http/http";


export const authLoginThunk = createAsyncThunk('login', async ({email, password}) => {
  console.log('second')
  const {data} = await publicApi.post('/auth/login', {email, password});
  console.log('thirt')
  

 setAuthHeader(data.data.token)
  return data.data;
});

export const authRegisterThunk = createAsyncThunk('register', async (values) => {

  const { data } = await publicApi.post('/auth/register', values);

  return data.data;
});

export const authGetInfoThunk = createAsyncThunk('getInfo', async () => {
  const { data } = await privateApi.get('/user/current');
  return data;
});

export const authLogOutThunk = createAsyncThunk('logOut', async (token) => {
 
  setAuthHeader(token)
 
  await privateApi.post('/user/logout');

  clearAuthHeader();
  
});