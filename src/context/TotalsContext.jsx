import * as React from 'react';

const defaultState = {
  total: 0,
  cardTotal: 0,
  cashTotal: 0
}

const TotalsContext = React.createContext(defaultState);

const TotalsContextProvider = ({children}) => {
  const [total, setTotal] = React.useState(0);
  const [cardTotal, setCardTotal] = React.useState(0);
  const [cashTotal, setCashTotal] = React.useState(0);

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