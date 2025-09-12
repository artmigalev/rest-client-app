import React, { useRef, useState } from 'react';
import FieldClient from './Field';

const Client = () => {
  const fieldRefKey = useRef(0);
  const [fieldIds, setFieldIds] = useState<number[]>([fieldRefKey.current]);

  const removeField = (id: string) => {
    setFieldIds((prev) => prev.filter((fieldId) => fieldId.toString() !== id));
  };

  const addField = () => {
    fieldRefKey.current += 1;
    setFieldIds((prev) => [...prev, fieldRefKey.current]);
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-center text-5xl">REST Client</h3>
      <ul className="pl-0 w-full mt-4 flex flex-col items-start p-4 m-0">
        {fieldIds.map((id) => (
          <FieldClient key={id} id={id.toString()} fnRemove={removeField} />
        ))}
      </ul>
      <button onClick={addField}>Add</button>
    </div>
  );
};

export default Client;
