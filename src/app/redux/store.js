import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productReducer } from './product/product.slice';
import { authReducer } from './auth/auth.slice';



// const initState = {
//   isLoading: false,
//   statuse
// };

// const userReducer = combineReducers({
//   auth: authReducer,
//   user: usersReducer
//   // Add other user-related reducers here if needed
// });

export const store = configureStore({
  reducer: {
    // preloadedState: initState,
    // auth: authReducer,
    auth: authReducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store