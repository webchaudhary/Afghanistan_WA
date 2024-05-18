import React, { createContext, useContext, useState } from 'react';

const SelectedFeatureContext = createContext();

export const useSelectedFeatureContext = () => useContext(SelectedFeatureContext);


export const SelectedFeatureProvider = ({ children }) => {
  const [selectedView, setSelectedView] = useState('COUNTRY');
  const [selectedFeatureName, setSelectedFeatureName] = useState('Afghanistan');



  return (
    <SelectedFeatureContext.Provider value={{ selectedView, setSelectedView ,selectedFeatureName, setSelectedFeatureName}}>
      {children}
    </SelectedFeatureContext.Provider>
  );
};
