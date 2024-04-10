
export const selectAuthUser = (state) => state.auth.data.user;
// export const selectAuthToken = (state) => state.auth.data.token;
export const selectAuthData = (state) => state.auth.data;
export const selectAuthFavorit = (state) => state.auth.user.favorites;
export const selectAuthCart = (state) => state.auth.user.cart;