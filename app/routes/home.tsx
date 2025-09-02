import Header from '~/layout/header';
import Navigation from '~/navigation/Navigation';

export function meta() {
  return [{ title: 'Postman Clone' }];
}

export default function Home() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
    </>
  );
}
