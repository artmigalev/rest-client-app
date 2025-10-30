import React, { Activity, useEffect, useEffectEvent } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Form, useNavigate } from 'react-router';
import type { Route } from '../../routes/+types/Auth';
import { auth } from '~/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import type Resources from '~/@types/resources';

export async function clientAction({ request }: Route.ClientActionArgs) {
  console.log(request);

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  return { email, password };
}

function SignInComponent({ actionData }: Route.ComponentProps) {
  const { t } = useTranslation('auth', { keyPrefix: 'signInComponent', useSuspense: true });

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (actionData) {
      signInWithEmailAndPassword(actionData.email, actionData.password);
    }

  }, [actionData]);


  useEffect(() => {
    if (user) {
      navigate('/', { viewTransition: true });
    }
  },[user])

  if (loading) return <span className='absolute top-2/4 left-2/4'> Loading...</span>;

  return (
    <>
      <Form method='PUT' className='w-2/3   flex flex-col  gap-8 p-6 pt-10 rounded-md shadow-lg max-sm:w-3/4 '>
        <div className=' flex flex-col w-full'>
          <label className='capitalize block text-gray-800 font-semibold text-xm' htmlFor='email'>
            {t('email')}
          </label>
          <input
            placeholder={t('email')}
            className=' w-full px-6 py-2.5  block rounded-[var(--radius-form-b)]  ring-1 ring-inset ring-gray-400 focus:text-gray-800 mt-3! '
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
            className=' w-full px-6 py-2.5  block  rounded-[var(--radius-form-b)] ring-1 ring-inset ring-gray-400 focus:text-gray-800 mt-3! '
            type='password'
            name='password'
          />
        </div>
        <Activity mode={error ? 'visible' : 'hidden'}>
          <span className='text-xl text-main '>
            <Trans i18nKey={`errors.${error && (error.code as keyof Resources['auth']['errors'])}`} />
          </span>
        </Activity>
        <button
          type='submit'
          className=' bg-main m-auto! text-lg text-amber-50 w-full rounded-[var(--radius-form-b)] py-3.5  font-bold  border-2 capitalize!'
        >
          <Trans i18nKey='auth:button' />
        </button>
      </Form>
    </>
  );
}

export default SignInComponent;
