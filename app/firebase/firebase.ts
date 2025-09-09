// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import type { User } from '~/layout/main';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0YriaxC_aAKMFqAhChtSTLEhzlFtJVcM',
  authDomain: 'rest-client-app-29c25.firebaseapp.com',
  projectId: 'rest-client-app-29c25',
  storageBucket: 'rest-client-app-29c25.firebasestorage.app',
  messagingSenderId: '233485874411',
  appId: '1:233485874411:web:b3770d824f82e2325cbaae',
  measurementId: 'G-9XHJDC2W06',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, ' users'), where(' uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, ' users '), {
        uid: user.uid,
        name: user.displayName,
        authProvider: ' google ',
        email: user.email,
      });
    }
  } catch (err: unknown) {
    const error = err as Error;
    console.error(error);
    alert(error.message);
  }
};
const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    const error = err as Error;
    console.error(error);
    alert(error.message);
  }
};
const registerWithEmailAndPassword = async ({
  username,
  email,
  password,
}: User) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      username,
      authProvider: ' local ',
      email,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error(error);
    alert(error.message);
  }
};
const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert(' Ссылка для сброса пароля отправлена!');
  } catch (err) {
    const error = err as Error;
    console.error(error);
    alert(error.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
