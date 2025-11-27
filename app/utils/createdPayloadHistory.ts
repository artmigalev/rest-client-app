import type { PayloadHistory } from '~/firebase/apicalls';
import type { IRestFullClient } from '~/routes/RestFullClient';
import type { IFetchWithSizesResult } from './fetchWrapper';

export const createdPayloadHistory = async (
  response: Response,
  metrics: IFetchWithSizesResult['metrics'],
  method: IRestFullClient['options']['methodSelector'],
): Promise<PayloadHistory | string> => {
  if (!response || !metrics) {
    console.log('no valid data');
    throw new Error('exit');
  }

  const { status, url, ok, statusText } = response;
  const start = Math.floor(performance.now() / 1000);

  const date = new Date(Date.now());
  const timeStamp = date.toLocaleString('en-US', { hour12: true });

  const payload: PayloadHistory = {
    responseStatusCode: status,
    requestTimestamp: timeStamp,
    requestMethod: method as IRestFullClient['options']['methodSelector'],
    endpointURL: metrics.url,
  };

  try {
    if (!ok) {
      throw new Error(statusText);
    }
    payload['requestDuration'] = new Date(metrics.duration).getMilliseconds();


    payload['responseSize'] = metrics.responseSize;
    payload['requestSize'] =metrics.requestSize;

    console.log('created payload', payload);


    return payload;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      if (error.message === 'exit') {
        return error.message;
      }
      payload['errorDetails'] = error.message;
    }
    return payload;
  }

  // let errorMessage;
  // if(status === 404) errorMessage='Not found'
  // if(status === 500) errorMessage='Not found'
};
