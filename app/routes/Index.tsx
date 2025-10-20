import React from 'react';
import Header from '~/components/Header';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '~/components/Footer';

export async function clientLoader() {
  const res = await fetch('locales/en/header.json');

  return await res.json();
}

function Index() {
  const data = useLoaderData<typeof clientLoader>();

  return (
    <div className='w-full   flex-1 h-full flex  flex-col items-center content-center p-4  max-sm:p-0'>
      <Header {...data} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Index;
