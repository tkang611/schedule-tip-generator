import * as React from "react";
import { useBaristaContext } from "../context/BaristaContext.jsx";
import { TextField } from "@mui/material";

const Baristas = () => {


  return(
    <div className="field-container flex flex-col">
      <h1 className="flex justify-center mt-3">Baristas</h1>
      <TextField 
      label="Name" 
      variant="outlined" 
      sx={{
        my: 2
      }} />
      <TextField 
      label="Name" 
      variant="outlined" 
      sx={{
        mb: 2
      }} />
      <TextField 
      label="Name" 
      variant="outlined" 
      sx={{

      }} />
    </div>
  )
}

export default Baristas;
