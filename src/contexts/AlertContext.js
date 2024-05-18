import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);


export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  return (
    <AlertContext.Provider value={{ alertMessage, setAlertMessage, showAlert, setShowAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
