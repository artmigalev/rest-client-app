import { before } from 'node:test';
import React, { use, useEffect, useRef } from 'react';

const HeadersEditorComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [children, addChildren] = React.useState<React.ReactNode[]>([]);

  const onHandleClick = () => {
    addChildren((children) => [...children, headersButtons]);
  };
  const onDeleteBtnClick = () => {
    addChildren((children) => children.slice(0, -1));
  };
  useEffect(() => {
    addChildren(() => [headersButtons]);
  }, []);

  const headersButtons = (
    <div key={children.length} className='flex w-full items-center'>
      <div className='flex items-center justify-center mr-4 gap-5'>
        <label htmlFor=''>Header</label>
        <input
          className='border-b-2 border-border-default w-2/5 padding-headers-input '
          type='text'
          name='header-key'
          placeholder='Key'
        />
      </div>
      <div className='flex items-center justify-center mr-4 gap-5'>
        <label htmlFor=''>Header</label>
        <input
          className='border-b-2 border-border-default w-2/5 padding-headers-input'
          type='text'
          name='header-value'
          placeholder='Value'
        />
      </div>
      <img onClick={ onDeleteBtnClick} src='delete-icon.svg' className='size-6.5' alt='delete-icon' />
    </div>
  );

  return (
    <div className='w-full flex flex-col gap-4 p-4 border-2 border-gray-400 rounded-xl' ref={ref}>
      <div className='flex items-center justify-between'>
        <h4 className='font-bold'>Headers: </h4>
        <button onClick={onHandleClick} className='border-main border-2 rounded-xl p-2.5 '>
          Add headers button
        </button>
      </div>
      {/* {headersButtons} */}
      {children}
    </div>
  );
};

export default HeadersEditorComponent;
