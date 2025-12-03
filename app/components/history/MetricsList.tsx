import React, { Suspense, use, useRef, useState } from 'react';
import type { IMetricItem } from './MetricItem';
import MetricItem from './MetricItem';
import type { PayloadHistory } from '~/firebase/apicalls';

interface IMetricList {
  listItems: PayloadHistory[];
}

const MetricsList = ({ listItems }: IMetricList) => {
  const [items, setItems] = useState<IMetricList['listItems']>(listItems);
  const onDeleteItem = (key:string) => {
    setItems((prev) => prev.filter((item) => key !== item.requestTimestamp));
  };

  return (
    <ul className='w-full h-full metric-list'>
      {items.map((item) => (
        <li  key={item.requestTimestamp}>
          <MetricItem  {...items } dispatcher={onDeleteItem}    />
        </li>
      ))}
    </ul>

  );
};

export default MetricsList;
