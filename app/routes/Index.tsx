import React from 'react';
import Header from '~/components/Header';
import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import { useAppSelector } from '~/hooks';
import { selectUser, type User } from '~/reducers/userSlice';
import { selectLang, type lang } from '~/reducers/langSlice';

export type IndexContext = { user: User; lang: lang };

export interface IIndex {
  user: User;
  lang: lang;
  context: IndexContext;
}

function Index() {
  const user = useAppSelector(selectUser);
  const lang = useAppSelector(selectLang);

  return (
    <div className='flex flex-col  justify-between w-full relative  '>
      <Header language={lang} displayName={user.displayName} />
      <div className='w-full h-[84vh]  overflow-y-auto bg-amber-700'>
        <Outlet context={{ user, lang } satisfies IndexContext} />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
