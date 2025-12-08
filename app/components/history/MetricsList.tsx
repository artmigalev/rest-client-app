import React, { useEffect, useRef, useState } from 'react';
import MetricItem from './MetricItem';
import type { PayloadHistory } from '~/firebase/apicalls';
import { HydrateFallBack } from '~/root';

interface IMetricList {
  listItems: PayloadHistory[];
  destroy: (key: string) => void;
  target: React.RefObject<HTMLDivElement | null>;
}

const MetricsList = ({ listItems ,target , destroy }: IMetricList) => {




  if (!listItems) {
    return <HydrateFallBack />;
  }
  return (
    <ul className='w-full h-full metric-list' >
      {listItems.map((item, index) => (
        <li key={item.requestTimestamp + index}>{item && <MetricItem item={item} dispatcher={destroy} />}</li>
      ))}
      <div className='observe' ref={target}></div>
    </ul>
  );
};

export default MetricsList;
