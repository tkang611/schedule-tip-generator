import * as React from "react";
import BaristaCreate from "../components/BaristaCreate";
import BaristaList from "../components/BaristaList"
import Totals from "../components/Totals";
import { useBaristasContext } from "../context/BaristasContext.jsx";

const Fields = () => {

  const { baristas } = useBaristasContext();

  return (
    <div id="fields-container" className="flex justify-around">
      <BaristaCreate />
      <BaristaList baristasList={baristas}/>
      <Totals />
    </div>
  )
}

export default Fields