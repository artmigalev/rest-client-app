import React, { Activity } from 'react';
import { Link } from 'react-router';
import Menu from './Menu';
import type { lang } from '~/reducers/langSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '~/firebase';

interface IFooter {
  lang: lang;
  username?: string | null;
}

function Footer({ lang }) {
  const [user] = useAuthState(auth);

  const menu = (
    <div>
      <Menu lang={lang} />
    </div>
  );

  return (
    <footer className='flex flex-col p-3 w-full fixed left-0 bottom-0 bg-background'>
      <Activity mode={user ? 'visible' : 'hidden'}>{menu}</Activity>

      <div className='flex flex-row justify-around items-center  '>
        <Link to={'https://rs.school/courses/reactjs'} viewTransition>
          <img className='w-10' src='rss-logo.svg' alt='rss-logo' />
        </Link>
        <span className='text-xl'>2025</span>
        <Link className='w-10' to={'http//: example.com'}>
          <img src='git.svg' alt='git' />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
