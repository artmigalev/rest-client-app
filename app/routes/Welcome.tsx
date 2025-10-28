import React from 'react';
import { Link } from 'react-router';

function Welcome() {
  return (
    <div className='flex-1  w-full p-[5%]  flex flex-col content-center items-center '>
      <h2 className=''> welcome user!</h2>

      <div>
        <h1>RestClientApp</h1>
        <h3>- легкий и простой в использовании клиент для использования (и разработки) API.</h3>
      </div>
      <br />
      <br />
      <section className='section-about'>
        <h4>Это приложение включает в себя:</h4>
        <ul>
          <li>
            <span>
              Возможности авторизации и аутентификации, гарантирующие, что доступ к инструменту будет ограничен кругом
              авторизованных пользователей.
            </span>
          </li>
          <li>
            <span>
              Раздел истории, который перенаправит пользователя в определенный раздел для ранее выполненных запросов.
            </span>
          </li>
        </ul>
      </section>
      <br />

      <section className='structure'>
        <h4>Структура приложения:</h4>
        <ul>
          <li>
            <span>Главная страница</span>
          </li>
          <li>
            <Link to={'/sign-in'}>
              <span>Страницы Регистрации/аутентификации пользователя. </span>
            </Link>
          </li>
          <li>
            <Link to={'/rest-client'}>
              <span>RESTful-клиент, который включает в себя:</span>
            </Link>
            <ol>
              <li>
                <span>селектор метода</span>
              </li>
              <li>
                <span>ввод текста для URL конечной точки</span>
              </li>
              <li>
                <span>запрос редактора</span>
              </li>
              <li>
                <span>редактор заголовков</span>
              </li>
              <li>
                <span>раздел ответов</span>
              </li>
              <li>
                <span>сгенерированный раздел кода</span>
              </li>
            </ol>
          </li>
          <li>
            <Link to={'/variables'}>
              <span>Переменные</span>
            </Link>
          </li>
          <li>
            <Link to={'/history'}>
              <span>История</span>
            </Link>
          </li>
        </ul>
      </section>
      <br />

      <section className='description-technical'>
        <h5>При разработке этого приложения были осуществлены технические требования:</h5>
        <ul>
          <li>
            <span>Семантическая разметка</span>
          </li>
          <li>
            <span> Приложение работает в последней версии браузера Google Chrome</span>
          </li>
          <li>
            <span>Реализованы частные маршруты, страница 404 а также границы ошибки</span>
          </li>
          <li>
            <span>
              В разработке использован <b>React v19</b>
            </span>
          </li>
          <li>
            <span>
              <b>React Router 7 (режим фреймворка)</b>
            </span>
          </li>
          <li>
            <span>Используется Typescript</span>
          </li>
        </ul>
      </section>
      <br />
      <section className='description-design'>
        <ul>
          <li>
            <span>не более трех шрифтов на странице</span>
          </li>
          <li>
            <span>интерактивность элементов(наведения курсора на элементы)</span>
          </li>
          <li>
            <span>
              единство стилей всех страниц приложения (
              <b>
                одинаковые шрифты, стили кнопок, отступы, а также одинаковые элементы на всех страницах приложения имеют
                одинаковый внешний вид и расположение.
              </b>
              )
            </span>
          </li>
          <li>
            <span>не более трех шрифтов на странице</span>
          </li>
          <li>
            <span>не более трех шрифтов на странице</span>
          </li>
          <li>
            <span>не более трех шрифтов на странице</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Welcome;
