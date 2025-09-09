import { useLocalStorage } from '@uidotdev/usehooks';
import { useLocation } from 'react-router';
import Layout from '~/auth/layout';
import Welcome from '~/components/welcome';
import { selectUser } from '~/state-management/userSlice';
import { useAppSelector } from '~/utils/hooks';

type User = {
  username: string;
  password: string;
};

const Main = ({ isLogin }: { isLogin: boolean }) => {
  const [localState] = useLocalStorage<User>('user');
  const username = useAppSelector(selectUser) || localState?.username;
  const location = useLocation();
  const auth =
    location.pathname === '/login' || location.pathname === '/register';

  return (
    <main className=" text-[2rem] relative w-[95%] border m-auto  h-[100%] flex-1 flex flex-col justify-center  border-t-0 border-b-0">
      {auth ? <Layout /> : <Welcome username={username} isLogin={isLogin} />}
    </main>
  );
};

export default Main;
