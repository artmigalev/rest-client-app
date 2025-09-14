import { Form, useForm } from 'react-hook-form';
import type { FormInputsLogin } from './Login';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '~/firebase/firebase';
import { useAppSelector } from '~/utils/hooks';
import { selectLng } from '~/state-management/langSlice';
import { useTranslation } from 'react-i18next';

type FormInputsRegister = {
  firstName: string;
  lastName: string;
  username: FormInputsLogin['username'];
  password: FormInputsLogin['password'];
};

const Register = () => {
  const lng = useAppSelector(selectLng);
  const { t, i18n } = useTranslation<'register'>('register');

  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputsRegister>({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    criteriaMode: 'all',
  });
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    i18n.changeLanguage(lng);
    if (loading) return;
    if (user) navigate('/');
    reset();
  }, [loading, user, reset]);

  const onSubmit = (data: FormInputsRegister) => {
    const { firstName, username, password } = data;
    registerWithEmailAndPassword({ firstName, username, password });
  };
  return (
    <Form
      className="flex flex-col gap-[1rem] w-[100%]"
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      validateStatus={(status) => status === 200}
    >
      <div className="flex flex-col border-b  p-[1rem] gap-0.5">
        <label htmlFor="firstName">{t('firstName.label')}:</label>
        <input
          className="border rounded-2xl pl-3 "
          type="text"
          {...register('firstName', {
            required: {
              value: true,
              message: t('error.firstName.message.required'),
            },
            minLength: {
              value: 3,
              message: t('error.firstName.message.minLength'),
            },
            maxLength: {
              value: 20,
              message: t('error.firstName.message.maxLength'),
            },
          })}
          placeholder={t('firstName.placeholder')}
          id="firstName"
        />
        <ErrorMessage
          errors={errors}
          name="firstName"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <span className="text-red-700 text-[.5em]" key={type}>
                {message}
              </span>
            ))
          }
        />
      </div>
      <div className="flex flex-col border-b  p-[1rem] gap-0.5">
        <label htmlFor="lastName">{t('lastName.label')}:</label>
        <input
          className="border rounded-2xl pl-3 "
          type="text"
          {...register('lastName', {
            required: {
              value: true,
              message: t('error.lastName.message.required'),
            },
            minLength: {
              value: 3,
              message: t('error.lastName.message.minLength'),
            },
            maxLength: {
              value: 20,
              message: t('error.lastName.message.maxLength'),
            },
          })}
          placeholder={t('lastName.placeholder')}
          id="lastName"
        />
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <span className="text-red-700 text-[.5em]" key={type}>
                {message}
              </span>
            ))
          }
        />
      </div>
      <div className="flex flex-col border-b  p-[1rem] gap-0.5">
        <label htmlFor="username">{t('username.label')}:</label>
        <input
          className="border rounded-2xl pl-3 "
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: t('error.username.message.required'),
            },
            minLength: {
              value: 3,
              message: t('error.username.message.minLength'),
            },
            maxLength: {
              value: 20,
              message: t('error.username.message.maxLength'),
            },
          })}
          placeholder=" username"
          id="username"
        />
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <span className="text-red-700 text-[.5em]" key={type}>
                {message}
              </span>
            ))
          }
        />
      </div>
      <div className="flex flex-col border-b  p-[1rem] gap-0.5">
        <label htmlFor="">{t('password.label')}:</label>
        <input
          className="border rounded-2xl pl-3"
          type="text"
          {...register('password', {
            required: {
              value: true,
              message: t('error.password.message.required'),
            },
            minLength: {
              value: 8,
              message: t('error.password.message.minLength'),
            },
            maxLength: {
              value: 16,
              message: t('error.password.message.maxLength'),
            },
          })}
          placeholder={t('password.placeholder')}
        />

        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <span className="text-red-700 text-[.5em]" key={type}>
                {message}
              </span>
            ))
          }
        />
      </div>
      <input
        className="border rounded-2xl mt-[1rem]  p-[.5rem] cursor-pointer "
        // onClick={() => redirect('/home')}
        type="submit"
        value={t('button.label')}
      />
    </Form>
  );
};
export default Register;
