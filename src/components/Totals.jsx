import * as React from "react";
import { TextField } from "@mui/material";
import { useTotalsContext } from "../context/TotalsContext";

const Totals = () => {

  const {total, setTotal, cardTotal, setCardTotal, cashTotal, setCashTotal} = useTotalsContext();

  return( 
    <div className="flex flex-col">
      <h1 className="flex justify-center mt-7 mb-2 text-xl">Totals</h1>
      <TextField label="Total Cash" variant="outlined" sx={{my: 2}}
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <TextField label="Card Tip" variant="outlined" sx={{mb: 2}}
        value={cardTotal}
        onChange={(e) => setCardTotal(e.target.value)}
      />
      <TextField label="Cash Tip" variant="outlined" sx={{}} 
        value={cashTotal}
        onChange={(e) => setCashTotal(e.target.value)}
      />
    </div>    
  )
}

export default Totals;
