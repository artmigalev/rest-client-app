import React, { useEffect, useState, type Dispatch } from 'react';
import Select, { type ISelect } from '../Select';
import type { IRestFullClient } from '~/routes/RestFullClient';

interface IMethodSelectorComponent {
  defaultMethod: string;
  dispatcher?: Dispatch<React.SetStateAction<IRestFullClient['options']>>;
}
const styles: ISelect<string>['styles'] ={
  stylesSelect: "h-12 text-base text-center p-2.5 rounded-xl relative border-gray-500 border-2"
}

const MethodSelectorComponent = () => {
  const methods = {
    get: 'GET',
    put: 'PUT',
    patch: 'PATCH'
  }

  return (
    <div >
      <Select name= {'method-select'} value={methods.get}  styles={ styles.stylesSelect } options={Object.entries(methods)} />
    </div>
  );
};

export default MethodSelectorComponent;
