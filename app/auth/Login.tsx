import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Form, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import Loader from '~/components/Loader';
import { auth, logInWithEmailAndPassword } from '~/firebase/firebase';
import { selectLng } from '~/state-management/langSlice';
import { useAppSelector } from '~/utils/hooks';
export type FormInputsLogin = {
  username: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const lng = useAppSelector(selectLng);
  const { t, i18n } = useTranslation<'login'>('login');
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputsLogin>({
    defaultValues: {
      username: '',
      password: '',
    },
    criteriaMode: 'all',
  });
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    i18n.changeLanguage(lng);
    if (loading) {
      <Loader />;
      return;
    }
    if (user) navigate('/');
  }, [user, loading, navigate, lng]);

  const onSubmit = (data: FormInputsLogin) => {
    logInWithEmailAndPassword(data.username, data.password);
  };

  return (
    <Form
      className="flex flex-col gap-[1rem] w-[100%]"
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      validateStatus={(status) => status === 200}
    >
      <div className="flex flex-col border-b  p-[1rem] gap-0.5">
        <label htmlFor="username">{t('username.label')}:</label>
        <input
          className="border  rounded-2xl pl-3 "
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: t('username.required'),
            },
            minLength: {
              value: 3,
              message: t('username.minLength'),
            },
            maxLength: {
              value: 20,
              message: t('username.maxLength'),
            },
          })}
          placeholder={t('username.placeholder')}
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
              message: t('password.required'),
            },
            minLength: {
              value: 8,
              message: t('password.minLength'),
            },
            maxLength: {
              value: 20,
              message: t('password.maxLength'),
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
              <span className="text-red-700 text-[.5em] pt-0.5" key={type}>
                {message}
              </span>
            ))
          }
        />
      </div>
      <input
        className="border rounded-2xl mt-[1rem]  p-[.5rem] cursor-pointer "
        type="submit"
        value={t('button.label')}
      />
    </Form>
  );
};
export default Login;
