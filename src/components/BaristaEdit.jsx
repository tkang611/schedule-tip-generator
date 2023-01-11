import * as React from "react";
import { useBaristasContext} from "../context/BaristasContext.jsx"
import { TextField, MenuItem, Button } from "@mui/material";

const BaristaEdit = ({baristaToEdit}) => {

  const { baristas, setBaristas } = useBaristasContext();
  const [barista, setBarista] = React.useState(baristaToEdit.barista);
  const [startTime, setStartTime] = React.useState(baristaToEdit.startTime);
  const [endTime, setEndTime] = React.useState(baristaToEdit.endTime);
  const [breakTime, setBreakTime] = React.useState(baristaToEdit.breakTime);

  async function handleEdit() {
    const editedBarista = {
      barista: barista,
      startTime: startTime,
      endTime: endTime,
      breakTime: breakTime
    };
    // check if there are already more than 5 baristas in the array
    if(baristas.length >= 5) {
      alert('Too many baristas breh.')
    }
    // check if any of the fields are empty
    else if(editedBarista.barista === "" || editedBarista.startTime === "" || editedBarista.endTime === "") {
      alert('You left a field empty breh.')
    }
    // check if the barista already exists in the baristas array
    else if(baristaToEdit.barista !== editedBarista.barista && baristas.some(e => e.barista.includes(editedBarista.barista))){
      alert('You already have this barista breh.')
    }
    // if all checks out, add the new barista to the baristas array
    else {
      const baristaIndex = baristas.findIndex(e => e.barista === baristaToEdit.barista);
      const editedBaristaArr = [...baristas];
      editedBaristaArr[baristaIndex] = editedBarista;

      setBaristas(editedBaristaArr);   
    }
  }

  let baristaNames = ['Tim', 'Sung', 'Jess', 'Will', 'Eli', 'Nicole'];
  const times = ['6:30 AM', '7:45 AM', '8:00 AM', '8:15 AM', '9:00 AM', '12:00 PM', '12:30 PM', '1:30 PM', '5:30 PM'];
  const breakTimes = [0, 30, 60, 90];

  return(
    <div className="flex flex-col">
      <h1 className="flex justify-center items-center">Edit Barista</h1>

      <TextField select label="Name" value={barista} sx={{ my: 2}}>
          {baristaNames.map((baristaName) => (
            <MenuItem key={baristaName} value={baristaName} onClick={() => setBarista(baristaName)}>
              {baristaName}
            </MenuItem>
          ))}
        </TextField> 


      <TextField select label="Start Time" value={startTime} sx={{mb: 2}}>
        {times.map((startTime, index) => (
          <MenuItem key={index} value={startTime} onClick={() => setStartTime(startTime)}>
            {startTime}
          </MenuItem>
        ))}
      </TextField> 

      <TextField select label="End Time" value={endTime} sx={{mb: 2}}>
        {times.map((endTime, index) => (
          <MenuItem key={`${endTime} ${index}`} value={endTime} onClick={() => setEndTime(endTime)}>
            {endTime}
          </MenuItem>
        ))}
      </TextField> 

      <TextField select label="Break Time" value={breakTime} sx={{mb: 2}}>
        {breakTimes.map((breakTime) => (
          <MenuItem key={breakTime} value={breakTime} onClick={() => setBreakTime(breakTime)}>
            {breakTime}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained" onClick={() => {handleEdit()}}><b>Edit Barista</b></Button>
    </div>
  )
}

export default BaristaEdit;
