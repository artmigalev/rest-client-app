export type LoggedProps = {
  username: string;
  password: string;
};

export const login = (data: LoggedProps) => {
  const { username, password } = data;
  console.log(password);

  const storageUser = {
    name: username,
    password: localStorage[username] || null,
  };
  const isLogged =
    JSON.stringify(storageUser) ===
    JSON.stringify({
      name: username,
      password: password,
    });
  console.log(isLogged);
  localStorage.setItem('isLogin', JSON.stringify(isLogged));
  return isLogged;
};
JSON.stringify(localStorage.getItem('isLogin'));
