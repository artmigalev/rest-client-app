import { Link } from 'react-router';
import Menu from '../Menu/Menu';
import { useTranslation } from 'react-i18next';

const Welcome = ({
  username,
  isLogin,
}: {
  username?: string;
  isLogin: boolean;
}) => {
  const { t } = useTranslation(['welcome', 'header']);

  return (
    <>
      <h1 className="text-center w-[100%]">{t('greeting')}</h1>

      <nav className="flex flex-row  justify-center w-[100%] gap-[2rem] p-[1rem]">
        {isLogin ? (
          <>
            {username}
            <Menu />
          </>
        ) : (
          <>
            <Link to="/login" viewTransition>
              {t('header:login')}
            </Link>
            <Link to="/register" viewTransition>
              {t('header:register')}
            </Link>
          </>
        )}
      </nav>
    </>
  );
};
export default Welcome;
