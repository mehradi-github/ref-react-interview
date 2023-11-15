import { useState } from "react";

const useLocalStorage = (key: string, initValue: object) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (error) {
      console.log(error);
      return initValue;
    }
  });

  const setValue = (v: object) => {
    try {
      setStoredValue(v);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(v));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};
export default useLocalStorage;
