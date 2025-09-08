import { Link } from 'react-router';
import Menu from '../Menu/Menu';

const Welcome = ({
  username,
  isLogin,
}: {
  username: string;
  isLogin: boolean;
}) => {
  return (
    <>
      <h1 className="text-center w-[100%]">Welcome!</h1>

      <nav className="flex flex-row  justify-center w-[100%] gap-[2rem] p-[1rem]">
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
    </>
  );
};
export default Welcome;
