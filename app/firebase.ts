import { initializeApp } from 'firebase/app';
import { debugErrorMap, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, { errorMap: debugErrorMap });
export const db = getFirestore(app);
