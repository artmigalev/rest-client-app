import { Form, href, NavLink, Outlet, useFetcher, useNavigate, useNavigation } from 'react-router';
import type { Route } from './+types/RestFullClient';
import { useEffect } from 'react';
import fetchWithSizes from '~/utils/fetchWrapper';
import { init } from 'i18next';
import { createdPayloadHistory } from '~/utils/createdPayloadHistory';
import { credentialUser, updateUserHistory } from '~/firebase/apicalls';

// export const clientLoader = async ({ request, params }: Route.ClientLoaderArgs) => {

//   const { method, encodedUrl } = params
//   let result = {
//     error: '',
//     dataResponse:''
//   }
//   if (!encodedUrl?.length) {
//     throw new Error('Endpoint empty')
//   }
//   try {

//   } catch (error) {
//     if (error instanceof Error) {
//       result.error =error.message
//     }
//     return result

//   }

// };
export type ClientResponse = {
  success: boolean;
  pathname: string;
  error: null | string;
  responseData?: { [key: string]: string } | { [key: string]: string }[];
};

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const baseUrl = String(formData.get('url-endpoint'));

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

    const requestPayload = await fetchWithSizes(baseUrl, { method: 'GET' });

    const data = await requestPayload.response.json();

    clientResponse.responseData = data;

    const metricPayload = await createdPayloadHistory(requestPayload.response, requestPayload.metrics, 'GET');

    const { email } = await credentialUser();
    await updateUserHistory(email, metricPayload);

    const path = href('/client/:method?/:encodedUrl?', {
      method: 'get',
      encodedUrl: encodeURI(btoa(baseUrl)),
    });
    const url = new URL(path, location.origin);
    clientResponse.pathname = url.pathname;
    clientResponse.success =true
    return clientResponse;
  } catch (error) {
    if (error instanceof Error) {
      clientResponse.error = error.message
    }
      if (error instanceof TypeError) {
        clientResponse.error = 'Invalid URL';
      }
    return clientResponse;
  }
}

function RestFullClient() {
  const fetcher = useFetcher<typeof clientAction>({ key: 'client-action' });
  const stateLink = ({ isActive, isPending }) => ({
       color:
          isActive ? "red" :
          isPending ? "blue" : "black"
      });
  const navigate = useNavigate();
  const navigation =useNavigation()
  useEffect(() => {
    if (fetcher.data?.success) {
        console.log(location);
      navigation.location
      const { pathname } = fetcher.data ;
      if (navigation.location?.pathname.includes('response')) {
          navigate(`${pathname}/response`)

      } else {

      }
    }
    return ()=> fetcher.data?.success
  }, [fetcher.data]);

  return (
    <section className='client'>
      <fetcher.Form method='post' key='client-action' className='form-client-endpoint'>
        <div id='container'>
          <label htmlFor='url-endpoint'>URL</label>
          <div className='flex flex-row w-full'>
            <input className='input-url' type='text' name='url-endpoint' id='' />
            <button className='btn-endpoint'>Search</button>
          </div>
        </div>
      </fetcher.Form>
      <div className='container-result'>
        <nav className='w-full py-2 flex flex-row justify-around bg-[lightgray]'>
          <NavLink className={`${stateLink} navLink`} to='response' viewTransition end>
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

// export const usePropsRestClient = () => {
//   return useOutletContext<Pick<IRestFullClient['contextType'], 'method' | 'url' | 'headers'>>();
// };

// export const useDataResponse = () => {
//   return useOutletContext<Pick<IRestFullClient['contextType'], 'responseData' | 'error'>>();
// };

export default RestFullClient;
