import React from 'react';
import MetricsList from '~/components/history/MetricsList';
import type { Route } from './+types/History';
import type { IMetricItem } from '~/components/history/MetricItem';
import { getHistory, type PayloadHistory } from '~/firebase/apicalls';
import { onAuthStateChanged, type Unsubscribe, type User, type UserCredential } from 'firebase/auth';
import { auth } from '~/firebase';






export const clientLoader = async ({ request }: Route.ClientLoaderArgs): Promise<{ metrics: PayloadHistory[] }> => {
  const userCredential: User = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  const { email, displayName } = userCredential;
  console.log(displayName);
  if (email) {
  }

  const history = await getHistory(email);
  console.log(history, 'History');

  return { metrics: history };
};


const  History = ({loaderData}:Route.ComponentProps)=> {
  return (
    <section className='flex flex-col w-full pl-2 pr-2   h-full history-page'>
      <MetricsList listItems={loaderData.metrics as IMetricItem[]} />
    </section>
  );
}

export default History;
