import React, { useState, type ChangeEvent, type Dispatch, type SetStateAction } from 'react';
import type { IRestFullClient } from '~/routes/RestFullClient';

interface IHeadersEditorComponent {
  props: {
    setOptions: Dispatch<React.SetStateAction<IRestFullClient['options']>>;
  };
}

const HeadersEditorComponent = ({ setOptions }: IHeadersEditorComponent['props']) => {
  const [headers, setHeaders] = useState<{ id: number; key: string; value: string }[]>([]);

  const onAddHeader = () => {
    setHeaders((prev) => [...prev, { id: Date.now(), key: '', value: '' }]);
  };

  const onDeleteHeader = (id: number) => {
    setHeaders((prev) => prev.filter((header) => header.id !== id));
  };

  const onChangeHeader = (id: number, field: 'key' | 'value', value: string) => {
    setHeaders((prev) => prev.map((header) => (header.id === id ? { ...header, [field]: value } : header)));

    setOptions((state) => ({
      ...state,
      headers: headers,
    }));
  };

  return (
    <div className='w-full flex flex-col gap-4 p-4 border-2 border-gray-400 rounded-xl'>
      <div className='flex items-center justify-between'>
        <h4 className='font-bold'>Headers:</h4>
        <button onClick={onAddHeader} className='border-main border-2 rounded-xl p-2.5'>
          Add header
        </button>
      </div>

      {headers.map((header) => (
        <div key={header.id} className='flex w-full items-center'>
          <div className='flex items-center justify-center mr-4 gap-5'>
            <label>Header</label>
            <input
              className='border-b-2 border-border-default w-2/5 padding-headers-input'
              type='text'
              placeholder='Key'
              value={header.key}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHeader(header.id, 'key', e.target.value)}
            />
          </div>
          <div className='flex items-center justify-center mr-4 gap-5'>
            <label>Value</label>
            <input
              className='border-b-2 border-border-default w-2/5 padding-headers-input'
              type='text'
              placeholder='Value'
              value={header.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHeader(header.id, 'value', e.target.value)}
            />
          </div>
          <img
            onClick={() => onDeleteHeader(header.id)}
            src='delete-icon.svg'
            className='size-6.5 cursor-pointer'
            alt='delete'
          />
        </div>
      ))}
    </div>
  );
};

export default HeadersEditorComponent;
