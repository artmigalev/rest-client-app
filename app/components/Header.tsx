import React, { useEffect } from 'react';
import { Link } from 'react-router';
import type Resources from '~/@types/resources';
import Select from './Select';
import List from './List';
import type { clientLoader } from '~/routes/Index';

type NavKeys = keyof Resources['header']['navigation'];
type LangsKeys = keyof Resources['header']['langs'];

interface IHeader {
  navigation: typeof clientLoader extends Promise<infer R> ? R : never;
  langs: typeof clientLoader extends Promise<infer R> ? R : never;
}

function Header(props: IHeader) {
  const UserIsLogin = false;

  const { navigation, langs } = props;

  let itemsNav: [NavKeys, string][] = [];

  if (!UserIsLogin) {
    itemsNav = Object.entries(navigation).filter(([key]) => key !== 'sign-out') as [NavKeys, string][];
  } else {
    itemsNav = Object.entries(navigation).filter(([key]) => key === 'sign-out') as [NavKeys, string][];
  }

  useEffect(() => {
    if (!UserIsLogin) {
      itemsNav = Object.entries(navigation).filter(([key]) => key !== 'sign-out') as [NavKeys, string][];
    } else {
      itemsNav = Object.entries(navigation).filter(([key]) => key === 'sign-out') as [NavKeys, string][];
    }
  }, [UserIsLogin]);

  return (
    <header className='p-4 w-full flex items-center justify-between  bg-gray-200 max-md:p-1 shadow-header ' >
      <Link to=''>
        <img className='max-md:w-[30px] p-0.5' src='logo-48px.png' alt='logo' />
      </Link>
      <Select props={Object.entries(langs)} />
      <nav className='w-1/3'>
        <List items={itemsNav} isLink={true} />
      </nav>
    </header>
  );
}

export default Header;
