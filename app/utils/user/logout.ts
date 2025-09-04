const logout = () => {
  localStorage.setItem('isLogin', JSON.stringify(false));
};
export default logout;
