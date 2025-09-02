import { Form, useForm } from 'react-hook-form';

type FormInputsLogin = {
  username: string;
  password: string;
};

const Login = () => {
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
  const onSubmit = () => {
    setError(
      'username',
      { type: 'minLength', message: 'must be required' },
      { shouldFocus: true }
    );
  };

  return (
    <Form
      className="flex flex-col gap-[1rem]"
      control={control}
      action={'/login'}
      onSubmit={handleSubmit(onSubmit)}
      validateStatus={(status) => status === 200}
    >
      <div className="flex flex-col border-b  p-[1rem] gap-0.5">
        <label htmlFor="username">Username:</label>
        <input
          className="border rounded-2xl pl-1"
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: 'must be required',
            },
          })}
          placeholder=" username"
          id="username"
        />
        {errors.username && (
          <span className="text-amber-50 text-2xl">
            {errors.username.message}
          </span>
        )}
        {}
      </div>
      <div className="flex flex-col border-b  p-[1rem] gap-0.5">
        <label htmlFor="">Password:</label>
        <input
          className="border rounded-2xl pl-1"
          type="text"
          {...register('password', {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
          placeholder=" password"
        />
        {errors.username && (
          <span className="text-amber-50 text-2xl">
            {errors.username.message}
          </span>
        )}
      </div>
      <input
        className="border rounded-2xl mt-[1rem]  p-[.5rem] "
        type="submit"
        value="Login"
      />
    </Form>
  );
};
export default Login;
