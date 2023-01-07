import * as React from 'react';

const defaultState = {
  baristas: []
}

const BaristasContext = React.createContext(defaultState);

const BaristasContextProvider = ({children}) => {
  const [baristas, setBaristas] = React.useState([]);


  return (
    <BaristasContext.Provider
      value={{
        baristas,
        setBaristas
      }}
    >
      {children}
    </BaristasContext.Provider>
  )
}

export const useBaristasContext = () => React.useContext(BaristasContext)

export default BaristasContextProvider;