import React, { useEffect, useState } from 'react';
import Header from '~/components/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '~/components/Footer';
import { useAppSelector } from '~/hooks';
import { type User } from '~/reducers/userSlice';
import { selectLang, type lang } from '~/reducers/langSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '~/firebase';
import { HydrateFallBack } from '~/root';
import { useMediaQuery } from '@react-hook/media-query';
import Navigation from '~/components/Navigation';
import { useTranslation } from 'react-i18next';

export type IndexContext = {
  username: User['displayName'];
  lang: lang;
};

export interface IIndex {
  user: User;
  lang: lang;
  context: IndexContext;
  burgerProps: {
    status: boolean;
    dispatcher: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

function Index() {
  const lang = useAppSelector(selectLang);
  const [user, loading, error] = useAuthState(auth);
  const matches = useMediaQuery('screen and (max-width: 412px)');
  const [isOpen, setOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation('header', { useSuspense: true });
  const navItems = t('navigation', { returnObjects: true });
  const location = useLocation();

  useEffect(() => {
    console.log(isOpen);

    if (matches && isOpen) {
      Object.keys(navItems).includes(location.pathname.slice(1)) && setOpen(false); // if  location  includes key with navItems key burger-menu close
    }
  }, [location, matches]);

  if (loading) {
    return <HydrateFallBack />;
  }

  if (error) {
    console.log(error);
  }
  return (
    <div className='flex flex-col h-[100%] w-full'>
      <Header
        burgerProps={{ status: isOpen, dispatcher: setOpen }}
        language={lang}
        displayName={user?.displayName || null}
      />
      <main className='w-full grow flex-[1_1_auto] flex flex-col items-center  overflow-y-auto mb-[calc(1em+40px)]!'>
        {matches && isOpen === true ? (
          <Navigation items={navItems} classStyles='match-mobile' displayName={user?.displayName || null} />
        ) : (
          <Outlet
            context={
              {
                username: user?.displayName || null,
                lang,
              } satisfies IndexContext
            }
          />
        )}
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default Index;
