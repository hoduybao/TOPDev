import {
  ACCESS_TOKEN,
  EMAIL,
  IS_LOGIN,
  NAME,
  REFRESH_TOKEN,
  ROLE,
} from '../constants/authentication.constants';

export const getLocalAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getLocalRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const getIsLogin = () => localStorage.getItem(IS_LOGIN);
export const getEmail = () => localStorage.getItem(EMAIL);
export const getName = () => localStorage.getItem(NAME);
export const getRole = () => localStorage.getItem(ROLE);

export const setLocalAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const setLocalRefreshToken = (token: string) => {
  localStorage.setItem(REFRESH_TOKEN, token);
};

export const setIsLogin = (value: string) => {
  localStorage.setItem(IS_LOGIN, value);
};

export const setEmail = (value: string) => {
  localStorage.setItem(EMAIL, value);
};

export const setName = (value: string) => {
  localStorage.setItem(NAME, value);
};

export const setRole = (value: string) => {
  localStorage.setItem(ROLE, value);
};
