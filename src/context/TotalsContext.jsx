import * as React from 'react';

const defaultState = {
  total: '',
  cardTotal: '',
  cashTotal: '',
  distribution: {},
}

const TotalsContext = React.createContext(defaultState);

const TotalsContextProvider = ({children}) => {
  const [total, setTotal] = React.useState('');
  const [cardTotal, setCardTotal] = React.useState('');
  const [cashTotal, setCashTotal] = React.useState('');
  const [distribution, setDistribution] = React.useState({});

  return (
    <TotalsContext.Provider
      value={{
        total,
        cardTotal,
        cashTotal,
        distribution,
        setTotal,
        setCardTotal,
        setCashTotal,
        setDistribution
      }}
    >
      {children}
    </TotalsContext.Provider>
  )
}

export const useTotalsContext = () => React.useContext(TotalsContext)

export default TotalsContextProvider;