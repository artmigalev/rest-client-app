import React, { type Dispatch } from 'react';

interface ISelect<T> {
  options: [T, string][];
  styles?: string;
  value: T
  dispatcher: Dispatch<React.SetStateAction<T>>
}

function Select({ value, dispatcher , options, styles }: ISelect<string>) {
  return (
    <select defaultValue={value} onChange={()=> dispatcher(value)} className={`${styles}`} name='select-lang '>
      {options.map(([key, val]) => (
        <option key={key} value={key}>
          {val}
        </option>
      ))}
    </select>
  );
}

export default Select;
