import * as React from "react";
import Baristas from "../components/Baristas";
import Totals from "../components/Totals";

const Fields = () => {
  return (
    <div id="fields-container" className="flex flex-row">
      <Baristas />
      <Totals />
    </div>
  )
}

export default Fields