import * as React from "react";
import { IconButton, Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import { useBaristasContext } from "../context/BaristasContext.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import BaristaEdit from "./BaristaEdit.jsx";

const BaristaComponent = ({baristaComp}) => {
  const { baristas, setBaristas } = useBaristasContext();

  const handleDelete = (baristaName) => {
    setBaristas(baristas.filter(e => e.barista !== baristaName));
  }

  return(
    <div className="w-[23rem] border rounded-[4px] mb-3 color-[#C4C4C4]">
      <Accordion sx={{width: '100%'}}> 
        <AccordionSummary sx={{paddingRight: '1rem'}}> 
          <Typography sx={{display: 'flex', width: '18%', alignItems: 'center', alignContent: 'center'}}>
            <b>{baristaComp.barista}</b> 
          </Typography>
          <Typography sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '70%'}}>
            {baristaComp.startTime} - {baristaComp.endTime} - {baristaComp.breakTime} break.
          </Typography>

          <IconButton onClick={() => handleDelete(baristaComp.barista)}>
            <DeleteIcon />
          </IconButton>
        </AccordionSummary>

        <AccordionDetails>
          <hr className="mb-3"/>
          <BaristaEdit baristaToEdit={baristaComp}/>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default BaristaComponent;