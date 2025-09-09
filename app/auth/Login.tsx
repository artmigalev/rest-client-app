import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Form, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Loader from '~/components/Loader';
import { auth, logInWithEmailAndPassword } from '~/firebase/firebase';
export type FormInputsLogin = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
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
    if (loading) {
      <Loader />;
      return;
    }
    if (user) navigate('/');
  }, [user, loading, navigate]);

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
        <label htmlFor="username">Username:</label>
        <input
          className="border  rounded-2xl pl-3 "
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: 'must be required',
            },
            minLength: {
              value: 2,
              message: 'must contain at least 2 letters',
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
        <label htmlFor="">Password:</label>
        <input
          className="border rounded-2xl pl-3"
          type="text"
          {...register('password', {
            required: {
              value: true,
              message: 'must be  required',
            },
            minLength: {
              value: 8,
              message: 'must contain at least 8 letters',
            },
            maxLength: {
              value: 16,
              message: 'must contain at max 16 letters',
            },
          })}
          placeholder=" password"
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
        value="Sing In"
      />
    </Form>
  );
};
export default Login;
