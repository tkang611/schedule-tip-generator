import * as React from "react";
import Baristas from "../components/Baristas";
import ShowBaristas from "../components/ShowBaristas"
import Totals from "../components/Totals";

const Fields = () => {
  return (
    <div id="fields-container" className="flex justify-around">
      <Baristas />
      <ShowBaristas />
      <Totals />
    </div>
  )
}

export default Fields