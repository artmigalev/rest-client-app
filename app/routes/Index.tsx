import React from 'react';
import Header from '~/components/Header';
import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import { useAppSelector } from '~/hooks';
import { selectUser } from '~/reducers/userSlice';
import { selectLang } from '~/reducers/langSlice';

function Index() {
  const user = useAppSelector(selectUser);
  const lang = useAppSelector(selectLang);

  return (
    <div className='w-full   flex-1 h-full flex  flex-col items-center content-center p-4  max-sm:p-0'>
      <Header language={lang} displayName={user.displayName} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Index;
