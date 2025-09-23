import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import SignOut from '~/auth/signOut';
import { selectLng } from '~/state-management/langSlice';
import { changeByValue } from '~/state-management/langSlice';
import { useAppDispatch, useAppSelector } from '~/utils/hooks';
export type NavProps = {
  isLogin: boolean;
};
const Navigation = ({ isLogin }: NavProps) => {
  const lng = useAppSelector(selectLng);

  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation('header');
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const select = event.target as HTMLSelectElement;

    dispatch(changeByValue(select.value));
  };
  useEffect(() => {
    const selectLanguage = lng;

    i18n.changeLanguage(selectLanguage);
  }, [lng]);
  return (
    <nav className=" flex  justify-around items-center  w-[100%]">
      <Link to={'/'} viewTransition>
        <img src="/postman2csharp.png" alt="logo" className="max-w-[50px]" />
      </Link>
      <select
        className=" bg-black cursor-pointer"
        name="language"
        id="pet-select"
        value={lng}
        onChange={handleLanguageChange}
      >
        <option className="cursor-pointer" value="en">
          English
        </option>
        <option className="cursor-pointer" value="ru">
          Russian
        </option>
      </select>
      {isLogin ? (
        <SignOut />
      ) : (
        <>
          <Link to={'login'} viewTransition>
            {' '}
            {t('login')}
          </Link>
          <Link to={'register'} viewTransition>
            {' '}
            {t('register')}
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navigation;
