import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Input {
  props: {
    register: UseFormRegister<FieldValues>;
    name: string;
  };
}

export function Input({ register, name, ...rest }: Input['props']) {
  return (
    <input
      className=" max-w-[70%] w-[100%] border rounded-2xl  placeholder:text-gray-500 placeholder:italic pt-1 pb-1 pl-5"
      {...register(name)}
      {...rest}
    />
  );
}
