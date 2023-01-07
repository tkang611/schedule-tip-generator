import * as React from "react";
import { useBaristaContext } from "../context/BaristaContext.jsx";
import { useBaristasContext} from "../context/BaristasContext.jsx"
import { TextField, Select, MenuItem, InputLabel } from "@mui/material";
import { Button } from "@mui/material";

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
  
    setBaristas((prev) => [...prev, newBarista]);   
  }

  const baristaNames = ['Tim', 'Sung', 'Jess', 'Will', 'Eli', 'Nicole'];

  return(
    <div className="flex flex-col">
      <h1 className="flex justify-center my-3">Baristas</h1>
      {baristas.map((el) => {
        return(
          <Select value={el.barista}>
            {baristaNames.map((barista) => (
              <MenuItem value={barista} onClick={() => setBarista(barista)}>{barista}</MenuItem>
            ))}
          </Select>
        )
      })}

      <InputLabel id="barista-name">Name</InputLabel>
      <Select id="barista-name" sx={{width:'223px'}}>
        {baristaNames.map((barista) => (
          <MenuItem value={barista} onClick={() => setBarista(barista)}>{barista}</MenuItem>
        ))}
      </Select>

      {/* <TextField 
        label="Name"
        variant="outlined"
        onChange={(e) => setBarista(e.target.value)}
        sx={{mb: 2}}
      /> */}

      <Button variant="contained" onClick={handleSubmit}>Add Barista</Button>

    </div>
  )

  // return(
  //   <div className="field-container flex flex-col">
  //     <h1 className="flex justify-center mt-3">Baristas</h1>
  //     <TextField 
  //       label="Name" 
  //       variant="outlined" 
  //       sx={{
  //         my: 2
  //       }} />
  //     <TextField 
  //       label="Name" 
  //       variant="outlined" 
  //       sx={{
  //         mb: 2
  //       }} />
  //     <TextField 
  //       label="Name" 
  //       variant="outlined" 
  //       sx={{
  //         mb: 2
  //       }} />
  //     <TextField 
  //       label="Name" 
  //       variant="outlined" 
  //       sx={{

  //       }} />
  //   </div>
  // )
}

export default Baristas;
