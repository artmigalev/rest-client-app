import { useEffect, useState } from 'react';
import { Form, href, NavLink, Outlet, redirect, replace, useNavigate, useOutletContext } from 'react-router';
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
    url: string | URL;
    method: string;
    data: Promise<Response['json']>;
    message: string;
    headers: ({ key: string; value: string } | null)[];
  };
}



export async function clientAction({ request }: Route.ClientActionArgs) {
  try {
    const formdata = await request.formData();

    const baseUrl = String(formdata.get('base-url'));
    const methodSelect = String(formdata.get('method-select'));
    const headers = String(formdata.get('headers'));



    if (!baseUrl) {
      throw new Error('URL не может быть пустым');
    }

    const path = href('/:method?/:encodedUrl?', {

      method: methodSelect.toUpperCase(),
      encodedUrl: encodeURIComponent(btoa(baseUrl.replace('https://', ''))),

    });

    const url = new URL( path, location.origin);


    if (headers) {


      url.searchParams.set('headers', headers);
    }
    return {
      newUrl: url.pathname + url.search
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

function RestFullClient({ loaderData, params, actionData }: Route.ComponentProps) {


  const navigate = useNavigate()
  const data = loaderData;


  useEffect(() => {

    if(actionData?.newUrl) navigate(actionData.newUrl, {replace:true})


  },[actionData?.newUrl])

  return (
    <div className='flex flex-col  p-3 pt-5 h-full'>
      <Form method='post' action='/rest-client' className='flex flex-col gap-4 items-center justify-between'>
        <div className='flex flex-row w-full'>
          <MethodSelectorComponent  />
          <TextInputForEndpointURLComponent  />
          <button
            type='submit'
            className='text-4xl! bg-input-bg h-full   flex items-center justify-center pr-2.5 rounded-t-xl rounded-b-xl cursor-pointer relative pb-3'
          >
            📨
          </button>
        </div>
        <HeadersEditorComponent  />
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
              headers: data?.headers
            } satisfies IRestFullClient['contextType']
          }
        />
      </div>
    </div>
  );
}

export const usePropsRestClient = () => {
  return useOutletContext<Pick<IRestFullClient['contextType'], 'method' | 'url'>>();
};

export const useDataResponse = () => {
  return useOutletContext<Pick<IRestFullClient['contextType'], 'data' | 'message'>>();
};

export default RestFullClient;
