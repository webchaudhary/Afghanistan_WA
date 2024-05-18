// LoaderContext.js
import { CircularProgress } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const useLoaderContext = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ setIsLoading }}>
      {isLoading && (
        <div class="loader_container">
          <div class="loader">
            <div class="loader_line"></div>
          </div>

        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
};
