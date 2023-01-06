import * as React from "react";
import { useBaristaContext } from "../context/BaristaContext.jsx";
import { TextField } from "@mui/material";

const Baristas = () => {


  return(
    <div className="field-container">
      <h1>Baristas</h1>
      <TextField label="Name" variant="outlined"></TextField>
      <TextField label="Name" variant="outlined"></TextField>
      <TextField label="Name" variant="outlined"></TextField>
    </div>
  )
}

export default Baristas;
