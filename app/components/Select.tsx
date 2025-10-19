import React from "react";



interface ISelect<T> {

  props: [T, string][]

}

function Select({ props }: ISelect<string>) {
  console.log(props);

  return (
    <select name="select-lang">
      {props.map(([key, val]) => (
        <option value={key}>{val}</option>
      ))}
    </select>
  );
}

export default Select;
