import React, { Activity, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Trans, useTranslation } from 'react-i18next';
import { data, useFetcher, useNavigate } from 'react-router';
import { auth } from '~/firebase';

import { updateProfile } from 'firebase/auth';
import type { Resources } from 'i18next';
import type { Route } from './+types/RegisterComponent';
import { FirebaseError } from 'firebase/app';
import { HydrateFallBack } from '~/root';
import { AuthUserError } from '~/components/errors/erros-auth';
import { createUser } from '~/firebase/apicalls';

type ReturnTypeDataForm = {
  email: string;
  password: string;
  displayName: string;
};

export async function clientAction({ request }: Route.ClientActionArgs) {
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

    return data({ errors });
  }
  console.log({ email, password, displayName });

  return data({ email, password, displayName });
}

function RegisterComponent(_: Route.ComponentProps) {
  const fetcher = useFetcher();

  const { t } = useTranslation('auth', { keyPrefix: 'registerComponent', useSuspense: true });

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const errors = fetcher.data?.errors;
  const userData = fetcher.data as ReturnTypeDataForm;

  useEffect(() => {
    async function createWithUserDt(params: ReturnTypeDataForm) {
      try {
        const { email, password, displayName } = params;
        const resp = await createUserWithEmailAndPassword(email, password);
        if (resp) {
          await updateProfile(resp.user, { displayName });

          await createUser({ email: email });

          navigate('/', { viewTransition: true });
        }
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          Object.defineProperty(errors, 'email', { value: 'auth/invalid-email', writable: true, enumerable: true });
          throw new AuthUserError('auth', 'fuck!!!');
        }
      }
    }
    if (userData) {
      createWithUserDt(userData);
    }
  }, [userData, errors]);

  if (loading) return <HydrateFallBack />;

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

        <Activity mode={error ? 'visible' : 'hidden'}>
          <em className='text-main'>
            <Trans i18nKey={`errors.${error && (error.code as keyof Resources['auth']['errors'])}`} />
          </em>
        </Activity>
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
