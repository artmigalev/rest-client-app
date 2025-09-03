import { NavLink, useLocation } from 'react-router';
import Login from './login';
import Register from './register';

const Layout = () => {
  const location = useLocation();

  return (
    <div className=" flex-col p-5 items-center text-[250%] border rounded-2xl flex justify-center  w-max   m-auto">
      <div className="border-b">
        <NavLink
          to={'/login'}
          className={({ isActive }) =>
            isActive ? 'text-blue-800' : 'text-white'
          }
        >
          Sing In
        </NavLink>{' '}
        /
        <NavLink
          to={'/register'}
          className={({ isActive }) =>
            isActive ? 'text-blue-800' : 'text-white'
          }
        >
          {' '}
          Sing Up
        </NavLink>
      </div>
      {location.pathname === '/register' ? <Register /> : <Login />}
    </div>
  );
};
export default Layout;
