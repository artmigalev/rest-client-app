import { useLocalStorage } from '@uidotdev/usehooks';
import Footer from '~/layout/footer';
import Header from '~/layout/header';
import Main from '~/layout/main';
import Navigation from '~/navigation/Navigation';

export default function Home() {
  const [isLogin] = useLocalStorage<boolean>('isLogin');

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
