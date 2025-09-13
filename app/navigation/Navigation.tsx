import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import SignOut from '~/auth/signOut';
export type NavProps = {
  isLogin: boolean;
};
const Navigation = ({ isLogin }: NavProps) => {
  const {t,i18n} = useTranslation('header');
  return (
    <nav className=" flex  justify-around items-center  w-[100%]">
      <Link to={'/'}>
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
      {isLogin ? (
        <SignOut />
      ) : (
        <>
          <Link to={'login'}>Sing in</Link>
          <Link to={'register'}>Sing up</Link>
        </>
      )}
    </nav>
  );
};
export default Navigation;
