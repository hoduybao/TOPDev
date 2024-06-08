import { useLoginState } from '@/hooks/useLoginState';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function PrivateRoute() {
  const location = useLocation();
  const navigate = useNavigate();

  // redux store
  const [isLoggedIn] = useLoginState();
  useEffect(() => {
    if (isLoggedIn) navigate(`${location.pathname}${location.search || ''}`);
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <Outlet />
  ) : isLoggedIn === false ? (
    <Navigate to='/login' state={{ from: location }} replace />
  ) : (
    <></>
  );
}
