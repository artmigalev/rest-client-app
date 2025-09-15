import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
const Menu = () => {
  const menu = [
    { key: 'menu.rest-client', path: '/rest-client' },
    { key: 'menu.history', path: '/history' },
    { key: 'menu.variables', path: '/variables' },
  ] as const;
  const { t } = useTranslation('menu');

  return (
    <ul className=" flex flex-row justify-between w-[90%] p-4 text-4xl border absolute bottom-5 ">
      {menu.map(({ key, path }) => (
        <li key={t(key)}>
          <NavLink to={`${path.toLowerCase().replace(' ', '-')}`}>
            {t(key)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
