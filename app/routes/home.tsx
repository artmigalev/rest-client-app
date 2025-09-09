import { query, collection, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '~/firebase/firebase';
import Footer from '~/layout/footer';
import Header from '~/layout/header';
import Main from '~/layout/main';
import Navigation from '~/navigation/Navigation';

export default function Home() {
  const [logged, setLogged] = useState(false);
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
  console.log(user);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    if (!loading) {
      if (user) {
        fetchUserName();
        setLogged(true);
      } else {
        setLogged(false);
      }
    }
  }, [user, loading]);

  return (
    <>
      <Header>
        <Navigation isLogin={logged} />
      </Header>
      <Main loading={loading} name={name} isLogin={logged} />

      <Footer />
    </>
  );
}
