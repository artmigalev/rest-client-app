import React, { type ChangeEvent, type Dispatch } from 'react';
import { useFetcher } from 'react-router';

function TextInputForEndpointURLComponent() {
  return (
    <div id='container'>
      <label htmlFor='url-endpoint'>URL</label>
      <div className='flex flex-row w-full'>
        <input className='input-url' type='text' name='url-endpoint' id='' />
        <button className='btn-endpoint'>Search</button>
      </div>
    </div>
  );
}

export default TextInputForEndpointURLComponent;
