import React, { Activity, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { data, useFetcher, useNavigate } from 'react-router';
import type { Route } from './+types/SignInComponent';
import { auth } from '~/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import type Resources from '~/@types/resources';
import { HydrateFallBack } from '~/root';

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  const errors = {};
  if (!email.includes('@')) {
    Object.defineProperty(errors, 'email', { value: 'auth/invalid-email', writable: true, enumerable: true });
  }
  if (password.length < 12) {
    Object.defineProperty(errors, 'password', { value: 'auth/wrong-password', writable: true, enumerable: true });
  }
  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 });
  }

  return data({ email, password });
}

function SignInComponent(_: Route.ComponentProps) {
  const fetcher = useFetcher();
  const errors = fetcher.data?.errors;
  const data = fetcher.data as Resources['auth']['signInComponent'];
  const { t } = useTranslation('auth', { keyPrefix: 'signInComponent', useSuspense: true });

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const { email, password } = data;
      signInWithEmailAndPassword(email, password);
    }
  }, [data]);

  useEffect(() => {
    if (user) {
      navigate('/', { viewTransition: true });
    }
  }, [user]);

  if (loading) return <HydrateFallBack/>;

  return (
    <>
      <fetcher.Form
        method='POST'
        className='w-2/3  flex flex-col  gap-2 p-2  pt-2 rounded-md form-shadow max-sm:w-3/4  '
      >
        <div className=' field-form'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='email'>
            {t('email')}
          </label>
          <input
            required
            placeholder={t('email')}
            className=' py-1 px-2 w-full text-base  block rounded-[var(--radius-form-b)]  ring-1 ring-inset ring-gray-400 focus:text-gray-800  '
            type='text'
            name='email'
          />
          <Activity mode={errors && errors?.email ? 'visible' : 'hidden'}>
            <em className='text-main'>
              <Trans i18nKey={`errors.${errors && (errors.email as keyof Resources['auth']['errors'])}`} />
            </em>
          </Activity>
        </div>
        <div className='field-form '>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='password'>
            {t('password')}
          </label>
          <input
            required
            placeholder={t('password')}
            className=' py-1 px-2 w-full text-base  block rounded-[var(--radius-form-b)]  ring-1 ring-inset ring-gray-400 focus:text-gray-800  '
            type='password'
            name='password'
          />
        </div>
        <Activity mode={error || errors ? 'visible' : 'hidden'}>
          <em className='text-xl text-main '>
            {error && <Trans i18nKey={`errors.${error && (error.code as keyof Resources['auth']['errors'])}`} />}
            {errors && <Trans i18nKey={`errors.${errors && (errors.password as keyof Resources['auth']['errors'])}`} />}
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

export default SignInComponent;
