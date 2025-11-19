import React from 'react';
import { Form } from 'react-router';
import type { IHeader } from './Header';

const BurgerMenu = (burgerProps: IHeader['burgerProps']) => {
  const { dispatcher, status } = burgerProps;
  return (
    <Form method='post' navigate={false} fetcherKey='burger-menu'>
      <input
        type='checkbox'
        name='burger'
        id='checkbox'
        checked={status}
        onChange={(e) => {
          dispatcher(e.target.checked);
        }}
      />
      <label htmlFor='checkbox' className='toggle'>
        <div className='bars' id='bar1'></div>
        <div className='bars' id='bar2'></div>
        <div className='bars' id='bar3'></div>
      </label>
    </Form>
  );
};

export default BurgerMenu;
