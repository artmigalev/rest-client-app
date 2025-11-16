import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase';

const LogoutRoute = () => {
  useEffect(() => {
    signOut(auth);
  }, []);

  return <div>LogoutRoute</div>;
};

export default LogoutRoute;
