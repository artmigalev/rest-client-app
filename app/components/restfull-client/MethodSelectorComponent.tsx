import React, { type Dispatch } from 'react';
import Select, { type ISelect } from '../Select';
import type { IRestFullClient } from '~/routes/RestFullClient';

interface IMethodSelectorComponent {
  defaultMethod: string;
  dispatcher?: Dispatch<React.SetStateAction<IRestFullClient['options']>>;
}
const styles: ISelect<string>['styles'] = {
  stylesSelect: 'p-4 font-bold',
};

const MethodSelectorComponent = () => {
  const methods = {
    get: 'GET',
    put: 'PUT',
    patch: 'POST',
  };

  return (
    <>
      <Select
        name={'method-select'}
        value={methods.get}
        styles={styles}
        options={Object.entries(methods)}
      />
    </>
  );
};

export default MethodSelectorComponent;
