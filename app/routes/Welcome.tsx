import React from 'react';
import { Link, Links, useOutlet, useOutletContext } from 'react-router';
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
  

  const { t, i18n } = useTranslation();

  return (
    <div className='flex-1  w-full p-[5%]  flex flex-col content-center items-center '>
      <h2 role='heading' className='text-3xl capitalize'>
        {!username ? 'welcome user!' : `Welcome back ${username}`}
      </h2>

      <div className='flex flex-col '>
        <h1 role='heading' className='text-main font-bold'>
          RestClientApp
        </h1>
        <h3 role='heading'>
          <b className='text-2xl text-main'>RestClientApp</b> - легкий и простой в использовании клиент для
          использования (и разработки) API.
        </h3>
      </div>
      <br />
      <section role='' className='section-about'>
        <h4 role='heading' className='font-bold'>
          Это приложение включает в себя:
        </h4>
        <ul role='list' className='list-disc pl-4.5'>
          <li role='listitem'>
            <span>
              Возможности авторизации и аутентификации, гарантирующие, что доступ к инструменту будет ограничен кругом
              авторизованных пользователей.
            </span>
          </li>
          <li role='listitem'>
            <span>
              Раздел истории, который перенаправит пользователя в определенный раздел для ранее выполненных запросов.
            </span>
          </li>
        </ul>
      </section>
      <br />

      <section className='structure'>
        <h4 role='heading' className='font-bold'>
          Структура приложения:
        </h4>
        <ul role='list' className='list-disc pl-4.5'>
          <li role='listitem'>
            <span>Главная страница</span>
          </li>
          <li role='listitem'>
            <Link to={'/sign-in'}>
              <span>Страницы Регистрации/аутентификации пользователя. </span>
            </Link>
          </li>
          <li role='listitem'>
            <Link to={'/rest-client'}>
              <span>RESTful-клиент, который включает в себя:</span>
            </Link>
            <ol>
              <li role='listitem'>
                <span>селектор метода</span>
              </li>
              <li role='listitem'>
                <span>ввод текста для URL конечной точки</span>
              </li>
              <li role='listitem'>
                <span>запрос редактора</span>
              </li>
              <li role='listitem'>
                <span>редактор заголовков</span>
              </li>
              <li role='listitem'>
                <span>раздел ответов</span>
              </li>
              <li role='listitem'>
                <span>сгенерированный раздел кода</span>
              </li>
            </ol>
          </li>
          <li role='listitem'>
            <Link to={'/variables'}>
              <span>Переменные</span>
            </Link>
          </li>
          <li role='listitem'>
            <Link to={'/history'}>
              <span>История</span>
            </Link>
          </li>
        </ul>
      </section>
      <br />

      <section className='description-technical'>
        <h5 role='heading' className='font-bold'>
          При разработке этого приложения были осуществлены технические требования:
        </h5>
        <ul role='list' className='list-disc pl-4.5'>
          <li role='listitem'>
            <span>Семантическая разметка</span>
          </li>
          <li role='listitem'>
            <span> Приложение работает в последней версии браузера Google Chrome</span>
          </li>
          <li role='listitem'>
            <span>Реализованы частные маршруты, страница 404 а также границы ошибки</span>
          </li>
          <li role='listitem'>
            <span>
              В разработке использован{' '}
              <Link to={'https://react.dev/'}>
                <b className='text-[#087EA4]'>React v19</b>
              </Link>
            </span>
          </li>
          <li role='listitem'>
            <span>
              <Link to={'https://reactrouter.com/'}>
                <b className='text-[#424242]'>React Router 7 (режим фреймворка)</b>
              </Link>
            </span>
          </li>
          <li role='listitem'>
            <span>
              Используется
              <Link to={'https://www.typescriptlang.org/'}>
                <b> Typescript</b>
              </Link>
            </span>
          </li>
        </ul>
      </section>
      <br />
      <section className=' description-design'>
        <ul role='list' className='list-disc pl-4.5'>
          <li role='listitem'>
            <span>не более трех шрифтов на странице</span>
          </li>
          <li role='listitem'>
            <span>интерактивность элементов(наведения курсора на элементы)</span>
          </li>
          <li role='listitem'>
            <span>
              единство стилей всех страниц приложения (
              <em>
                одинаковые шрифты, стили кнопок, отступы, а также одинаковые элементы на всех страницах приложения имеют
                одинаковый внешний вид и расположение.
              </em>
              )
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Welcome;
