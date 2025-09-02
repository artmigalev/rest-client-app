import { NavLink } from 'react-router';
import Login from './login';

const Layout = () => {
  return (
    <div className=" flex-col p-[5rem] items-center text-[250%] border rounded-2xl flex justify-center  w-[50%]   m-auto">
      <div className="border-b">
        <NavLink to={'/login'}>Sing In</NavLink> /
        <NavLink to={'/register'}> Sing Up</NavLink>
      </div>
      <Login />
    </div>
  );
};
export default Layout;
