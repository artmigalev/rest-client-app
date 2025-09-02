import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav className=" flex  justify-around items-center  w-[100%]">
      <Link to={'/home'}>
        <img src="/postman2csharp.png" alt="logo" className="max-w-[50px]" />
      </Link>

      <select
        className=" background: black cursor-pointer"
        name="pets"
        id="pet-select"
      >
        <option className="cursor-pointer" value="english">
          English
        </option>
        <option className="cursor-pointer" value="russian">
          Russian
        </option>
      </select>
      <Link to={'/login'}>Sing in</Link>
      <Link to={'/register'}>Sing up</Link>
    </nav>
  );
};
export default Navigation;
