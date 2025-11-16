import { HTTPSnippet, type ClientId, type TargetId } from 'httpsnippet-lite';
import { targets } from '/node_modules/httpsnippet-lite/dist/esm/targets/targets.mjs';
import { Activity, useEffect, useState, type ChangeEvent } from 'react';
// import type { Itargets } from '~/@types/target';
import type { ClientInfo, Target, TargetInfo } from 'node_modules/httpsnippet-lite/dist/types/targets/targets';
import { usePropsRestClient } from '~/routes/RestFullClient';
import { useLocation } from 'react-router';

export type targetsType = Record<TargetId, Target>;

export interface IGenerateCodeSectionComponent {
  baseUrl: string;
  methodSelect: string;
}

const GenerateCodeSectionComponent = () => {
  const [name, setName] = useState<TargetId>('javascript');
  const [clients, setClients] = useState(targets['javascript'].clientsById);
  const [clientById, setClientById] = useState<ClientId>('');
  const [code, setCode] = useState<string | string[] | null>('');
  const { url, method } = usePropsRestClient();
  const location = useLocation();

  // console.log(targets);

  const onHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (Object.hasOwn(targets, value)) {
      setName(value as TargetId);
    } else {
      setClientById(value);
    }
  };
  const generateCode = async (name: TargetId, clientById: ClientId) => {
    const snippet = new HTTPSnippet({
      method: method,
      url: url,
    });
    const options = { indent: '\t' };
    const output = await snippet.convert(name, clientById, options);
    setCode(output);
  };
  if (location.pathname.includes('code-generate')) {
    generateCode(name, clientById);
  }

  useEffect(() => {
    if (name) {
      const { clientsById } = targets[name];

      setClients(clientsById);
    }
  }, [name, clientById]);

  const targetKeys = Object.keys(targets);

  return (
    <section className='padding-headers-input'>
      <select
        onChange={onHandleChange}
        className='text-main h-12 text-base text-center p-2.5 rounded-xl relative border-gray-400 border-2    '
        name='langName'
        value={name}
        id=''
      >
        {targetKeys.map((k) => {
          const { key, title } = targets[k].info as TargetInfo;
          return (
            <option value={key} key={key}>
              {title}
            </option>
          );
        })}
      </select>
      <select
        onChange={onHandleChange}
        className='text-main h-12 text-base text-center p-2.5 rounded-xl relative border-gray-400 border-2    '
        name='langName'
        value={clientById}
        id=''
      >
        {Object.keys(clients).map((client) => {
          const { key, title } = clients[client].info as ClientInfo;
          return (
            <option value={key} key={key}>
              {title}
            </option>
          );
        })}
      </select>

      <Activity mode={code ? 'visible' : 'hidden'}>
        <pre className='bg-generate-code-bg  w-full rounded-2xl h-max overflow-scroll p-2.5'>
          <code className=' '>{code}</code>
        </pre>
      </Activity>
    </section>
  );
};

export default GenerateCodeSectionComponent;
