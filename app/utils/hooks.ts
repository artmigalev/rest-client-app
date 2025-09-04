import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '~/state-management/store';

const useLocalStorageListener = (key: string) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key);
  });

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(event.newValue);
      }
    };

    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, [key]);

  return value ?? false;
};

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default useLocalStorageListener;
