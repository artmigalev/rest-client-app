import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router';
import type { User } from '~/reducers/userSlice';
import type { IndexContext } from './Index';
import { useTranslation } from 'react-i18next';
interface IWelcome {
  props: {
    username: User['displayName'];
  };
}

function Welcome() {
  const { username, lang } = useOutletContext<IndexContext>();

  const { t, i18n } = useTranslation('welcome');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className='w-full welcome p-4 h-full overflow-y-auto '>
      <h2 role='heading' className='text-3xl capitalize'>
        {!username ? t('greeting') : `Welcome back ${username}`}
      </h2>

      <div className='flex flex-col '>
        <h1 role='heading' className='text-main font-bold'>
          RestClientApp
        </h1>
        <h3 role='heading'>
          <b className='text-2xl text-main'>RestClientApp</b>
          {t('app-description')}
        </h3>
      </div>
      <br />
      <section role='' className='section-welcome'>
        <h4 role='heading' className='font-bold'>
          {t('about.title-section')}
        </h4>
        <ul role='list' className='list-disc pl-4.5'>
          {t('about', { returnObjects: true }).list.map((item: string) => (
            <li role='listitem'>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <br />

      <section className='section-welcome '>
        <h4 role='heading' className='font-bold'>
          {t('structure.title-section')}
        </h4>
        <ul role='list' className='list-disc pl-4.5'>
          {t('structure', { returnObjects: true }).list.map((item) => (
            <li role='listitem'>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <br />

      <section className='section-welcome '>
        <h5 role='heading' className='font-bold'>
          {t('technical-requirements.title-section')}{' '}
        </h5>
        <ul role='list' className='list-disc pl-4.5'>
          {t('technical-requirements', { returnObjects: true }).list.map((item) => (
            <li role='listitem'>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className='section-welcome -technical'>
        <h5 role='heading' className='font-bold bg-blend-color-burn text-main text-left w-full '>
          RestClientApp
        </h5>
        <ul role='list' className='list-disc pl-4.5'>
          {t('rest-full-structure', { returnObjects: true }).map((item) => (
            <li role='listitem'>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Welcome;
