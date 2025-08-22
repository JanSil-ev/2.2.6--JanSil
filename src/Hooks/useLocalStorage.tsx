import { useState } from "react";

export function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const setStoredValue = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(key, String(newValue));
  };

  return [value, setStoredValue];
}
