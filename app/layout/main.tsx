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
  if (loading) return <Loader />;
  return (
    <main className=" text-[2rem] relative w-[95%] border m-auto p-[1rem]  h-[100%] flex-1 flex flex-col justify-center  border-t-0 border-b-0">
      {location.pathname === '/' ? (
        <Welcome username={name} isLogin={isLogin} />
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export default Main;
