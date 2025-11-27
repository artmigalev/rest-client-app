import React from 'react';
import type { Route } from './+types/History';
import { getHistory, type newUserCollection, type PayloadHistory } from '~/firebase/apicalls';
// import { returnedFirestore } from '~/firebase/apicalls';

export const clientLoader = async ({
  request,
}: Route.ClientLoaderArgs): Promise<{ metrics: newUserCollection['history'] }> => {
  const response = await getHistory('example@yahoo.com');
  return { metrics: response };
};

const History = ({loaderData, actionData,params} : Route.ComponentProps) =>  {

  const { metrics} =loaderData

  if (!loaderData.metrics.length) {
    return <h2 >You haven't executed any requests yet</h2>;
  }



  return (
    <section className='p-4 relative w-full h-full flex flex-col items-center'>
      <ul className='flex flex-col gap-4'>

      {metrics.map((item: PayloadHistory) => (
        <li className='flex flex-col items-start'>
          <span >endpoint: {item.endpointURL}</span>
          <span>Request Duration (Latency): {item.requestDuration}</span>
          <span>Response Status Code: {item.responseStatusCode}</span>
          <span>Request Timestamp: {item.requestTimestamp}</span>
          <span>Request Method: {item.requestMethod}</span>
          <span>Request Size: {item.requestSize}</span>
          <span>Response Size: {item.responseSize}</span>
          {item.errorDetails && <span>Error Details: {item.errorDetails}</span>}
        </li>
      ))}
      </ul>
    </section>
  );
}

export default History;
