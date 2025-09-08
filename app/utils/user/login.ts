export type LoggedProps = {
  username: string;
  password: string;
};
export type ResultLogged = {
  isLogged: boolean;
  username: string;
};
export const login = (data: LoggedProps) => {
  const { username, password } = data;
  const storageUser = JSON.parse(localStorage['user']);
  let isLogged;
  if (storageUser) {
    const checkedUser = {
      name: storageUser.username,
      password: storageUser.password,
    };
    isLogged =
      JSON.stringify(checkedUser) ===
      JSON.stringify({
        name: username,
        password: password,
      });

    localStorage.setItem('isLogin', JSON.stringify(isLogged));
    if (isLogged) return { isLogged, username };
  } else {
    isLogged = false;
  }

  return {
    isLogged,
    username,
  };
};
