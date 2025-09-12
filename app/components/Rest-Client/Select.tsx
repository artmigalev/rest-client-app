import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Select {
  props: {
    register: UseFormRegister<FieldValues>;
    name: string;
    options: string[];
    // disable?: boolean
  };
}

export function Select({ register, options, name, ...rest }: Select['props']) {
  return (
    <select
      className=" bg-black cursor-pointer p-[1rem]"
      {...register(name)}
      {...rest}
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
