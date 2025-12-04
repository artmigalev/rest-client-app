import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  startAt,
  updateDoc,
  where,
} from 'firebase/firestore';
import { data } from 'react-router';
import { db } from '~/firebase';
import Variables from '~/routes/Variables';

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
  variables: {[key:string]:string};
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
      variables: {}
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
    const userHistoryRef = doc(db, 'users', email);

    await updateDoc(userHistoryRef, {
      history: arrayUnion(payload),
    });

    console.log('update history');
  } catch (error) {
    console.error(error);
  }
};

const fakePayload: PayloadHistory = {
  responseStatusCode: 0,
  requestTimestamp: '',
  requestMethod: 'GET',
  endpointURL: '',
};

export const getHistory = async (email: string) => {


  // const userWithEmailDoc = doc(db, 'users', email);
  // try {
  //   const docSnap = await getDoc(userWithEmailDoc);
  //   console.log(docSnap.data());
  //   if (!docSnap.exists()) {
  //     throw new Error('Incorrect email User undefined');
  //   }



  // } catch (error) {
  //   if (error instanceof Error) {
  //     return { error: error.message };
  //   }
  // }
  const q = query( collection(db, `users${email}`))
  const querySnapshot = await getDocs(q);

  console.log(querySnapshot.size)
 querySnapshot.forEach((doc) => {
   // doc.data() is never undefined for query doc snapshots
   console.log(doc.id, ' => ', doc.data());
 });



  // return history
};

// updateUserHistory("example@yahoo.com",fakePayload)

// async function updateHistory(params) {

// }
