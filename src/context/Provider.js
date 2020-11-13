import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, setCars] = useState({});

  const contextValue = {
    cars,
    setCars,
  }
  return (
    <CarsContext.Provider value={contextValue} >
      { children }
    </CarsContext.Provider>
  )
}

export default Provider;
