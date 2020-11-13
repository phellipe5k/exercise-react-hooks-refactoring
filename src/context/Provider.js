import React, { useState } from 'react';
import CarsContext from './CarsContext';


const Provider = ({ children }) => {
  const [cars, setCars ] = useState({});
  const [signal, setSignal ] = useState({ color: 'red' });

  const contextValues = {
    cars,
    setCars,
    signal,
    setSignal,
  }

  return (
    <CarsContext.Provider value={contextValues}>
      { children }
    </CarsContext.Provider>
  )
}

export default Provider;