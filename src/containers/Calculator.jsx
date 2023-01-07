import * as React from "react";
import { useBaristaContext } from "../context/BaristaContext.jsx";
import Fields from "./Fields";
import Results from "../components/Results";
import CalculateButton from "../components/Button.jsx";

const Calculator = () => {

  return (
    <div id="content-container" className="flex flex-col">
      <Fields />
      <CalculateButton />
      <Results />
    </div>
  )
}

export default Calculator;