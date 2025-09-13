import { type ContextType } from 'react';
import { Outlet, useLocation } from 'react-router';
import Loader from '~/components/Loader';
import Welcome from '~/components/welcome';

export type User = {
  username?: string;
  password: string;
  loading: boolean;
  email: string;
};

const Main = ({
  isLogin,
  name,
  loading,
}: {
  isLogin: boolean;
  name: User['username'];
  loading: boolean;
  }) => {
  
  const location = useLocation();
  // console.log(isLogin);

  if (loading) return <Loader />;
  return (
    <main className=" text-[2rem] relative h-[100%] flex-1 flex flex-col">
      {location.pathname === '/' ? (
        <Welcome username={name} isLogin={isLogin} />
      ) : (
        <Outlet context={{ isLogin } satisfies ContextType} />
      )}
    </main>
  );
};

export default Main;
