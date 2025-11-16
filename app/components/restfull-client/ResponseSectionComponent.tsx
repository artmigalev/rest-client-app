import React from "react";

const ResponseSectionComponent = (data) => {


  return (
    <section className='h-full w-full'>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default ResponseSectionComponent;
