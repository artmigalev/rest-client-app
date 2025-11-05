import React, { useEffect, useState } from 'react';
import { Form } from 'react-router';
import MethodSelectorComponent from '~/components/restfull-client/MethodSelectorComponent';
import TextInputForEndpointURLComponent from '~/components/restfull-client/TextInputForEndpointURLComponent';


export interface IRestFullClient {
  options: {

    methodSelector: string
    textInput:string
  }
}

function RestFullClient() {

  const [options, setOptions] = useState<IRestFullClient['options']>({ methodSelector: 'GET' ,textInput:' ' });

  useEffect(() => {
    console.log(options);

  },[options])

  return (
    <div className='flex flex-col p-3 pt-5'>
      <Form className='flex items-center justify-between'>
        <MethodSelectorComponent defaultMethod={options.methodSelector} provider={setOptions} />
        <TextInputForEndpointURLComponent dispatcher={setOptions} defaultValue = {options.textInput} />
      </Form>
      <span className='w-2/6 border-2 border-b-black  text-2xl'>{ options.textInput}</span>

    </div>
  );
}

export default RestFullClient;
