import { useState, type ChangeEvent, type JSX } from 'react';

interface FieldClient {
  props: {
    id: string;
    fnRemove: (id: string) => void;
  };
}

const FieldClient = ({ fnRemove, id }: FieldClient['props']): JSX.Element => {
  const [selectMethod, setSelectMethod] = useState('');
  const [inputValue, setInputValue] = useState('');
  const onSelect = (e: React.ChangeEvent<HTMLOptionElement>) => {
    setSelectMethod(e.target.value);
    setInputValue(inputValue.replace(selectMethod, ''));
  };
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setInputValue(input.value);
  };

  return (
    <li className="flex justify-between w-[100%] flex-row items-center  gap-[1rem] p-[1rem] ">
      <select
        value={selectMethod}
        onChange={(e) => onSelect(e)}
        className=" bg-black cursor-pointer p-[1rem]"
        name="method"
        id="select-method"
      >
        <option value="">METHOD</option>
        <option value="/GET">GET</option>
        <option value="/PUT">PUT</option>
        <option value="/DELETE">DELETE</option>
      </select>
      <input
        onChange={onChangeInput}
        value={
          inputValue
            ? `${inputValue.replace(selectMethod, '')}${selectMethod}`
            : selectMethod
        }
        placeholder="Endpoint URL"
        className=" max-w-[70%] w-[100%] border rounded-2xl  placeholder:text-gray-500 placeholder:italic pt-1 pb-1 pl-5"
        type="text"
      />
      <button onClick={() => fnRemove(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
          />
        </svg>
      </button>
    </li>
  );
};

export default FieldClient;
