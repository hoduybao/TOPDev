import { selectIsLogin, setCredentials, setLogin } from '@/+core/redux/auth/authSlice';
import { getLocalAccessToken, getLocalRefreshToken } from '@/+core/services/local.service';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLoginState = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);

  const accessToken = getLocalAccessToken();
  const refreshToken = getLocalRefreshToken();
  useEffect(() => {
    if (accessToken && refreshToken) {
      dispatch(
        setCredentials({
          accessToken,
          refreshToken,
          isLoggin: true,
        }),
      );
    }
  }, []);
  return useMemo(() => [isLoggedIn], [isLoggedIn]);
};
