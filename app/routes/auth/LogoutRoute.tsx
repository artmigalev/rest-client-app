import React from 'react';
import type { Route } from './+types/LogoutRoute';
import { destroySession, getSession } from '~/sessions.server';
import { redirect } from 'react-router';

export async function clientAction({ request }: Route.ClientActionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session)
    }
  })
}

const LogoutRoute = () => {
  return <div>LogoutRoute</div>;
};

export default LogoutRoute;
