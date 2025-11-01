import React from 'react';
import { Form } from 'react-router';
import MethodSelectorComponent from '~/components/restfull-client/MethodSelectorComponent';
import TextInputForEndpointURLComponent from '~/components/restfull-client/TextInputForEndpointURLComponent';

function RestFullClient() {
  return (
    <div className='flex flex-col p-3'>
      <Form>
        <MethodSelectorComponent/>
        <TextInputForEndpointURLComponent/>
      </Form>
    </div>
  );
}

export default RestFullClient;
