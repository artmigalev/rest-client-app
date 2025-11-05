import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router';
import { auth } from '~/firebase';
import { type User } from '~/reducers/userSlice';
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
  const [user] = useAuthState(auth)
  const location = useLocation();

  const isAuth = Boolean(user?.displayName);

  if (requireAuth && !isAuth) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedLayout;
