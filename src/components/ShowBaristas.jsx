import * as React from "react";
import { IconButton, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useBaristasContext } from "../context/BaristasContext.jsx";

const ShowBaristas = () => {

  const { baristas, setBaristas } = useBaristasContext();

  const handleDelete = (baristaName, box) => {
    // const foundBarista = baristas.findIndex((barista) => barista.barista === baristaName);

    // if(foundBarista > -1) {
    //   deletedBarista.splice(foundBarista, 1);
    // }

    setBaristas(baristas.filter(e => e[baristaName] !== box[baristaName]));
  }

  return (
    <div className="flex flex-col mt-12">
      {baristas.map((el) => { 
        return(
          <Box id={el.barista} key={el.barista} className="h-14 flex justify-center items-center">
            <div className="flex flex-row items-center">
              <b>{el.barista}</b>: {el.startTime} - {el.endTime} with {el.breakTime} break.
              <IconButton onClick={() => handleDelete(el.barista, el)}>
                <DeleteIcon />
              </IconButton>
            </div>  
          </Box>
        )
      })}
    </div>
  )
}

export default ShowBaristas