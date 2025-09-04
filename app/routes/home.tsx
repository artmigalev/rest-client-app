import { useEffect } from 'react';
import Footer from '~/layout/footer';
import Header from '~/layout/header';
import Main from '~/layout/main';
import Navigation from '~/navigation/Navigation';
import { selectStatus, toggleByValue } from '~/state-management/userSlice';
import { useAppDispatch, useAppSelector } from '~/utils/hooks';

export function meta() {
  return [{ title: 'Postman Clone' }];
}

export default function Home() {
  const isLogin = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedStatus = localStorage.getItem('isLogin') === 'true';
    console.log(storedStatus);
    dispatch(toggleByValue(storedStatus));
  }, [isLogin]);

  return (
    <>
      <Header>
        <Navigation isLogin={isLogin} />
      </Header>
      <Main isLogin={isLogin} />
      <Footer />
    </>
  );
}
