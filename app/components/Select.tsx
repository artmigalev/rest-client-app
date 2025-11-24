import React, { type Dispatch, type SetStateAction } from 'react';

export interface ISelect<T> {
  options: [T | string, string][];
  styles?: Partial<{
    stylesSelect: string;
    stylesOption: string;
  }>;
  name: string;
  value: T;
  dispatcher?: Dispatch<SetStateAction<T>> | ((value: T) => void);
}

function SelectComponent<T>({ name, value, dispatcher, options, styles }: ISelect<T>) {
  return (
    <select
      defaultValue={value as string}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatcher && dispatcher(e.target.value as T)}
      className={`${styles?.stylesSelect ? styles.stylesSelect : 'gap-0'}`}
      name={name}
    >
      {options.map(([key, val]) => (
        <option key={key as string} value={key as string}>
          {val}
        </option>
      ))}
    </select>
  );
}

export default SelectComponent;
