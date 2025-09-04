import { useEffect, useState } from 'react';
import Footer from '~/layout/footer';
import Header from '~/layout/header';
import Main from '~/layout/main';
import Navigation from '~/navigation/Navigation';
import useLocalStorageListener from '~/utils/listener-storage';

export function meta() {
  return [{ title: 'Postman Clone' }];
}

export default function Home() {
  const isLogin = useLocalStorageListener('isLogin');
  const [userStatus, setUserStatus] = useState<boolean>(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem('isLogin') === 'true';
    setUserStatus(storedStatus);
  }, [isLogin]);

  const toggleStatus = (value: boolean) => {
    localStorage.setItem('isLogin', JSON.stringify(value));
    setUserStatus(value);
  };
  return (
    <>
      <Header>
        <Navigation userStatus={userStatus} toggle={toggleStatus} />
      </Header>
      <Main isLogin={userStatus} />
      <Footer />
    </>
  );
}
