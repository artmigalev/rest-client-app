import React, { type ChangeEvent, type Dispatch } from 'react';
import type { IRestFullClient } from '~/routes/RestFullClient';

interface ITextInputForEndpointURLComponent {
  defaultValue: string;
  dispatcher: Dispatch<React.SetStateAction<IRestFullClient['options']>>;
}

function TextInputForEndpointURLComponent({ defaultValue, dispatcher }: ITextInputForEndpointURLComponent) {
  const prefix = 'http://';

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    dispatcher((state) => ({ ...state, textInput: inputValue }));
  };

  return (
    <div className='flex justify-between items-center w-[270px] h-12 rounded-xl relative border-gray-400 border-2'>
      <span className='flex items-center justify-center text-input-prefix text-lg h-full w-[70px] font-semibold p-2.5 bg-background rounded-bl-xl rounded-tl-xl'>
        {prefix}
      </span>
      <input
        defaultValue={defaultValue}
        onChange={onHandleChange}
        className='flex items-center justify-center outline-0 font-medium border-0  bg-input-bg py-2.5 w-40 text-sm'
        placeholder='Endpoint'
      />
      <span className='text-4xl bg-input-bg h-full w-10 flex items-center justify-center pr-2.5 rounded-t-xl rounded-b-xl cursor-pointer relative pb-3'>
        📨
      </span>
    </div>
  );
}

export default TextInputForEndpointURLComponent;
