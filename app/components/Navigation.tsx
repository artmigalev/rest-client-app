import React, { useMemo } from 'react';
import List from './List';
import type Resources from '~/@types/resources';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase';
import { useAppDispatch } from '~/hooks';
import { setUser } from '~/reducers/userSlice';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';

interface INavigation {
  props: {
    items: Resources['header']['navigation'];
    displayName: string | null;
  };
  authItems: [key: keyof Resources['header']['navigation'], string][];
  logOut: () => void;
}

function Navigation({ items, displayName }: INavigation['props']) {
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout: INavigation['logOut'] = () => {
    signOut(auth);
    dispatch(setUser({ displayName: null, uid: null }));
    navigate('/', { viewTransition: true });
  };

  const authItems = useMemo(() => {
    if (displayName || user) {
      return Object.entries(items).filter(([key, _]) => key === 'logout');
    }
    return Object.entries(items).filter(([key, val]) => key !== 'logout');
  }, [displayName, user]);

  return (
    <nav>
      <List callbackFn={logout} styles={{ classList: 'justify-around' }} items={authItems} returnedTypeItems='links' />
    </nav>
  );
}

export default Navigation;
