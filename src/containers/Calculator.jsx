import * as React from "react";
import Fields from "./Fields";
import Results from "../components/Results";
import CalculateTip from "../components/CalculateTip.jsx";
import { useTotalsContext } from "../context/TotalsContext";

const Calculator = () => {

  const deposit = useTotalsContext();

  return (
    <div className="flex flex-col">
      <Fields />
      <CalculateTip />
      <Results tips={deposit}/>
    </div>
  )
}

export default Calculator;