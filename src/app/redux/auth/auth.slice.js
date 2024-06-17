import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authInitState } from './auth.init-state';
import { authRegisterThunk, authLoginThunk, authGetInfoThunk, authLogOutThunk, authUpdateInfoThunk } from './auth.thunk';
import { handlePending, handleRejected } from 'shared/API/handleRequest/handleRequest';

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // console.log(action.payload)
  // console.log('------------------')
  // console.log(state)
  // console.log('------------------')
  state.token = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  reducers: {
    usersCartAddAction: (state, { payload }) => {
      const isDuplicate = state.user.cart.some((element) => element === payload);

      if (!isDuplicate) {
        state.user.cart.push({[payload] : 1});
      }},
    usersCartDeleteAction: (state, { payload }) => {

 
  const indexToRemove = state.user.cart.findIndex(item => {
    return Object.keys(item)[0] === payload; // Припускаємо, що payload - це ID продукту
  });

  if (indexToRemove !== -1) {
    state.user.cart.splice(indexToRemove, 1);
  }
},
usersCartChangeQuantityAction: (state, { payload }) => {
  

  state.user.cart.forEach(obj => {
    if (obj[payload[0]] !== undefined) {
      obj[payload[0]] = payload[1];
    }
  });

},

  usersFavoriteAddAction: (state, { payload }) => {
    const isDuplicate = state.user.favorites.some((element) => element === payload);

    if (!isDuplicate) {
      state.user.favorites.push(payload);
    }},
  usersFavoriteDeleteAction: (state, { payload }) => {
const indexToRemove = state.user.favorites.indexOf(payload);

if (indexToRemove !== -1) {
  state.user.favorites.splice(indexToRemove, 1);
}},


  },
  extraReducers: builder => {
    builder
    .addCase(authLoginThunk.pending, handlePending)
    .addCase(authLoginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
  //     console.log('-------------------------')
  // console.log(data.data)
  // console.log('-------------------------')
  //     // state.product.list = action.payload;
  //     // state.product.push(action.payload);
  //     console.log(action.payload)
    })
    .addCase(authLoginThunk.rejected, handleRejected)
    .addCase(authRegisterThunk.pending, handlePending)
    .addCase(authRegisterThunk.fulfilled, handleFulfilled)
    .addCase(authRegisterThunk.rejected, handleRejected)
    .addCase(authGetInfoThunk.pending, handlePending)
    .addCase(authGetInfoThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    })
    .addCase(authGetInfoThunk.rejected, handleRejected)
    .addCase(authLogOutThunk.pending, handlePending)
    .addCase(authLogOutThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = null;
    })
    .addCase(authLogOutThunk.rejected, handleRejected)
    .addCase(authUpdateInfoThunk.pending, handlePending)
    .addCase(authUpdateInfoThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
      // state.product.list = action.payload;
      // state.product.push(action.payload);
      console.log(action.payload)
    })
    .addCase(authUpdateInfoThunk.rejected, handleRejected)
  },
});

export const { usersCartAddAction, usersCartDeleteAction, usersFavoriteAddAction, usersFavoriteDeleteAction, usersCartChangeQuantityAction } = authSlice.actions;

const persistConfig = {
  key: 'graduate-work',
  storage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
