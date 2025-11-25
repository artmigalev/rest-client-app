import React, { useEffect } from 'react';
import type { lang } from '~/reducers/langSlice';
import List from './List';
import { useTranslation } from 'react-i18next';

interface IMenu {
  props: {
    lang: lang;
  };
}

function Menu({ lang }: IMenu['props']) {
  const { t, i18n } = useTranslation('menu');
  const menuItems = Object.entries(t('menu', { returnObjects: true }));

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <List
        items={menuItems}
        styles={{ classList: 'grid items-center justify-items-center grid-rows-1 grid-cols-3  p-3' }}
        returnedTypeItems='links'
      />
    </>
  );
}

export default Menu;
