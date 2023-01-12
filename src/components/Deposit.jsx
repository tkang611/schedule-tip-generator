import * as React from 'react';
import { List, ListItem, Typography } from '@mui/material';

const Deposit = ({kevin, tips, hourly}) => {

  return (
      <List sx={{display: 'flex', justifyContent: 'space-around', width: "80%"}}>
         <ListItem key={kevin} sx={{display: 'flex', justifyContent: 'center'}}>
           <Typography sx={{fontSize: '1.5rem'}}><b>{`Deposit: `}</b> ${kevin}</Typography>
         </ListItem>

         <ListItem key={tips} sx={{display: 'flex', justifyContent: 'center'}}>
           <Typography sx={{fontSize: '1.5rem'}}><b>{`Total Tips: `}</b> ${tips}</Typography>
         </ListItem>

         <ListItem key={hourly} sx={{display: 'flex', justifyContent: 'center'}}>
           <Typography sx={{fontSize: '1.5rem'}}><b>{`Tips Per Hour: `}</b> ${hourly}</Typography>
         </ListItem>
      </List>
  )

}

export default Deposit;