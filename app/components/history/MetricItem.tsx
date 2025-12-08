import React, { Activity, useRef } from 'react';
import { href, Link } from 'react-router';
import type { PayloadHistory } from '~/firebase/apicalls';
type Metric = PayloadHistory;

export interface IMetricItem  {
  dispatcher: (key: Metric['requestTimestamp']) => void;
  item:Metric
}

const MetricItem = ({ dispatcher, item }: IMetricItem) => {
  const itemref = useRef(null);

  const remove = (item: Metric) => {
    if (itemref.current && 'remove' in itemref.current) {
      const card = itemref.current as HTMLDivElement;

      card.classList.add('item-remove');
      setTimeout(() => {
        dispatcher(item.requestTimestamp);
        console.log('item remove');
      }, 1000);
    }
  };

  return (
    <div ref={itemref} className='metric-item relative'>
      <div className='content-container'>
        <div className='item-field'>
          <span className='key '>Endpoint:</span>
          <Link
            to={href('/client/:method?/:encodedUrl?', {
              method: item.requestMethod,
              encodedUrl: encodeURI(btoa(item.endpointURL)),
            })}
            className='value url'
          >
            {item.endpointURL || 'link to endpoint'}
          </Link>
        </div>
        <div className='item-field'>
          <span className='key'>Request Duration (Latency):</span>
          <span className='value'> {item.requestDuration}</span>
        </div>
        <div className='item-field'>
          <span className='key'>Response Status Code:</span>
          <span className='value text-main!'>{item.responseStatusCode}</span>
        </div>
        <div className='item-field'>
          <span className='key'>Request Timestamp:</span>
          <span className='value border-b-2'>{item.requestTimestamp}</span>
        </div>
        <div className='item-field'>
          <span className='key'>Request Method:</span>
          <span className='value  text-main!'>{item.requestMethod}</span>
        </div>
        <div className='item-field'>
          <span className='key'>Request Size:</span>
          <span className='value'>{item.requestSize}</span>
        </div>
        <div className='item-field'>
          <span className='key'>Response Size:</span>
          <span className='value'>{item.responseSize}</span>
        </div>
        <Activity mode={item.errorDetails ? 'visible' : 'hidden'}>
          <div className='item-field'>
            <span className='key'>Error Details:</span>
            <span className='value'>{item.errorDetails}</span>
          </div>
        </Activity>
      </div>
      <img onClick={() => remove(item)} className='w-5 h-max  cursor-pointer' src='delete-icon.svg' alt='' />
    </div>
  );
};

export default MetricItem;
