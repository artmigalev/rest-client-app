import React from 'react';
import { useDataResponse } from '~/routes/RestFullClient';
import type { Route } from '../../routes/+types/RestFullClient';
import { useLoaderData } from 'react-router';

export const clientLoader = async ({ request, params }: Route.ClientLoaderArgs) => {
  try {
    const { encodedUrl, method } = params;
    if (!encodedUrl) {
      throw new Error('Please input endpoint');
    }
    const url = new URL(request.url);
    const headerParams = url.searchParams.get('headers');

    const decoderURL = decodeURIComponent(atob(encodedUrl || '')).trim();
    const fullUrl = ''.concat(...['https://', decoderURL]);
    const headerObj: HeadersInit = {};
    if (headerParams) {
      const headers = JSON.parse(headerParams) as [];
      headers.forEach((header: { key: string; value: string }) => {
        if (header.key && header.value) {
          headerObj[header.key] = header.value;
        }
      });
    }
    const response = await fetch(fullUrl, {
      method: method,
      headers: headerObj,
    });
    if (!response.ok) {
      throw new Error('not valid endpoint');
    }

    const data = await response.json();
    return { responseData: data };
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return { error: error.message };
    }
  }
};

const ResponseSectionComponent = () => {
  const loaderData = useLoaderData<typeof clientLoader>();

  if (loaderData?.error)
    return <i className='w-max text-center top-[50%] font-bold m-auto! text-main'>{loaderData.error}</i>;
  return (
    <section className='h-full w-full block'>
      <pre>
        <code className='text-green-950'>{JSON.stringify(loaderData?.responseData, null, 2)}</code>
      </pre>
    </section>
  );
};

export default ResponseSectionComponent;
