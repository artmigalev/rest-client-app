import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAppSelector } from '~/hooks';
import { selectUser, type User } from '~/reducers/userSlice';
interface IProtectedRoute {
  props: {
    user: User;
    redirectPath?: string;
    children: React.ReactNode;
  };
}

export type ProtectedLayoutProps = {
  requireAuth?: boolean; // требовать авторизацию
  forbidAuth?: boolean; // запрещать авторизованных
  redirectPath?: string; // путь, куда редиректить (по умолчанию '/')
};

function ProtectedLayout({ requireAuth = true, redirectPath = '/sign-in' }: ProtectedLayoutProps) {
  const user = useAppSelector(selectUser);
  const location = useLocation();

  const isAuth = Boolean(user?.uid);

  if (requireAuth && !isAuth) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedLayout;
