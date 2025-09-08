import { useLocalStorage } from '@uidotdev/usehooks';
import { Link } from 'react-router';
import Menu from '~/features/Menu';
import { selectUser } from '~/state-management/userSlice';
import { useAppSelector } from '~/utils/hooks';

type User = {
  username: string;
  password: string;
};

const Main = ({ isLogin }: { isLogin: boolean }) => {
  const [localState] = useLocalStorage<User>('user');
  const username = useAppSelector(selectUser) || localState.username;

  return (
    <main className=" text-[3.6rem] relative w-[95%] border m-auto  h-[100%] flex-1 flex flex-col justify-center  border-t-0 border-b-0">
      <h1 className="text-center w-[100%]">Welcome!</h1>

      <nav className="flex flex-row justify-center w-[100%] gap-[2rem] p-[1rem]">
        {isLogin ? (
          <>
            {username}
            <Menu />
          </>
        ) : (
          <>
            <Link to="/login">Sing In</Link>
            <Link to="/register">Sing Up</Link>
          </>
        )}
      </nav>
    </main>
  );
};

export default Main;
