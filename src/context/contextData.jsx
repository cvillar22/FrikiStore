import React, { createContext, useCallback, useContext, useState } from "react";

const ContextData = createContext();
const useContextData = () => useContext(ContextData);

const ContextGlobal = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState({
    titlte: "",
    description: "",
    type: "",
    isActive: false
  });

  const showLoader = useCallback(() => setLoading(true), []);

  const hideLoader = useCallback(() => setLoading(false), []);

  const createError = (title, description, type) => setError({ title, description, type, isActive: true });
  
  const removeError = () => setError({ ...error, isActive: false });

  return (
    <ContextData.Provider
      value={{
        isLoading,
        error,
        showLoader,
        hideLoader,
        createError,
        removeError
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default ContextGlobal;
export { useContextData };