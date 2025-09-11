import { NavLink } from 'react-router';
import { menu } from '~/config/variables';

const Menu = () => {
  return (
    <ul className=" flex flex-row justify-between w-[90%] p-4 text-4xl border absolute bottom-5 ">
      {menu.map((str) => (
        <li key={str}>
          <NavLink to={`${str.toLowerCase().replace(' ', '-')}`}>{str}</NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
