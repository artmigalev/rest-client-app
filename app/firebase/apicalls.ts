import { addDoc, collection } from "firebase/firestore"
import { db } from "~/firebase"

export const createUser = async (payload) => {

  try {

    const refDoc = collection(db, 'users')
    await addDoc(refDoc, payload)
    return {
      success: true,
      message: 'USer created successfully'
    }

  } catch (error) {
    return error
  }
}