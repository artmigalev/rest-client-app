import { ErrorMessage } from '@hookform/error-message';

import { Form, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { login } from '~/utils/user/login';
export type FormInputsLogin = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = useForm<FormInputsLogin>({
    defaultValues: {
      username: '',
      password: '',
    },
    criteriaMode: 'all',
  });

  const onSubmit = (data: FormInputsLogin) => {
    const result = login(data);
    console.log(result);
    if (result.isLogged === true) {
      navigate('/');
      localStorage.setItem('isLogin', JSON.stringify(result.isLogged));
    } else {
      setError('username', { type: 'value', message: 'invalid' });
    }
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
