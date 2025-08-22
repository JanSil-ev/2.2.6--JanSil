import { useState } from "react";

export function useLocalStorage(key: string, initialValue : any) {
  const [value, setValue] = useState(() => {

    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  const setStoredValue = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
}
