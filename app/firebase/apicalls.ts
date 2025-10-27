import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '~/firebase';

export const createUser = async (payload) => {
  try {
    const qr = query(collection(db, 'users'), where('email', '==', payload.email));
    const qrSnapShot = await getDocs(qr);
    if (qrSnapShot.size > 0) {
      throw new Error('User already exists');
    }

    const refDoc = collection(db, 'users');
    await addDoc(refDoc, payload);
    return {
      success: true,
      message: 'USer created successfully',
    };
  } catch (error) {
    return error;
  }
};
