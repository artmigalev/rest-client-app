import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { data } from 'react-router';
import { db } from '~/firebase';
import Variables from '~/routes/Variables';

type PayloadRegister = {
  email: string
}

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
export  type newUserCollection = {
  email: PayloadRegister['email']
  history: PayloadHistory []|[];
  variables:[]
}


export const createUser = async (payload: PayloadRegister) => {
  try {
    const qr = query(collection(db, 'users'), where('email', '==', payload.email));

    const qrSnapShot = await getDocs(qr);

    if (qrSnapShot.size > 0) {
      throw new Error('User already exists');
    }
    const collectionUser: newUserCollection = {
      email: payload.email,
      history: [],
      variables: []
    }

    const refDoc = doc(db, 'users', payload.email)
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
    const userHistoryRef = doc(db,'users', email, )

    await updateDoc(userHistoryRef, {
      history:arrayUnion(payload)
    } )

    console.log('update history');



  } catch (error) {
    console.error(error);

  }







}

const fakePayload: PayloadHistory = {
  responseStatusCode: 0,
  requestTimestamp: '',
  requestMethod: 'GET',
  endpointURL: ''
};

export const getHistory = async (email: string) => {

// const citiesRef = collection(db, 'users');

// Create a query against the collection.
// const q = query(citiesRef, where('email', '==', email));


// const citiesRef = collection(db, 'users')

//   const q = collection(citiesRef, where('email', '==', email))



  const historyDoc = doc(db, 'users', email)

  const qrSnapshot = await getDoc(historyDoc);
  let arrayPAyload =[]

  const {history} = qrSnapshot.data() as newUserCollection['history']

  console.log(history);

  return history
}



// updateUserHistory("example@yahoo.com",fakePayload)

// async function updateHistory(params) {

// }
