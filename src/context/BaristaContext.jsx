import * as React from 'react';

const defaultState = {
  barista: '',
  startTime: '',
  endTime: '',
  breakTime: 0
}

const BaristaContext = React.createContext(defaultState);

const BaristaContextProvider = ({children}) => {
  const [barista, setBarista] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');
  const [breakTime, setBreakTime] = React.useState(0);

  return (
    <BaristaContext.Provider
      value={{
        barista,
        startTime,
        endTime,
        breakTime,
        setBarista,
        setStartTime,
        setEndTime,
        setBreakTime
      }}
    >
      {children}
    </BaristaContext.Provider>
  )
}

export const useBaristaContext = () => React.useContext(BaristaContext)

export default BaristaContextProvider;