
export const selectAuthUser = (state) => state.auth.user;
// export const selectAuthToken = (state) => state.auth.data.token;
export const selectAuthData = (state) => state.auth.data;
export const selectAuthFavorit = (state) => state.auth.user.favorites;
export const selectAuthCart = (state) => state.auth.user.cart;
export const selectAuthUserName = (state) => state.auth.user.name;
export const selectAuthUserRole = (state) => state.auth.user.role;