import React, { useEffect, useRef, useState } from 'react';
import type { Route } from './+types/History';
import { getHistory, type PayloadHistory } from '~/firebase/apicalls';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '~/firebase';
import MetricsList from '~/components/history/MetricsList';
import type { ClientLoaderFunction } from 'react-router';



export const clientLoader = async ({ request }: Route.ClientLoaderArgs) => {
  const userCredential: User = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });

  const { email} = userCredential;

  const data = await getHistory(email!, null);

  return {
    metrics: data.metrics,
    lastSnapshot: data.lastSnapshot,
    email: email,
  };
};

const History = ({ loaderData }: Route.ComponentProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState(loaderData.metrics);
  const [lastItem, setLastItem] = useState(loaderData.lastSnapshot);

  const onDeleteItem = (key: string) => {
    setItems((prev) => prev.filter((item) => key !== item.requestTimestamp));
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        console.log('hi I am observe');
        getHistory(loaderData.email, lastItem).then((resolve) => {
          setItems((prev) => [...prev, ...resolve.metrics]);
          setLastItem(resolve.lastSnapshot);
        });
        console.log(items.length);
      }
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className='flex flex-col   h-full history-page'>
      <MetricsList destroy={onDeleteItem} target={targetRef} listItems={items} />
    </section>
  );
};

export default History;
