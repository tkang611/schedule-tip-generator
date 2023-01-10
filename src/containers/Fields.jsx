import * as React from "react";
import BaristasCreate from "../components/BaristaCreate";
import BaristasList from "../components/BaristaList"
import Totals from "../components/Totals";
import { useBaristasContext } from "../context/BaristasContext.jsx";

const Fields = () => {

  const { baristas } = useBaristasContext();

  return (
    <div id="fields-container" className="flex justify-around">
      <BaristasCreate />
      <BaristasList baristasList={baristas}/>
      <Totals />
    </div>
  )
}

export default Fields