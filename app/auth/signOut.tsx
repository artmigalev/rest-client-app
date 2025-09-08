import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { loggedOut } from '~/state-management/userSlice';
import logout from '~/utils/user/logout';
const SignOut = () => {
  const dispatch = useDispatch();

  const exit = () => {
    logout();
    dispatch(loggedOut());
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
