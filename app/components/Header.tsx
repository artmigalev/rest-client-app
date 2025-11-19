import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import type Resources from '~/@types/resources';
import Select from './Select';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/hooks';
import { setByLang, type lang } from '~/reducers/langSlice';
import { type User } from '~/reducers/userSlice';
import Navigation from './Navigation';
import { useMediaQuery } from '@react-hook/media-query';
import BurgerMenu from './BurgerMenu';
import type { IIndex } from '~/routes/Index';

type NavKeys = keyof Resources['header']['navigation'];
// type LangsKeys = keyof Resources['header']['langs'];

export interface IHeader {
  displayName: User['displayName'];
  language: lang;
  burgerProps: IIndex['burgerProps'];
}

function Header({ displayName, language, burgerProps }: IHeader) {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation('header', { useSuspense: true });
  const [selectValue, setSelectValue] = useState<IHeader['language']>(language);
  const matches = useMediaQuery('screen and (max-width: 412px)');

  const navItems = t('navigation', { returnObjects: true });
  const langs = Object.entries(t('langs', { returnObjects: true }));

  useEffect(() => {
    dispatch(setByLang(selectValue));
  }, [selectValue]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <header className='w-full sticky top-0 flex flex-row justify-between items-center p-3 bg-background shadow-header h-auto  '>
      <Link to='/' viewTransition>
        <img className='max-md:w-[30px] p-0.5' src='logo-48px.png' alt='logo' />
      </Link>
      <Select value={selectValue} dispatcher={setSelectValue} options={langs} />

      {matches ? <BurgerMenu {...burgerProps} /> : <Navigation items={navItems} displayName={displayName} />}
    </header>
  );
}

export default Header;
