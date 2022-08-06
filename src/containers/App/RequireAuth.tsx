import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSlice } from './slice/_index';

export function RequireAuth({ children }: { children: JSX.Element }) {
  let isLoggedIn = localStorage.getItem('authToken');
  let location = useLocation();
  const dispatch = useDispatch();
  const actions = useAppSlice().actions;

  if (!isLoggedIn) {
    dispatch(actions.setPrevPath(location.pathname));
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}
