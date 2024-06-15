import { useLoginState } from '@/hooks/useLoginState';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function PrivateRoute({ checkRole }: { checkRole: string }) {
  const location = useLocation();
  const navigate = useNavigate();

  // redux store
  const [isLoggedIn] = useLoginState({ checkRole: checkRole });
  useEffect(() => {
    if (isLoggedIn) navigate(`${location.pathname}${location.search || ''}`);
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <Outlet />
  ) : isLoggedIn === false ? (
    <Navigate
      to={checkRole === 'admin' ? '/admin/login' : '/login'}
      state={{ from: location }}
      replace
    />
  ) : (
    <></>
  );
}
