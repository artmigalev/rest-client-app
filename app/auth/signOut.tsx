import { Link } from 'react-router';
import { logout } from '~/firebase/firebase';
const SignOut = () => {
  const exit = () => {
    logout();
  };

  return (
    <Link
      to={'/'}
      onClick={() => {
        exit();
      }}
    >
      Sing Out
    </Link>
  );
};
export default SignOut;
