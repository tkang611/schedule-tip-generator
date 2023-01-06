import * as React from "react";
import { useBaristaContext } from "../context/BaristaContext.jsx";
import Fields from "./Fields";
import Results from "../components/Results";

const Calculator = () => {
  const { barista, setBarista, startTime, setStartTime, endTime, setEndTime, breakTime, setBreakTime} = useBaristaContext();
  const [total, setTotal] = React.useState(0);
  const [cardTip, setCardTip] = React.useState(0);
  const [cashTip, setCashTip] = React.useState(0);
  const [baristas, setBaristas] = React.useState([]);

  return (
    <div id="content-container" className="grid">
      <Fields />
      <Results />
    </div>
  )
}

export default Calculator;