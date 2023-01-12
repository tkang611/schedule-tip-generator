import * as React from "react";
import { TextField, Typography } from "@mui/material";

const Results = ({deposit}) => {

  const {distribution} = deposit;   

  return(
    <div className="mt-20 flex flex-col items-center justify-center">
      {Object.keys(distribution).map((e) => (
        <Typography key={e} className= "mb-3">
          {`${e}: ${distribution[e]}`}
        </Typography>
      ))}
    </div>
  )
}

export default Results;
