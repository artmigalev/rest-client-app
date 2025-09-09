import { Form, useForm } from 'react-hook-form';
import type { FormInputsLogin } from './Login';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, registerWithEmailAndPassword } from '~/firebase/firebase';

type FormInputsRegister = {
  firstName: string;
  lastName: string;
  username: FormInputsLogin['username'];
  password: FormInputsLogin['password'];
};

const Register = () => {
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
        <label htmlFor="firstName">First name:</label>
        <input
          className="border rounded-2xl pl-3 "
          type="text"
          {...register('firstName', {
            required: {
              value: true,
              message: 'must be required',
            },
            minLength: {
              value: 2,
              message: 'must contain at least 2 letters',
            },
          })}
          placeholder=" first name"
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
        <label htmlFor="lastName">Last name:</label>
        <input
          className="border rounded-2xl pl-3 "
          type="text"
          {...register('lastName', {
            required: {
              value: true,
              message: 'must be required',
            },
            minLength: {
              value: 2,
              message: 'must contain at least 2 letters',
            },
          })}
          placeholder=" lastName"
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
        <label htmlFor="username">Username:</label>
        <input
          className="border rounded-2xl pl-3 "
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
        value="Sing Up"
      />
    </Form>
  );
};
export default Register;
