import React from 'react';

function TextInputForEndpointURLComponent() {
  return (
    <div className='field flex flex-row items-center gap-1'>
      <label htmlFor=''>Endpoint</label>
      <div className='border w-max p-1 rounded-[8px]'>
        <input className='border bg-gray-500' />
        <button type='submit' className='p-1'>
          Go
        </button>
      </div>
    </div>
  );
}

export default TextInputForEndpointURLComponent;
