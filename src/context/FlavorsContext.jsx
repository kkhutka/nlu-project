import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { loadFlavors } from "../data/flavorsLoader";

const FlavorsContext = createContext({ categories: [], byCategory: {} });

export function FlavorsProvider({ children }) {
  const [state, setState] = useState({ categories: [], byCategory: {} });

  useEffect(() => {
    const payload = loadFlavors(); 
    setState(payload);
  }, []);

  const value = useMemo(() => state, [state]);
  return <FlavorsContext.Provider value={value}>{children}</FlavorsContext.Provider>;
}

export const useFlavors = () => useContext(FlavorsContext);
