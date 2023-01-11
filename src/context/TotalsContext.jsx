import * as React from 'react';

const defaultState = {
  total: '',
  cardTotal: '',
  cashTotal: ''
}

const TotalsContext = React.createContext(defaultState);

const TotalsContextProvider = ({children}) => {
  const [total, setTotal] = React.useState('');
  const [cardTotal, setCardTotal] = React.useState('');
  const [cashTotal, setCashTotal] = React.useState('');

  return (
    <TotalsContext.Provider
      value={{
        total,
        cardTotal,
        cashTotal,
        setTotal,
        setCardTotal,
        setCashTotal
      }}
    >
      {children}
    </TotalsContext.Provider>
  )
}

export const useTotalsContext = () => React.useContext(TotalsContext)

export default TotalsContextProvider;