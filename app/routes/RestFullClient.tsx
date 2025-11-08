import React, { useEffect, useState } from 'react';
import { Form } from 'react-router';
import HeadersEditorComponent from '~/components/restfull-client/HeadersEditorComponent';
import MethodSelectorComponent from '~/components/restfull-client/MethodSelectorComponent';
import TextInputForEndpointURLComponent from '~/components/restfull-client/TextInputForEndpointURLComponent';

export interface IRestFullClient {
  options: {
    methodSelector: string;
    textInput: string;
  };
}

function RestFullClient() {
  const [options, setOptions] = useState<IRestFullClient['options']>({ methodSelector: 'GET', textInput: ' ' });

  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <div className='flex flex-col  p-3 pt-5'>
      <Form className='flex flex-col gap-4 items-center justify-between'>
        <div className='flex flex-row w-full'>
          <MethodSelectorComponent defaultMethod={options.methodSelector} provider={setOptions} />
          <TextInputForEndpointURLComponent dispatcher={setOptions} defaultValue={options.textInput} />
        </div>
        <HeadersEditorComponent />
      </Form>
    </div>
  );
}

export default RestFullClient;
