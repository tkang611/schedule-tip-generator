import * as React from "react";
import { Typography } from "@mui/material";

const Results = ({tips}) => {

  return(
    <div className="mt-20 flex justify-center">
      <Typography>
        {`Total Cash Transactions are: ${tips.total}
        Your total Card Tips are: ${tips.cardTotal}
        Your total Cash Tips are: ${tips.cashTotal}
        `}
      </Typography>
    </div>
  )
}

export default Results;
