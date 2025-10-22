import React from 'react';
import { Link } from 'react-router';
import type Resources from '~/@types/resources';
import Select from './Select';
import List from './List';
import type { clientLoader } from '~/routes/Index';
import { useTranslation } from 'react-i18next';

type NavKeys = keyof Resources['header']['navigation'];
// type LangsKeys = keyof Resources['header']['langs'];

interface IHeader {
  navigation: typeof clientLoader extends Promise<infer R> ? R : never;
  langs: typeof clientLoader extends Promise<infer R> ? R : never;
}

function Header(props: IHeader) {
  const UserIsLogin = false;

  const { navigation, langs } = props;
  const {t} =useTranslation('header', {keyPrefix:'navigation',useSuspense:true})

  let itemsNav = Object.entries(navigation).filter(([key]) => key !== 'sign-out' && t(key as keyof Resources['header']['navigation'])) as [NavKeys, string][];

  if (UserIsLogin) {
    itemsNav = Object.entries(navigation).filter(([key]) => key === 'sign-out') as [NavKeys, string][];
  }

  // useEffect(() => {
  //   if (!UserIsLogin) {
  //     itemsNav = Object.entries(navigation).filter(([key]) => key !== 'sign-out') as [NavKeys, string][];
  //   } else {
  //     itemsNav = Object.entries(navigation).filter(([key]) => key === 'sign-out') as [NavKeys, string][];
  //   }
  // }, [UserIsLogin]);

  return (
    <header
      id='sticky-parallax-header'
      className='  fixed p-4 w-full flex items-center justify-between  bg-gray-200 max-md:p-1 h-[9vh] shadow-header '
    >
      <Link to='/' viewTransition>
        <img className='max-md:w-[30px] p-0.5' src='logo-48px.png' alt='logo' />
      </Link>
      <Select props={Object.entries(langs)} />
      <nav className='w-2/5'>
        <List styles='justify-around' items={itemsNav} isLink={true} />
      </nav>
    </header>
  );
}

export default Header;
