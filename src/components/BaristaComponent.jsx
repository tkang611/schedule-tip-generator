import * as React from "react";
import { IconButton, Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useBaristasContext } from "../context/BaristasContext.jsx";
import BaristaEdit from "./BaristaEdit.jsx";

const BaristaComponent = ({baristaComp}) => {
  const { baristas, setBaristas } = useBaristasContext();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  }

  const handleDelete = (baristaName) => {
    setBaristas(baristas.filter(e => e.barista !== baristaName));
  }

  return(
    <div className="w-72 border rounded-[4px] mb-3 color-[#C4C4C4]">
      <Accordion TransitionProps={{unmountOnExit: true}} expanded={expanded === `${baristaComp.barista}`} onChange={handleExpand(`${baristaComp.barista}`)} sx={{width: '100%'}}> 
        <AccordionSummary aria-controls={`${baristaComp.barista}-content`} id={`${baristaComp.barista}-header`}> 
          <Typography sx={{display: 'flex', width: '25%', alignItems: 'center', alignContent: 'center'}}>
            <b>{baristaComp.barista}</b> 
          </Typography>
          <Typography sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '65%'}}>
            {baristaComp.startTime} - {baristaComp.endTime} {baristaComp.breakTime} minute break.
          </Typography>

          <IconButton onClick={() => handleDelete(baristaComp.barista)}>
            <DeleteIcon />
          </IconButton>
        </AccordionSummary>

        <AccordionDetails>
          <hr className="mb-3"/>
          <BaristaEdit baristaToEdit={baristaComp.barista}/>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default BaristaComponent;