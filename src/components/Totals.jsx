import * as React from "react";
import { TextField } from "@mui/material";
import { useTotalsContext } from "../context/TotalsContext";

const Totals = () => {

  return( 
    <div className="flex flex-col">
      <h1 className="flex justify-center mt-7 mb-2 text-xl">Totals</h1>
      <TextField 
      label="Total Cash" 
      variant="outlined" 
      sx={{
        my: 2
      }} />
      <TextField 
      label="Card Tip" 
      variant="outlined" 
      sx={{
        mb: 2
      }} />
      <TextField 
      label="Cash Tip" 
      variant="outlined" 
      sx={{

      }} />
    </div>    
  )
}

export default Totals;
