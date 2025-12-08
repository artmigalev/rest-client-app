import React from 'react';

// interface ITextInputForEndpointURLComponent {
//   defaultValue: string;
//   dispatcher: Dispatch<React.SetStateAction<IRestFullClient['options']>>;
// }

function TextInputForEndpointURLComponent({ url }: { url: string }) {
  const prefix = 'http://';

  // const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;

  //   dispatcher((state) => ({ ...state, textInput: inputValue }));
  // };

  return (
    <div className='flex justify-between items-center w-full h-12 rounded-xl relative border-gray-400 border-2'>
      <span className='flex items-center justify-center text-input-prefix text-lg h-full w-[70px] font-semibold p-2.5 bg-background rounded-bl-xl rounded-tl-xl'>
        {prefix}
      </span>
      <input
        aria-label='url'
        name='base-url'
        type='text'
        defaultValue={url}
        className='flex items-center justify-center outline-0 font-medium border-0  bg-input-bg py-2.5 w-full text-sm'
        placeholder='Endpoint'
      />
    </div>
  );
}

export default TextInputForEndpointURLComponent;
