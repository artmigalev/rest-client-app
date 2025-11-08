import React, { use, useEffect } from 'react';
import type { Route } from './+types/LogoutRoute';
import { redirect } from 'react-router';
import { sign } from 'crypto';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase';

const LogoutRoute = () => {
  console.log('logout');
  
  useEffect(() => {
    signOut(auth);
   }, [])

  return <div>LogoutRoute</div>;
};

export default LogoutRoute;
