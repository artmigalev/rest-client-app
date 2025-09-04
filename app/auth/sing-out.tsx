import { Link } from 'react-router';
import type { NavProps } from '~/navigation/Navigation';
import logout from '~/utils/user/logout';
const SignOut = ({ toggle }: { toggle: NavProps['toggle'] }) => {
  const exit = () => {
    logout();
    toggle(false);
  };

  return (
    <Link
      to={'/home'}
      onClick={() => {
        exit();
      }}
    >
      Sing Out
    </Link>
  );
};
export default SignOut;
