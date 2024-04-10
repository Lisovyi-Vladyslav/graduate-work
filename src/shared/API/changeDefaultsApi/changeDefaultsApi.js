import { privateApi } from "../http/http";

export const setAuthHeader = token => {
    privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
export const clearAuthHeader = () => {
    privateApi.defaults.headers.common.Authorization = '';
  };