
export interface IFetchWithSizesResult {
  response: Response;
  metrics: {
    requestSize: number; // in bytes
    responseSize: number; // in bytes
    duration: number; // in milliseconds
    status: number;
    ok: boolean;
    url: string;

  }
}




export  const fetchWithSizes = async (input: string, init: RequestInit = {}) : Promise<IFetchWithSizesResult> => {





  const performanceNow = Date.now();

   let requestSize = 0;


  if (init.method === 'POST' || init.method === 'PUT') {

    if (init.body) {
      if (typeof init.body === 'string') {
        requestSize = new TextEncoder().encode(init.body).length;
      } else if (init.body instanceof Blob) {
        requestSize = init.body.size;
      } else if (init.body instanceof ArrayBuffer) {
        requestSize = init.body.byteLength;
      } else if (init.body instanceof FormData) {
        const encoder = new TextEncoder();
        for (const [key, value] of init.body.entries()) {
          requestSize += encoder.encode(key).length;
          if (typeof value === 'string') requestSize += encoder.encode(value).length;
        }
      }
    }
  }




  const response = await fetch(input, init)
  const timeEnd = Date.now()


  const clone = response.clone();
  const buffer = await clone.arrayBuffer();
  const responseSize = buffer.byteLength;

  return {
    response,
    metrics: {
      requestSize,
      responseSize,
      duration: Math.round(timeEnd - performanceNow),
      status: response.status,
      ok: response.ok,
      url: response.url
    }
  }


}
export default fetchWithSizes;