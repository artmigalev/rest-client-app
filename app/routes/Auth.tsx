import type { Route } from './+types/Auth';
import { Navigate, NavLink, Outlet, useLoaderData, useLocation, useOutletContext } from 'react-router';
import type Resources from '~/@types/resources';
import { useTranslation } from 'react-i18next';
import type { IndexContext } from './Index';
import { type ProtectedLayoutProps } from '~/components/ProtectedLayout';

export async function clientLoader(params: Route.ClientLoaderArgs): Promise<IAuth['dataLoader']> {
  const resData = await fetch('locales/en/auth.json');
  return await resData.json();
}

interface IAuth {
  dataLoader: {
    signInComponent: Record<keyof Resources['auth']['signInComponent'], string>;
    registerComponent: Record<keyof Resources['auth']['registerComponent'], string>;
    navigation: Record<keyof Resources['auth']['navigation'], string>;
    errors: Record<keyof Resources['auth']['errors'], string>;
  };
}

function Auth({ forbidAuth = true, redirectPath = '/' }: ProtectedLayoutProps) {
  const { lang, username } = useOutletContext<IndexContext>();
  const data = useLoaderData<IAuth['dataLoader']>();
  const { navigation, signInComponent, registerComponent } = data;
  const { t } = useTranslation('auth', { keyPrefix: 'navigation', useSuspense: true });
  const location = useLocation();

  const isAuth = Boolean(username);

  if (isAuth && forbidAuth) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  const ifActive = ({ isActive }) =>
    isActive?   'text-main capitalize' : ''
  return (
    <div className='flex-1 w-full h-[100%]   flex justify-evenly  items-center'>
      <div className='container w-[80%] max-w-[450px] flex flex-col gap-3 items-center  max-h-[650px] h-[400px] '>
        <div className=' font-bold  flex gap-[1rem] py-[1rem] '>
          {Object.keys(navigation).map((key) => (
            <NavLink key={key} style={{ textTransform: 'capitalize' }} className={ifActive} to={key} viewTransition>
              {t(key as keyof Resources['auth']['navigation'])}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
