import * as React from "react";
import Fields from "./Fields";
import Results from "../components/Results";
import CalculateTip from "../components/CalculateTip.jsx";

const Calculator = () => {

  return (
    <div id="content-container" className="flex flex-col">
      <Fields />
      <CalculateTip />
      <Results />
    </div>
  )
}

export default Calculator;