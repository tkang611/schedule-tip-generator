import * as React from 'react';

const defaultState = {
  baristas: [
    {
      barista: 'Jess',
      startTime: '6:30 AM',
      endTime: '12:00 PM',
      breakTime: 30
    },
    {
      barista: 'Eli',
      startTime: '7:45 AM',
      endTime: '12:30 PM',
      breakTime: 0
    },
    {
      barista: 'Nicole',
      startTime: '12:30 PM',
      endTime: '5:30 PM',
      breakTime: 30
    },
    {
      barista: 'Tim',
      startTime: '1:30 PM',
      endTime: '5:30 PM',
      breakTime: 0
    },
  ]
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