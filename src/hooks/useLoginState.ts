import { selectIsLogin, setCredentials } from '@/+core/redux/auth/authSlice';
import {
  getEmail,
  getLocalAccessToken,
  getLocalRefreshToken,
  getName,
} from '@/+core/services/local.service';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLoginState = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);

  const accessToken = getLocalAccessToken();
  const refreshToken = getLocalRefreshToken();
  const email = getEmail();
  const name = getName();

  useEffect(() => {
    if (accessToken && refreshToken) {
      dispatch(
        setCredentials({
          accessToken,
          refreshToken,
          isLoggin: true,
          email,
          name,
        }),
      );
    }
  }, []);
  return useMemo(() => [isLoggedIn], [isLoggedIn]);
};
