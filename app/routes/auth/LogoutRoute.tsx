import React from 'react';
import type { Route } from './+types/LogoutRoute';
import { destroySession, getSession } from '~/sessions.server';
import { redirect } from 'react-router';

const LogoutRoute = () => {
  return <div>LogoutRoute</div>;
};

export default LogoutRoute;
