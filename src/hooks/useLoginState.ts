import { selectIsLogin, setCredentials } from '@/+core/redux/auth/authSlice';
import {
  getEmail,
  getLocalAccessToken,
  getLocalRefreshToken,
  getName,
  getRole,
} from '@/+core/services/local.service';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLoginState = ({ checkRole }: { checkRole?: string }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);

  const accessToken = getLocalAccessToken();
  const refreshToken = getLocalRefreshToken();
  const email = getEmail();
  const name = getName();
  const role = getRole();

  useEffect(() => {
    if (accessToken && refreshToken && (!checkRole || checkRole === role)) {
      dispatch(
        setCredentials({
          accessToken,
          refreshToken,
          isLoggin: true,
          email,
          name,
          role,
        }),
      );
    }
  }, []);
  return useMemo(
    () => [isLoggedIn && (!checkRole || checkRole === role)],
    [isLoggedIn, checkRole, role],
  );
};
