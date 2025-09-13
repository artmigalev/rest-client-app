import { NavLink, useLocation } from 'react-router';
import Login from './Login';
import Register from './Registered';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~/utils/hooks';
import { selectLng } from '~/state-management/langSlice';
import { useEffect } from 'react';

const Layout = () => {
  const location = useLocation();
  const lng = useAppSelector(selectLng);

  const { t, i18n } = useTranslation('header');
  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng]);
  return (
    <div className="z-99 w-[350px] h-[80%] m-auto  pt-1 auth text-[2rem] ">
      <div className="border-b text-center">
        <NavLink
          to={'/login'}
          className={({ isActive }) =>
            isActive ? 'text-blue-800' : 'text-white'
          }
        >
          {t('login')}{' '}
        </NavLink>
        /
        <NavLink
          to={'/register'}
          className={({ isActive }) =>
            isActive ? 'text-blue-800' : 'text-white'
          }
        >
          {' '}
          {t('register')}
        </NavLink>
      </div>
      {location.pathname === '/register' ? <Register /> : <Login />}
    </div>
  );
};
export default Layout;
