import * as React from "react";
import { Typography } from "@mui/material";

const Results = ({deposit}) => {

  const {distribution} = deposit;

  return(
    <div className="mt-20 flex justify-center">
      {/* {() => {
        for(let key in distribution){
          return (
            <Typography>
              {`${key}: ${distribution[key]}`}
            </Typography>  
          )
      }}} */}

    </div>
  )
}

export default Results;
