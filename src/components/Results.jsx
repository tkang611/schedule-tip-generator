import * as React from "react";
import { Typography, List, ListItem } from "@mui/material";

const Results = ({deposit}) => {

  const {distribution} = deposit;   

  return(
    <div className="mt-20 flex flex-col justify-center items-center">
      <List
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'justify-around',
          alignItems: 'center',
          width: '80%',
          marginBottom: 3,
          }}>                
        {Object.keys(distribution).map(el => (
          <ListItem
          key={el}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          >
            <Typography sx={{fontSize: '1.5rem'}}><b>{`${el}:`}</b> {`$${distribution[el]}`}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Results;
