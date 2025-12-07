import { onAuthStateChanged, type User } from 'firebase/auth';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
  startAt,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, db } from '~/firebase';

type PayloadRegister = {
  email: string;
};

export type PayloadHistory = {
  requestDuration?: number;
  responseStatusCode: number;
  requestTimestamp: string;
  requestMethod: 'GET' | 'POST' | 'PUT';
  requestSize?: number;
  responseSize?: number;
  errorDetails?: string;
  endpointURL: string;
};
export type newUserCollection = {
  email: PayloadRegister['email'];
  history: { [key: string]: PayloadHistory };
  variables: { [key: string]: string };
};

export const createUser = async (payload: PayloadRegister) => {
  try {
    const qr = query(collection(db, 'users'), where('email', '==', payload.email));

    const qrSnapShot = await getDocs(qr);

    if (qrSnapShot.size > 0) {
      throw new Error('User already exists');
    }
    const collectionUser: newUserCollection = {
      email: payload.email,
      history: {},
      variables: {},
    };

    const refDoc = doc(db, 'users', payload.email);
    await setDoc(refDoc, collectionUser);

    return {
      success: true,
      message: 'USer created successfully',
    };
  } catch (error) {
    console.error(error);
  }
};

export const updateUserHistory = async (email: string, payload: PayloadHistory) => {
  try {
    const userHistoryRef = collection(db, 'users', email, 'history');

    await addDoc(userHistoryRef, payload);

    console.log('update history');
  } catch (error) {
    console.error(error);
  }
};

export const getHistory = async (email: string, next) => {
  const snapshotItems = [];

  const userCollection = collection(db, 'users', email, 'history');
  const q = query(userCollection, orderBy('requestTimestamp'), limit(4), startAfter(next));

  const snapShotUserHistory = await getDocs(q);
  // console.log(snapShotUserHistory.size);
  const lastDoc = snapShotUserHistory.docs[snapShotUserHistory.docs.length - 1];

  snapShotUserHistory.forEach((doc) => {
    snapshotItems.push(doc.data());
  });

  return { metrics: snapshotItems, lastSnapshot: lastDoc };
};

export const credentialUser = async (): Promise<User> => {
  return await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
};