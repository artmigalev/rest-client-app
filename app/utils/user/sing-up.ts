export type RegisterProps = {
  firstName: string;
  lastNAme: string;
  userName: string;
  password: string;
};

const registered = (
  userName: RegisterProps['userName'],
  password: RegisterProps['password']
) => {
  const LS = localStorage;
  LS.setItem(userName, password);
  const isRegistered = true;
  localStorage.setItem('isLogin', JSON.stringify(isRegistered));
};
export default registered;
