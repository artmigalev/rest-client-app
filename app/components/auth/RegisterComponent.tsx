import React, { Activity, useEffect } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useDeleteUser } from 'react-firebase-hooks/auth';
import { Trans, useTranslation } from 'react-i18next';
import { Form, useNavigate } from 'react-router';
import { auth, db, registerWithEmailAndPassword } from '~/firebase';
import type { Route } from '../../routes/+types/Auth';
import { addDoc, collection } from 'firebase/firestore';
import { deleteUser, updateProfile } from 'firebase/auth';
import type { Resources } from 'i18next';

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let email = formData.get('email');
  let password = formData.get('password');
  let displayName = formData.get('username') as string;

  return { email, displayName, password };
}

function RegisterComponent({ actionData }: Route.ComponentProps) {
  const { t } = useTranslation('auth', { keyPrefix: 'registerComponent', useSuspense: true });

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate()
  useEffect(() => {
    if (actionData) {
      const { password, email, displayName } = actionData;
      console.log(actionData);
      
      createUserWithEmailAndPassword(email, password);
      if (user) {
        updateProfile(user.user, { displayName });
      }
    }
  }, [actionData]);

  if (loading) {
    return <span className='absolute top-2/4 left-2/4'> Loading...</span>;
  }
  if (user) {
    navigate('/', {viewTransition:true})
  }

  return (
    <>
      <Form method='PUT' className='w-2/3  flex flex-col  gap-8 p-6 pt-10 rounded-md shadow-lg max-sm:w-3/4 '>
        <div className=' flex flex-col w-full'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='username'>
            {t('username')}
          </label>
          <input
            placeholder={t('username')}
            className=' w-full  px-6 py-2.5  block rounded-[var(--radius-form-b)]  ring-1 ring-inset ring-gray-400 focus:text-gray-800 mt-3! '
            type='text'
            name='username'
          />
        </div>
        <div className=' flex flex-col w-full'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='email'>
            {t('email')}
          </label>
          <input
            placeholder={t('email')}
            className=' w-full  px-6 py-2.5  block rounded-[var(--radius-form-b)]  ring-1 ring-inset ring-gray-400 focus:text-gray-800 mt-3! '
            type='text'
            name='email'
          />
        </div>
        <div className=' flex flex-col'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='password'>
            {t('password')}
          </label>
          <input
            placeholder={t('password')}
            className=' w-full  px-6 py-2.5  block  rounded-[var(--radius-form-b)] ring-1 ring-inset ring-gray-400 focus:text-gray-800 mt-3! '
            type='password'
            name='password'
          />
        </div>

        <Activity mode={error ? 'visible' : 'hidden'}>
          <span>
            <Trans i18nKey={`errors.${error && (error.code as keyof Resources['auth']['errors'])}`} />
          </span>
        </Activity>
        <button
          type='submit'
          className=' bg-main m-auto! text-lg  text-amber-50 w-full rounded-[var(--radius-form-b)] py-3.5  font-bold  border-2 capitalize!'
        >
          <Trans i18nKey='auth:button' />
        </button>
      </Form>
    </>
  );
}

export default RegisterComponent;
