import { productInitState } from "./product.init-state";
import storage from 'redux-persist/lib/storage'
import { addProduct, fetchProduct, fetchProductDetails, fetchProductbyId } from "./product.thunk";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { handlePending, handleRejected } from "shared/API/handleRequest/handleRequest";



const productSlice = createSlice({
  name: "product",
  initialState: productInitState,
  reducers: {
    counterForCartMinus: (state, { payload }) => {
      console.log('Minus')
      console.log(state)
    },
    counterForCartPlus: (state, { payload }) => {
      console.log('Plus')
    },
    },

  extraReducers: builder => {
    builder
    .addCase(fetchProduct.pending, handlePending)
    .addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.product = action.payload;
      // state.product.list = action.payload;
      // state.product.push(action.payload);
      // console.log(action.payload)
    })
    .addCase(fetchProduct.rejected, handleRejected)
    .addCase(fetchProductDetails.pending, handlePending)
    .addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.details = action.payload;
      // console.log(action.payload)
    })
    .addCase(fetchProductDetails.rejected, handleRejected)
    .addCase(addProduct.pending, handlePending)
    .addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.product = action.payload;
      // state.product.list = action.payload;
      // state.product.push(action.payload);
      console.log(action.payload)
    })
    .addCase(addProduct.rejected, handleRejected)
    .addCase(fetchProductbyId.pending, handlePending)
    .addCase(fetchProductbyId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.productById = action.payload;
      // state.product.list = action.payload;
      // state.product.push(action.payload);
      // console.log(action.payload)
    })
    .addCase(fetchProductbyId.rejected, handleRejected);
  }
});

export const { counterForCartPlus, counterForCartMinus} = productSlice.actions;

const persistConfig = {
  key: 'graduate-work',
  storage,
};

export const productReducer = persistReducer(persistConfig, productSlice.reducer);