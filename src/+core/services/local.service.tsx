import { ACCESS_TOKEN, IS_LOGIN, REFRESH_TOKEN } from '../constants/authentication.constants';

export const getLocalAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getLocalRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const getIsLogin = () => localStorage.getItem(IS_LOGIN);
export const setLocalAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const setLocalRefreshToken = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN, token);
};

export const setIsLogin = (value: string) => {
  localStorage.setItem(IS_LOGIN, value);
};
