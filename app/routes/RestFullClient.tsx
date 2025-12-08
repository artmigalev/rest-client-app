import { Form, href, NavLink, Outlet, useFetcher, useNavigate, useNavigation } from 'react-router';
import type { Route } from './+types/RestFullClient';
import { useEffect } from 'react';
import fetchWithSizes from '~/utils/fetchWrapper';
import { init } from 'i18next';
import { createdPayloadHistory } from '~/utils/createdPayloadHistory';
import { credentialUser, updateUserHistory } from '~/firebase/apicalls';
import TextInputForEndpointURLComponent from '~/components/restfull-client/TextInputForEndpointURLComponent';
import MethodSelectorComponent from '~/components/restfull-client/MethodSelectorComponent';
import HeadersEditorComponent from '~/components/restfull-client/HeadersEditorComponent';
import { aC } from 'node_modules/react-router/dist/development/routeModules-D5iJ6JYT';

export type ClientResponse = {
  success: boolean;
  pathname: string;
  error: null | string;
  responseData?: { [key: string]: string } | { [key: string]: string }[];
};

export const clientLoader = async ({ request, params }: Route.ClientLoaderArgs) => {

  const decoderURL = decodeURIComponent(atob(params.encodedUrl || '')).trim();

  return {url: decoderURL }
};

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const baseUrl = String(formData.get('url-endpoint'));
  const method = String(formData.get('method-select'));
  const headerParams = String(formData.get('headers'));

  let clientResponse: ClientResponse = {
    success: false,
    pathname: '/client',
    error: null,
  };

  try {
    if (!String(baseUrl).length) {
      throw new Error('Endpoint is empty ');
    }
    new URL(baseUrl);

    const headerObj: HeadersInit = {};
    if (headerParams) {
      const headers = JSON.parse(headerParams);
      headers.forEach((header: { key: string; value: string }) => {
        if (header.key && header.value) {
          headerObj[header.key] = header.value;
        }
      });
    }

    const requestPayload = await fetchWithSizes(baseUrl, { method: method, headers: headerObj });

    const data = await requestPayload.response.json();

    clientResponse.responseData = data;
    clientResponse.success=true
    const metricPayload = await createdPayloadHistory(requestPayload.response, requestPayload.metrics, 'GET');
    const {email}= await credentialUser()
    await updateUserHistory(email, metricPayload)



    const path = href('/client/:method?/:encodedUrl?', {
      method: 'get',
      encodedUrl: encodeURI(btoa(baseUrl)),
    });
    const url = new URL(path, location.origin);
    clientResponse.pathname = url.pathname;
    clientResponse.success = true;
    return clientResponse;
  } catch (error) {
    if (error instanceof Error) {
      clientResponse.error = error.message;
    }
    if (error instanceof TypeError) {
      clientResponse.error = 'Invalid URL';
    }
    return clientResponse;
  }
}

function RestFullClient({  loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher<typeof clientAction>({ key: 'client-action' });

  const navigate = useNavigate();

  const stateLink = ({ isActive, isPending }) => ({
    color: isActive ? 'red' : isPending ? 'blue' : 'black',
  });

  useEffect(() => {
    if (fetcher.data?.pathname) {

      const { pathname } = fetcher.data;
      navigate(`${pathname}/response`);

    }
  }, [fetcher.data?.pathname]);

  return (
    <section className='client'>
      <fetcher.Form method='post' action='/client' key='client-action' className='form-client-endpoint'>
        <div className='flex flex-row items-center justify-between '>
          <MethodSelectorComponent />
          <TextInputForEndpointURLComponent value={loaderData.url} />
        </div>
        <HeadersEditorComponent />
      </fetcher.Form>

      <div className='container-result '>
        <nav className='w-full py-2 flex flex-row justify-around bg-[lightgray]'>
          <NavLink style={stateLink} className={`${stateLink} navLink`} to='response' viewTransition end>
            Response Section
          </NavLink>
          <NavLink className='navLink' style={stateLink} to='code-generate' end>
            Generate Code
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
}



export default RestFullClient;
