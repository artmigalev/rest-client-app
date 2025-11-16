import { useState } from 'react';
import { Form, href, NavLink, Outlet, redirect, useLocation, useOutletContext, type ClientLoaderFunction } from 'react-router';
import HeadersEditorComponent from '~/components/restfull-client/HeadersEditorComponent';
import MethodSelectorComponent from '~/components/restfull-client/MethodSelectorComponent';
import TextInputForEndpointURLComponent from '~/components/restfull-client/TextInputForEndpointURLComponent';
import type { Route } from './+types/RestFullClient';
// import GenerateCodeSectionComponent from '~/components/restfull-client/GenerateCodeSectionComponent';

export interface IRestFullClient {
  options: {
    methodSelector: string;
    textInput: string;
    headers: ({ key: string; value: string } | null)[];
  };
  contextType: {
    url: string;
    method: string;
    data: Promise<Response['json']>
    message: string
  };
}

export async function clientLoader({ params, request }: Route.ClientLoaderArgs) {
  try {
    const { method, encodedUrl } = params;
    const url = new URL(request.url)
    const headersParams = url.searchParams.get('headers')
     const headers = headersParams ? JSON.parse(headersParams) : [];


    const decodeUrl = decodeURIComponent(atob(encodedUrl || '')).trim();
    const fullUrl = 'https://' + decodeUrl;


    const headersObj: HeadersInit = {}
    headers.forEach((header:{key:string, value:string}) => {
      if (header.key && header.value) {
        headersObj[header.key] = header.value
      }
    });

    const response = await fetch(fullUrl, {
      method: method || 'GET',
      headers:headersObj
    });


    if (!response.ok) {
      throw new Error( 'not valid endpoint');
    }
    const data = await response.json();
    // console.log(response);
    // console.log(data);
    return { data, url, method };
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }
  }
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  try {
    const formdata = await request.formData();
    const baseUrl = String(formdata.get('base-url'));
    const methodSelect = String(formdata.get('select-lang'));
    const headers = String(formdata.get('headers'))

    // if (!baseUrl) {
    //   throw new Error('URL не может быть пустым');
    // }

    const path = href('/rest-client/:method?/:encodedUrl?', {
      method: methodSelect.toUpperCase(),
      encodedUrl: encodeURIComponent(btoa(baseUrl.replace('https://', ''))),
    });

    const url = new URL(path, location.origin)
    console.log(url);

    if (headers.length) {
      console.log(headers);

      url.searchParams.set('headers', headers)
    }
    return redirect(url.toString());
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

function RestFullClient({ loaderData, params }: Route.ComponentProps) {
  const [options, setOptions] = useState<IRestFullClient['options']>({
    methodSelector: 'GET',
    textInput: '',
    headers: [],
  });

  const data = loaderData;
  // console.log(location);

  return (
    <div className='flex flex-col  p-3 pt-5 h-full'>
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
        <input type='hidden' name='headers' value={JSON.stringify(options.headers)} />
      </Form>
      <nav className='w-full py-2'>
        <ul className='flex  bg-gray-400 rounded-2xl w-full '>
          <li className=' text-center  padding-tabs w-full '>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              to='code-generate'
              end
              viewTransition
            >
              Generate Code
            </NavLink>
          </li>
          <li className='text-center padding-tabs w-full '>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to='response' end>
              Response
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='child-container w-full overflow-x-scroll h-[60vh] bg-gray-400 rounded-2xl px-4 padding-tabs'>
        <Outlet
          context={
            {
              url: data?.url || 'https://example.com',
              method: data?.method || 'GET',
              data: data?.data,
              message: data?.message || '',
            } satisfies IRestFullClient['contextType']
          }
        />
      </div>
    </div>
  );
}

export const usePropsRestClient = () => {
  return useOutletContext<Pick<IRestFullClient['contextType'],'method' | 'url'>>();
};

export const useDataResponse = () => {
  return useOutletContext<Pick<IRestFullClient['contextType'],'data' | 'message'>>();
}

export default RestFullClient;
