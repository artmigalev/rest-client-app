import { NavLink, useLocation } from 'react-router';
import Login from './signIn';
import Register from './signUp';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="z-99 w-[350px] h-[80%] m-auto  pt-1 auth text-[2rem] ">
      <div className="border-b text-center">
        <NavLink
          to={'/login'}
          className={({ isActive }) =>
            isActive ? 'text-blue-800' : 'text-white'
          }
        >
          Sing In
        </NavLink>
        /
        <NavLink
          to={'/register'}
          className={({ isActive }) =>
            isActive ? 'text-blue-800' : 'text-white'
          }
        >
          Sing Up
        </NavLink>
      </div>
      {location.pathname === '/register' ? <Register /> : <Login />}
    </div>
  );
};
export default Layout;
