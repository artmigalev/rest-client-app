import { HTTPSnippet, type ClientId, type TargetId } from 'httpsnippet-lite';
// import { targets } from '/node_modules/httpsnippet-lite/dist/esm/targets/targets.mjs';
import { availableTargets } from 'httpsnippet-lite';
import { Activity, useEffect, useMemo, useState } from 'react';
// import type { Itargets } from '~/@types/target';
import type { TargetInfo } from 'node_modules/httpsnippet-lite/dist/types/targets/targets';
import { usePropsRestClient } from '~/routes/RestFullClient';
import SelectComponent from '../Select';
import type { AvailableTarget } from 'node_modules/httpsnippet-lite/dist/types/helpers/utils';
import type { Header } from '~/@types';

export interface IGenerateCodeSectionComponent {
  baseUrl: string;
  methodSelect: string;
}
const targets = availableTargets() as AvailableTarget[];

const styles = {
  stylesSelect: 'text-main h-12 text-base text-center p-2.5 rounded-xl relative border-gray-500 border-2',
};

const GenerateCodeSectionComponent = () => {
  const [target, setTarget] = useState<AvailableTarget['title']>(targets[0].key);
  const [clients, setClients] = useState<AvailableTarget['clients']>(targets[0].clients);

  const [clientById, setClientById] = useState<ClientId>(clients[0].key);
  const [code, setCode] = useState<string | string[] | null>('');
  const { url, method, headers } = usePropsRestClient();

  const onHandleChange = (value: string) => {
    if (targets.some((target) => target.key === value)) {
      setTarget(value);
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

  useEffect(() => {
    if (target || clientById) {
      generateCode(target as TargetId, clientById);
    }
  }, [target, clientById]);

  useEffect(() => {
    if (target) {
      const clients = targets.find((tr) => tr.key === target)?.clients;

      clients && setClients(clients);
    }
    if (clients) {
      setClientById(clients[0].key);
    }
  }, [target, clients]);

  const targetTitles = useMemo(() => {
    return targets.map((target) => [[target.key], target.title]);
  }, [targets]);

  const clientTitles = useMemo(() => {
    return clients.map((client) => [[client.key], client.title]);
  }, [clients]);
  return (
    <section className='padding-headers-input w-full h-full flex flex-col gap-4 '>
      <div className='flex flex-row gap-4 w-max' >
        <SelectComponent
          options={targetTitles}
          styles={styles}
          value={target as TargetInfo['title']}
          dispatcher={onHandleChange}
        />
        <SelectComponent options={clientTitles} styles={styles} dispatcher={onHandleChange} />
      </div>

      <Activity mode={code ? 'visible' : 'hidden'}>
        <pre className='bg-generate-code-bg  w-full rounded-2xl h-max overflow-auto p-3.5 scroll-m-0 generate-code'>
          <code className='text-green-950 font-bold  '>{code}</code>
        </pre>
      </Activity>
    </section>
  );
};

export default GenerateCodeSectionComponent;
