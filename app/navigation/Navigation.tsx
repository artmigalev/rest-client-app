import { Link } from 'react-router';
import SignOut from '~/auth/sing-out';
export type NavProps = {
  userStatus: boolean;
  toggle: (value: boolean) => void;
};
const Navigation = ({ userStatus, toggle }: NavProps) => {
  return (
    <nav className=" flex  justify-around items-center  w-[100%]">
      <Link to={'/home'}>
        <img src="/postman2csharp.png" alt="logo" className="max-w-[50px]" />
      </Link>

      <select
        className=" bg-black cursor-pointer"
        name="language"
        id="pet-select"
      >
        <option className="cursor-pointer" value="english">
          English
        </option>
        <option className="cursor-pointer" value="russian">
          Russian
        </option>
      </select>
      {userStatus ? (
        <SignOut toggle={toggle} />
      ) : (
        <>
          <Link to={'/login'}>Sing in</Link>
          <Link to={'/register'}>Sing up</Link>
        </>
      )}
    </nav>
  );
};
export default Navigation;
