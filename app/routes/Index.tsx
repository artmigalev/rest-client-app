import React from 'react';
import Header from '~/components/Header';
import type { Route } from './+types/Index';
import { Outlet, useLoaderData } from 'react-router';

export async function clientLoader() {
  const res = await fetch('locales/en/header.json');

  return await res.json();
}

function Index() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <div className='w-full   flex-1 h-full flex flex-col p-4 max-sm:p-0'>
      <Header {...data} />
      
      <Outlet />
    </div>
  );
}

export default Index;
