import React from 'react';
import { useDataResponse } from '~/routes/RestFullClient';
import type { Route } from '../../routes/+types/RestFullClient';
import { useLoaderData } from 'react-router';



const ResponseSectionComponent = () => {
    const {responseData,error}= useDataResponse()

  if (error)
    return <i className='w-max text-center top-[50%] font-bold m-auto! text-main'>{error}</i>;
  return (
    <section className='h-full w-full block'>
      <pre>
        <code className='text-green-950'>{JSON.stringify(responseData, null, 2)}</code>
      </pre>
    </section>
  );
};

export default ResponseSectionComponent;
