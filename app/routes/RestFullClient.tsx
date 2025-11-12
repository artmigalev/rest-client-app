import React, { useEffect, useState } from 'react';
import {
  createPath,
  data,
  Form,
  generatePath,
  href,
  redirect,
  replace,
  useActionData,
  useFetcher,
  useNavigate,
} from 'react-router';
import HeadersEditorComponent from '~/components/restfull-client/HeadersEditorComponent';
import MethodSelectorComponent from '~/components/restfull-client/MethodSelectorComponent';
import TextInputForEndpointURLComponent from '~/components/restfull-client/TextInputForEndpointURLComponent';
import type { Route } from './+types/RestFullClient';

export interface IRestFullClient {
  options: {
    methodSelector: string;
    textInput: string;
    headers: ({ key: string; value: string } | null)[];
  };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  try {

    const { method, encodedUrl } = params;
    const decodeUrl = decodeURIComponent(atob(encodedUrl || ''));
    const url = 'https://' + decodeUrl;
    const response = await fetch(url, {
      method: method || 'GET',
    });
    if (!response.ok) {
      throw new Error
    }
    const data = await response.json();
    return {data,url,method}

  } catch (error) {
    if (error instanceof Error) {

      return { message: error.message }

    }
  }



}

export async function clientAction({ request }: Route.ClientActionArgs) {
  try {
    const formdata = await request.formData();
    const baseUrl = String(formdata.get('base-url'));
    const methodSelect = String(formdata.get('select-lang'));
    // console.log(methodSelect);
    if (!baseUrl) {
      throw new Error('URL не может быть пустым');
    }

    const path = href('/rest-client/:method?/:encodedUrl?', {
      method: methodSelect.toUpperCase(),
      encodedUrl: encodeURIComponent(btoa(baseUrl.replace('https://', ''))),
    });
    return redirect(path);

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

function RestFullClient({loaderData}: Route.ComponentProps) {
  const [options, setOptions] = useState<IRestFullClient['options']>({
    methodSelector: 'GET',
    textInput: '',
    headers: [],
  });
  const error = loaderData
  const data = loaderData
  console.log(data, 'loader');
  




  return (
    <div className='flex flex-col  p-3 pt-5'>
      <Form method='post' className='flex flex-col gap-4 items-center justify-between'>
        <div className='flex flex-row w-full'>
          <MethodSelectorComponent defaultMethod={options.methodSelector} provider={setOptions} />
          <TextInputForEndpointURLComponent dispatcher={setOptions} defaultValue={options.textInput} />
          <button
            type='submit'
            className='text-4xl! bg-input-bg h-full   flex items-center justify-center pr-2.5 rounded-t-xl rounded-b-xl cursor-pointer relative pb-3'
          >
            📨
          </button>
        </div>
        <HeadersEditorComponent setOptions={setOptions} />
      </Form>
    </div>
  );
}

export default RestFullClient;
