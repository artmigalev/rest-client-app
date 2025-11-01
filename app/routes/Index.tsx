import React, { Suspense } from 'react';
import Header from '~/components/Header';
import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import { useAppSelector } from '~/hooks';
import { selectUser, type User } from '~/reducers/userSlice';
import { selectLang, type lang } from '~/reducers/langSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '~/firebase';
import { HydrateFallBack } from '~/root';

export type IndexContext = { username: User['displayName']; lang: lang };

export interface IIndex {
  user: User;
  lang: lang;
  context: IndexContext;
}

function Index() {
  // const user = useAppSelector(selectUser);
  const lang = useAppSelector(selectLang);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className='flex flex-col   w-full   '>
      <Header language={lang} displayName={user?.displayName || null} />
      <main className='w-full flex-[1_1_auto] flex flex-col items-center  overflow-y-auto mb-[calc(1em+40px)]!'>
        <Suspense fallback= {<HydrateFallBack/>}>
          <Outlet context={{ user, lang } satisfies IndexContext} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default Index;
