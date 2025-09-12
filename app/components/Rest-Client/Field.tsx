import { useEffect, useState, type ChangeEvent, type JSX } from 'react';
import { useForm } from 'react-hook-form';
import { Select } from './Select';
import { cache, method, mode, redirect, referrer } from '~/config/variables';
import { Input } from './Input';
import './styles.css';
interface FieldClient {
  props: {
    id: string;
    fnRemove: (id: string) => void;
  };
}

const FieldClient = (): JSX.Element => {
  const [selectMethod, setSelectMethod] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState({
    mode: mode[0],
    cache: cache[0],
    redirect: redirect[0],
    referrer: referrer[0],
  });
  const { register } = useForm();
  const onSelect = (e: React.ChangeEvent<HTMLOptionElement>) => {
    setSelectMethod(e.target.value);
    setInputValue(inputValue.replace(selectMethod, ''));
  };
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setInputValue(input.value);
  };
  const onSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const select = e.target;
    const newOpt = {
      [select.name]: select.value,
    };
    setOptions((prev) => ({ ...prev, ...newOpt }));
  };
  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <fieldset className="w-[100%] p-[1rem]">
      <fieldset className="flex justify-normal w-[100%] flex-row items-center  gap-[1rem] p-[1rem] ">
        <Select
          register={register}
          options={method}
          name="method"
          {...{ value: selectMethod, onChange: onSelect, id: 'select-method' }}
        />
        <label htmlFor="endpoint">URL Endpoint</label>
        <Input
          register={register}
          name="endpoint"
          {...{
            placeholder: 'Endpoint URL',
            onChange: onChangeInput,
            value: inputValue
              ? `${inputValue.replace(selectMethod, '')}${selectMethod}`
              : selectMethod,
          }}
        />
      </fieldset>
      <fieldset>
        <legend>Headers</legend>
        <label htmlFor="">Content-Type</label>
        <Select
          register={register}
          {...{ disabled: true }}
          name="content-type"
          options={['application/json', 'application/x-www-form-urlencoded']}
        />
      </fieldset>

      <fieldset className="field-options border rounded-2xl p-[1rem] flex flex-row items-center gap-[1rem]">
        <legend>Options</legend>
        <label htmlFor="mode">Mode</label>
        <Select
          register={register}
          name="mode"
          options={mode}
          {...{ onChange: onSelectOption }}
        />
        <label htmlFor="cache">Cache</label>
        <Select
          register={register}
          name="cache"
          options={cache}
          {...{ onChange: onSelectOption }}
        />
        <label htmlFor="redirect">Redirect</label>
        <Select
          register={register}
          name="redirect"
          options={redirect}
          {...{ onChange: onSelectOption }}
        />
        <label htmlFor="redirect">Referrer Policy</label>
        <Select
          register={register}
          name="referrer"
          options={referrer}
          {...{ onChange: onSelectOption }}
        />
      </fieldset>
    </fieldset>
  );
};

export default FieldClient;
