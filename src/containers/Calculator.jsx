import * as React from "react";
import { useBaristaContext } from "../context/BaristaContext.jsx";
import Baristas from "../components/Baristas.jsx";
import Results from "../components/Results.jsx";
import Totals from "../componentsTotals.jsx";

const Calculator = () => {
  const { barista, setBarista, startTime, setStartTime, endTime, setEndTime, breakTime, setBreakTime} = useBaristaContext();
  const [total, setTotal] = React.useState(0);
  const [cardTip, setCardTip] = React.useState(0);
  const [cashTip, setCashTip] = React.useState(0);
  const [baristas, setBaristas] = React.useState([]);

  

  return (
    <div>
      <p>{barista}</p>
    </div>
  )
}

export default Calculator;