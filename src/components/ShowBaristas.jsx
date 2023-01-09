import * as React from "react";
import { IconButton, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useBaristasContext } from "../context/BaristasContext.jsx";

const ShowBaristas = () => {

  const { baristas } = useBaristasContext();

  const handleDelete = (baristaName) => {
    const foundBarista = baristas.findIndex((barista) => barista.barista === baristaName);
    
    console.log(foundBarista)
    
    if(foundBarista > -1) {
      baristas.splice(foundBarista, 1);
    }
  }

  return (
    <div className="flex flex-col mt-12">
      {baristas.map((el) => { 
        return(
          <Box key={el.barista} className="h-14 flex justify-center items-center">
            <div className="flex flex-row items-center">
              <b>{el.barista}</b>: {el.startTime} - {el.endTime} with {el.breakTime} break.
              <IconButton>
                <DeleteIcon onClick={handleDelete(el.barista)}/>
              </IconButton>
            </div>  
          </Box>
        )
      })}
    </div>
  )
}

export default ShowBaristas