import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import Loader from '~/components/Loader';
import Footer from '~/layout/footer';
import Header from '~/layout/header';
import Main from '~/layout/main';
import Navigation from '~/navigation/Navigation';

export default function Home() {
  const [storedIsLogin] = useLocalStorage<boolean>('isLogin', false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <Loader />;
  }

  return (
    <>
      <Header>
        <Navigation isLogin={storedIsLogin} />
      </Header>
      <Main isLogin={storedIsLogin} />
      <Footer />
    </>
  );
}
