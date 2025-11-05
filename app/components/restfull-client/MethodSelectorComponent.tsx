import React, { useEffect, useState, type Dispatch } from 'react';
import Select from '../Select';
import type { IRestFullClient } from '~/routes/RestFullClient';

interface IMethodSelectorComponent {
  defaultMethod: string;
  provider: Dispatch<React.SetStateAction<IRestFullClient['options']>>;
}

const MethodSelectorComponent = ({ defaultMethod, provider }: IMethodSelectorComponent) => {
  const [method, setMethod] = useState<string>(defaultMethod);

  const methods = {
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE',
  };

  useEffect(() => {
    provider((state) => ({ ...state, methodSelector: method }));
  }, [method]);

  return (
    <div className='h-12 text-base text-center p-2.5 rounded-xl relative border-gray-400 border-2'>
      <Select value={defaultMethod} dispatcher={setMethod} options={Object.entries(methods)} />
    </div>
  );
};

export default MethodSelectorComponent;
