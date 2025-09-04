import { useEffect, useState } from 'react';

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

  return value;
};
export default useLocalStorageListener;
