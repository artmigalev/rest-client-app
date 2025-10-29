import React, { useEffect } from 'react';
import List from './List';
import type Resources from '~/@types/resources';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase';

interface INavigation {
  props: {
    items: Resources['header']['navigation'];
    displayName: string | null;
  };
  authItems: [key: keyof Resources['header']['navigation'], string][];
  logOut: () => void;
}

function Navigation({ items, displayName }: INavigation['props']) {
  let authItems = Object.entries(items).filter(([key, val]) => key !== 'sign-out');
  const logout: INavigation['logOut'] = () => {
    signOut(auth);
  };
  useEffect(() => {
    if (displayName) {
      authItems = Object.entries(items).filter(([key, _]) => key === 'sign-out');
    }
  }, [displayName]);

  return (
    <nav  >
      <List callbackFn={logout} styles='justify-around' items={authItems} isLink={true} />
    </nav>
  );
}

export default Navigation;
