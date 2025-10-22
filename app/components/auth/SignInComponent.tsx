import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Form } from 'react-router';

function SignInComponent() {
  const { t } = useTranslation('auth', { keyPrefix: 'signInComponent', useSuspense: true });

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
