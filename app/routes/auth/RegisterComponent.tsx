import React, { Activity, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Trans, useTranslation } from 'react-i18next';
import { data, redirect, useFetcher, useNavigate } from 'react-router';
import { auth } from '~/firebase';
import type { Route } from '../+types/Auth';
import { updateProfile } from 'firebase/auth';
import type { Resources } from 'i18next';
import { createUser } from '~/firebase/apicalls';
import { useAppDispatch } from '~/hooks';
import { setUser, type User } from '~/reducers/userSlice';
import { commitSession, getSession } from '~/sessions.server';
import { error } from 'console';

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const session = await getSession(request.headers.get('Cookie'));

  if (session.has('userId')) {
    return redirect('/');
  }
  return data(
    { error: session.get('error') },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const session = await getSession(request.headers.get('Cookie'));

  const formData = await request.formData();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  const displayName = String(formData.get('username'));

  const errors = {};

  if (!email.includes('@')) {
    Object.defineProperty(errors, 'email', { value: 'auth/invalid-email', writable: true, enumerable: true });
  }
  if (password.length < 12) {
    Object.defineProperty(errors, 'password', { value: 'auth/wrong-password', writable: true, enumerable: true });
  }
  if (Object.keys(errors).length > 0) {
    // Если пользователь не  прошел валидацию
    session.flash('error', 'Invalid cridantional');

    return data({ errors }, { status: 400 });
  }

  // Если  пользователь прошел валидацию  и зарегистрировался
  session.set('userId', displayName);
  return redirect('/', { headers: { 'Set-Cookie': await commitSession(session) } });
}

function RegisterComponent(_: Route.ComponentProps) {
  let fetcher = useFetcher();
  let errors = fetcher.data?.errors;

  const { t } = useTranslation('auth', { keyPrefix: 'registerComponent', useSuspense: true });

  const dispatch = useAppDispatch();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let success;

  // useEffect(() => {
  //   if (actionData) {
  //     const { password, email, displayName } = actionData;
  //     console.log(actionData);
  //     createUserWithEmailAndPassword(email, password);
  //   }
  // }, [actionData]);

  // if (loading) {
  //   return <span className='absolute top-2/4 left-2/4'> Loading...</span>;
  // }
  // if (user?.user && actionData) {
  //   const userInfo: User = {
  //     uid: user.user['uid'],
  //     displayName: actionData['displayName'],
  //   };
  //   console.log(actionData['displayName']);
  //   dispatch(setUser(userInfo));
  //   setTimeout(() => navigate('/', { viewTransition: true }), 13000);
  // }

  return (
    <>
      <fetcher.Form
        method='POST'
        className='w-2/3  flex flex-col  gap-2 p-2  pt-2 rounded-md form-shadow max-sm:w-3/4  '
      >
        <div className='field-form'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='username'>
            {t('username')}
          </label>
          <input
            required
            placeholder={t('username')}
            className=' py-1 px-2 w-full text-base  block rounded-[var(--radius-form-b)]  ring-1 ring-inset ring-gray-400 focus:text-gray-800  '
            type='text'
            name='username'
          />
        </div>
        <div className='field-form'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='email'>
            {t('email')}
          </label>
          <input
            required
            placeholder={t('email')}
            className='py-1 px-2 w-full  text-base   block rounded-[var(--radius-form-b)]  ring-1 ring-inset ring-gray-400 focus:text-gray-800  '
            type='text'
            name='email'
          />
          <Activity mode={errors && errors?.email ? 'visible' : 'hidden'}>
            <em className='text-main'>
              <Trans i18nKey={`errors.${errors && (errors.email as keyof Resources['auth']['errors'])}`} />
            </em>
          </Activity>
        </div>
        <div className='field-form'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='password'>
            {t('password')}
          </label>
          <input
            required
            placeholder={t('password')}
            className=' py-1 px-2 text-base  w-full block  rounded-[var(--radius-form-b)] ring-1 ring-inset ring-gray-400 focus:text-gray-800  '
            type='password'
            name='password'
          />
          <Activity mode={errors && errors?.password ? 'visible' : 'hidden'}>
            <em className='text-main'>
              <Trans i18nKey={`errors.${errors && (errors.password as keyof Resources['auth']['errors'])}`} />
            </em>
          </Activity>
        </div>

        {/* <Activity mode={error ? 'visible' : 'hidden'}>
          <span>
            {success && success}
            <Trans i18nKey={`errors.${error && (error.code as keyof Resources['auth']['errors'])}`} />
          </span>
        </Activity> */}
        <button
          type='submit'
          className='p-2 bg-main m-auto! text-base  text-amber-50 w-full rounded-[var(--radius-form-b)]   font-bold  border-2 capitalize!'
        >
          <Trans i18nKey='auth:button' />
        </button>
      </fetcher.Form>
    </>
  );
}

export default RegisterComponent;
