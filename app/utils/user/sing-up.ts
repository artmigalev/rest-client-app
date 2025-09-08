export type RegisterProps = {
  firstName: string;
  lastNAme: string;
  username: string;
  password: string;
};

const registered = (
  username: RegisterProps['username'],
  password: RegisterProps['password']
) => {
  const LS = localStorage;
  LS.setItem(
    'user',
    JSON.stringify({ username: username, password: password })
  );
  const isRegistered = true;
  localStorage.setItem('isLogin', JSON.stringify(isRegistered));
};
export default registered;
