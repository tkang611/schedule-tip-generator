import * as React from "react";
import { useBaristasContext} from "../context/BaristasContext.jsx"
import { TextField, MenuItem, Button } from "@mui/material";

const Baristas = () => {

  const { baristas, setBaristas } = useBaristasContext();
  const [barista, setBarista] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');
  const [breakTime, setBreakTime] = React.useState(0);

  const handleSubmit = () => {
    const newBarista = {
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
    else if(newBarista.barista === "" || newBarista.startTime === "" || newBarista.endTime === "") {
      alert('You left a field empty breh.')
    }
    // check if the barista already exists in the baristas array
    else if(baristas.some(e => e.barista.includes(newBarista.barista))){
      alert('You already have this barista breh.')
    }
    // if all checks out, add the new barista to the baristas array
    else {
      setBaristas((prev) => [...prev, newBarista]);   
    }
  }

  let baristaNames = ['Tim', 'Sung', 'Jess', 'Will', 'Eli', 'Nicole'];

  return(
    <div className="flex flex-col">
      <h1 className="flex justify-center mt-3">Barista</h1>
        <TextField select label="Name" value={barista} id="name-input" sx={{width: '223px', my: 2}}>
          {baristaNames.map((baristaName) => (
            <MenuItem key={baristaName} value={baristaName} onClick={() => setBarista(baristaName)}>
              {baristaName}
            </MenuItem>
          ))}
        </TextField> 

      <TextField onChange={(e) => setStartTime(e.target.value)} label="Start Time: 830a" sx={{mb: 2}}/>
      <TextField onChange={(e) => setEndTime(e.target.value)} label="End Time: 1230p" sx={{mb: 2}}/>
      <TextField onChange={(e) => setBreakTime(e.target.value)} label="Break Time: 30/0" sx={{mb: 2}}/>

      <Button variant="contained" onClick={() => {handleSubmit()}}>Add Barista</Button>
    </div>
  )
}

export default Baristas;
