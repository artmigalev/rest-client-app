import React from 'react';
import type { Route } from './+types/History';
import { getHistory, type PayloadHistory } from '~/firebase/apicalls';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '~/firebase';
import MetricsList from '~/components/history/MetricsList';

export const clientLoader = async ({ request }: Route.ClientLoaderArgs): Promise<{ metrics: PayloadHistory[] }> => {
  const userCredential: User = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  const { email, displayName } = userCredential;
  // console.log(displayName);
  if (email) {
  }

  const history = await getHistory(email);
  console.log(history, 'History');

  return {metrics:history}
};

const History = ({ loaderData }: Route.ComponentProps) => {

  // console.log(loaderData);


  return (
    <section className='flex flex-col   h-full history-page'>
      <MetricsList listItems={loaderData.metrics} />
    </section>
  );
};

export default History;
