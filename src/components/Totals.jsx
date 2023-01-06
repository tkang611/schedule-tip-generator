import * as React from "react";
import { TextField } from "@mui/material";
import { useBaristaContext } from "../context/BaristaContext.jsx";

const Totals = () => {

  return( 
    <div className="flex flex-col text-sm">
      <h1>Totals</h1>
      <TextField label="Total Cash" variant="outlined"></TextField>
      <TextField label="Tip" variant="outlined"></TextField>
      <TextField label="Cash Tip" variant="outlined"></TextField>
    </div>    
  )
}

export default Totals;
