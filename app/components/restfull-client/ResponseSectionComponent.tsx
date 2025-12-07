import React, { Activity, useEffect } from 'react';
// import { useDataResponse } from '~/routes/RestFullClient';
import type { Route } from '../../routes/+types/RestFullClient';
import { useFetcher, useLoaderData } from 'react-router';
import type { ClientResponse } from '~/routes/RestFullClient';
import { HydrateFallBack } from '~/root';

const ResponseSectionComponent = () => {
  const fetcher = useFetcher<ClientResponse>({ key: 'client-action' });

  return (
    <section className='h-full flex flex-row   w-full  p-4'>
      <Activity mode={fetcher.data ? 'hidden' : 'visible'}>
        <p className='w-max text-center text-2xl  font-bold m-auto! text-main'>Please paste to endpoint</p>
      </Activity>
      {fetcher.state === 'submitting' && <HydrateFallBack />}

      {fetcher.data?.error && (
        <i className='w-max text-center text-2xl  font-bold m-auto! text-main'>{fetcher.data?.error}</i>
      )}
      <Activity mode={fetcher.data?.responseData ? 'visible' : 'hidden'}>
        <pre>
          <code className='font-bold'>{JSON.stringify(fetcher.data?.responseData, null, 4)}</code>
        </pre>
      </Activity>
    </section>
  );
};

export default ResponseSectionComponent;
