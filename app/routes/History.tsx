import React from 'react';
import { returnedFirestore } from '~/firebase/apicalls';

function History() {
  let history;


  const getHistory = async () => {
    history = await returnedFirestore()
    console.log('history returned');


  }



  return <section className='p-4 relative w-full h-full'>
    <div>
      <button onClick={getHistory} className='p-2.5 border bg-amber-300'>get history</button>
    </div>
    <div className='h-[100px] border '>
      <h2>history</h2>
      <pre>
        { history}
      </pre>
    </div>
  </section>;
}

export default History;
