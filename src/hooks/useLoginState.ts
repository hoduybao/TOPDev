import { selectIsLogin, setLogin } from '@/+core/redux/auth/authSlice';
import { getLocalAccessToken } from '@/+core/services/local.service';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLoginState = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);

  const token = getLocalAccessToken();
  useEffect(() => {
    if (token) dispatch(setLogin(true));
  }, []);
  return useMemo(() => [isLoggedIn], [isLoggedIn]);
};
