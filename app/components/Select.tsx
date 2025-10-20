import React from 'react';

interface ISelect<T> {
  props: [T, string][];
  styles?: string;
}

function Select({ props, styles }: ISelect<string>) {
  return (
    <select className={`${styles}`} name='select-lang '>
      {props.map(([key, val]) => (
        <option key={key} value={key}>
          {val}
        </option>
      ))}
    </select>
  );
}

export default Select;
