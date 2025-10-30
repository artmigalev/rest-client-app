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
      <List items={menuItems} styles='justify-around p-3' isLink={true} />
    </>
  );
}

export default Menu;
