import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import type Resources from '~/@types/resources';
import Select from './Select';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/hooks';
import { setByLang, type lang } from '~/reducers/langSlice';
import { type User } from '~/reducers/userSlice';
import Navigation from './Navigation';

type NavKeys = keyof Resources['header']['navigation'];
// type LangsKeys = keyof Resources['header']['langs'];

interface IHeader {
  displayName: User['displayName'];
  language: lang;
}

function Header({ displayName, language }: IHeader) {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation('header', { useSuspense: true });
  const [selectValue, setSelectValue] = useState<IHeader['language']>(language);

  const navItems = t('navigation', { returnObjects: true });
  const langs = Object.entries(t('langs', { returnObjects: true }));

  useEffect(() => {
    dispatch(setByLang(selectValue));
  }, [selectValue]);

  useEffect(() => {
    i18n.changeLanguage(language);
    console.log(language);
  }, [language]);

  return (
    <header
      id='sticky-parallax-header'
      className='  fixed p-4 w-full flex items-center justify-between  bg-gray-200 max-md:p-1 h-[9vh] shadow-header '
    >
      <Link to='/' viewTransition>
        <img className='max-md:w-[30px] p-0.5' src='logo-48px.png' alt='logo' />
      </Link>
      <Select value={selectValue} dispatcher={setSelectValue} options={langs} />
      <Navigation items={navItems} displayName={displayName} />
    </header>
  );
}

export default Header;
