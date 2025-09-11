import { Navigate, Outlet } from 'react-router';
import { useUser } from '~/utils/hooks';

export type ClientProps = {
  isLogin: boolean;
};

const LayoutClient = () => {
  const { isLogin } = useUser();

  return (
    <div className="w-[100%] h-[100%] flex-1">
      {isLogin ? <Outlet /> : <Navigate to={'/login'} />}
    </div>
  );
};
export default LayoutClient;
