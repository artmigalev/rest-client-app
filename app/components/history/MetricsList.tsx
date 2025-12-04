import React, { useState } from 'react';
import MetricItem from './MetricItem';
import type { PayloadHistory } from '~/firebase/apicalls';
import { HydrateFallBack } from '~/root';

interface IMetricList {
  listItems: PayloadHistory[];
}

const MetricsList = ({ listItems }: IMetricList) => {
  const [items, setItems] = useState<IMetricList['listItems']>(listItems);
  const onDeleteItem = (key: string) => {
    setItems((prev) => prev.filter((item) => key !== item.requestTimestamp));
  };
  if (!items) {
    return <HydrateFallBack/>
  }
  return (
    <ul className='w-full h-full metric-list'>
      {items.map((item, index) => (
        <li key={item.requestTimestamp + index}>{item && <MetricItem item={item} dispatcher={onDeleteItem} />}</li>
      ))}
    </ul>
  );
};

export default MetricsList;
