import React from 'react';
import FieldClient from './Field';
import { Form } from 'react-router';

const Client = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-center text-5xl">REST Client</h3>
      <Form className="pl-0 w-full mt-4 flex flex-col items-start p-4 m-0">
        <FieldClient />
      </Form>
    </div>
  );
};

export default Client;
