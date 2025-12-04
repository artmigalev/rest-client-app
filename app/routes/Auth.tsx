import { Navigate, NavLink, Outlet, useLoaderData, useLocation, useOutletContext } from 'react-router';
import type Resources from '~/@types/resources';
import { useTranslation } from 'react-i18next';
import type { IndexContext } from './Index';
import { type ProtectedLayoutProps } from '~/components/ProtectedLayout';
import List from '~/components/List';
import { useEffect } from 'react';



interface IAuth {
  dataLoader: {
    signInComponent: Record<keyof Resources['auth']['signInComponent'], string>;
    registerComponent: Record<keyof Resources['auth']['registerComponent'], string>;
    navigation: Record<keyof Resources['auth']['navigation'], string>;
    errors: Record<keyof Resources['auth']['errors'], string>;
  };
}

function Auth({ forbidAuth = true, redirectPath = '/' }: ProtectedLayoutProps) {
  const {  lang,username } = useOutletContext<IndexContext>();

  const { t, i18n } = useTranslation('auth');


  const navigationLayout = t('navigation', {returnObjects:true})


  const location = useLocation();

  const isAuth = Boolean(username);

  if (isAuth && forbidAuth) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  const ifActive = ({ isActive }) => (isActive ? 'text-main capitalize' : '');
  useEffect(() => {
    if (lang) {
        i18n.changeLanguage(lang)
    }



  },[lang])

  return (
    <div className='flex-1 w-full h-[100%]   flex justify-evenly  items-center'>
      <div className='container w-[80%] max-w-[450px] flex flex-col gap-3 items-center  max-h-[650px] h-[400px] '>
        <div className=' font-bold  flex gap-[1rem] py-[1rem] '>


          {Object.keys(navigationLayout).map((key) => (
            <NavLink key={key} style={{ textTransform: 'capitalize' }} className={ifActive} to={key} viewTransition>
              {t(`navigation.${key}`)}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
