import React from 'react';
import { useDataResponse } from '~/routes/RestFullClient';

const ResponseSectionComponent = () => {
  const { data, message } = useDataResponse();
  // console.log(message);
  // console.log(data);


  if (message.length) return (

      <i className='w-max text-center top-[50%] font-bold m-auto! text-main'>{message}</i>
  );
  return (
    <section className='h-full w-full block'>
      {data ? (
        <pre>
          <code className='text-green-950'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ) : (
        <h5 className=' w-max relative top-[50%] font-bold m-auto!'>Please input endpoint</h5>
      )}
    </section>
  );
};

export default ResponseSectionComponent;
