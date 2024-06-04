import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, publicApi } from "shared/API/http/http";

export const fetchProduct  = createAsyncThunk(
  "product/fetchProduct",
  async (query, {rejectWithValue}) => {
    try {
     
        const {data} = await publicApi.get(`/product?${query}`);
        

      return data.product;
    } catch (e) {
      
      return rejectWithValue(e.message);
    }
  }
);

export const fetchProductbyId  = createAsyncThunk(
  "product/fetchProductbyId",
  async (parameters, {rejectWithValue}) => {
   
    try {
        const {data} = await publicApi.post("/product/byId", parameters);

        // console.log(data.product)

      return data.product;
    } catch (e) {
      
      return rejectWithValue(e.message);
    }
  }
);

export const fetchProductDetails  = createAsyncThunk(
  "product/fetchProductDetails",
  async (productId, {rejectWithValue}) => {
    try {
      const {data} = await privateApi.get(`/product/${productId}`);

      return data.product;
    } catch (e) {
      
      return rejectWithValue(e.message);
    }
  }
);

export const addProduct  = createAsyncThunk(
  "product/addProduct",
  async (parameters, thunkAPI) => {
    try {
      
      const response = await privateApi.post("/product", parameters);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProduct  = createAsyncThunk(
  "product/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      const response = await privateApi.delete(`/product/${productId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateProduct  = createAsyncThunk(
  "product/updateProduct",
  async ({id, parameters}, thunkAPI) => {
    try {
      const response = await privateApi.delete(`/product/${id}`, {parameters});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);