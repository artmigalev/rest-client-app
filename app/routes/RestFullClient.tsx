import { useState } from 'react';
import { Form, href, NavLink, Outlet, redirect, useLocation, useOutletContext } from 'react-router';
import HeadersEditorComponent from '~/components/restfull-client/HeadersEditorComponent';
import MethodSelectorComponent from '~/components/restfull-client/MethodSelectorComponent';
import TextInputForEndpointURLComponent from '~/components/restfull-client/TextInputForEndpointURLComponent';
import type { Route } from './+types/RestFullClient';
import type { AppRoutes } from '~/routes';
// import GenerateCodeSectionComponent from '~/components/restfull-client/GenerateCodeSectionComponent';

export interface IRestFullClient {
  options: {
    methodSelector: string;
    textInput: string;
    headers: ({ key: string; value: string } | null)[];
  };
  contextType: {
    url: string
    method: string
  }
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
      throw new Error();
    }
    const data = await response.json();
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

function RestFullClient({ loaderData, params }: Route.ComponentProps) {
  const [options, setOptions] = useState<IRestFullClient['options']>({
    methodSelector: 'GET',
    textInput: '',
    headers: [],
  });
  const error = loaderData;
  const data = loaderData;
  const location = useLocation();
  // console.log(location);

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
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/code-generate'} end>
              Generate Code
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet context={{ url: data?.url || 'https://example.com', method: data?.method || 'GET'} satisfies IRestFullClient['contextType'] }  />
    </div>
  );
}


export const  usePropsRestClient = () =>  {
  return useOutletContext<IRestFullClient['contextType']>()
}

export default RestFullClient;
