import * as React from 'react';
import { Button } from '@mui/material';
import { useTotalsContext } from '../context/TotalsContext';
import { useBaristasContext } from '../context/BaristasContext.jsx';
import Deposit from './Deposit.jsx';

const CalculateTip = () => {

  const { baristas } = useBaristasContext();
  const { setDistribution } = useTotalsContext();
  const deposit = useTotalsContext();
  const [showDeposit, setShowDeposit] = React.useState(false);

  const [kevinDeposit, setKevinDeposit] = React.useState('');
  const [totalTips, setTotalTips] = React.useState('');
  const [tipsPerHour, setTipsPerHour] = React.useState('');

  const parseShifts = (time) => {
    let theTime = time.replace(/:/g, "")
    theTime = theTime.replace(/\s/g, "")
    const theNewTime = theTime.substring(0, theTime.length-2) + theTime.substring(theTime.length-2,theTime.length-1).toLowerCase();

    let timeInNums = time.replace(/:/g, "")
    timeInNums = timeInNums.substring(0, timeInNums.length-3);
    
    const onlyHr = Math.floor(Number(timeInNums/100))
    const amOrPm = onlyHr === 12 ? onlyHr + theNewTime.slice(theNewTime.length-1) : theNewTime.slice(theNewTime.length-1)

    let result;
    if (amOrPm === 'a' || amOrPm === '12p'){
      result = Number(timeInNums)
    } else if (amOrPm === 'p' || amOrPm === '12a'){
      result = Number(timeInNums) + 1200
    } 
    return result;
  }

  const hrsPerShift = (start, end, br) => {
    const startTime = parseShifts(start);
    const endTime = parseShifts(end);
    const totalMins = (Math.floor(endTime/100) + (endTime % 100)/60) - (Math.floor(startTime/100) + (startTime % 100)/60)
    return totalMins - br/60;
  };
  
  async function lcDeposit(total, cardTotal, cashTotal) {
    const tipsBreakdown = {};
    const kevin = await Number(Number(total - (cardTotal * 0.9)).toFixed(2));
    setKevinDeposit(kevin);
    const tips = await (cardTotal * 0.9) + Number(cashTotal);
    setTotalTips(tips.toFixed(2));

    
    baristas.map((e) => {
      const barista = e.barista;
      const startTime = e.startTime;
      const endTime = e.endTime;
      const breakTime = e.breakTime;
      tipsBreakdown[barista] ? tipsBreakdown[barista] += hrsPerShift(startTime, endTime, breakTime) : tipsBreakdown[barista] = hrsPerShift(startTime, endTime, breakTime);
    })

    const hrsArr = Object.values(tipsBreakdown);
    const totalHrs = hrsArr.reduce((a,b) => a + b, 0)
    const tipsPerHr = await (tips/totalHrs).toFixed(2);
    setTipsPerHour(tipsPerHr)
 
    const tipsPerEmployee = hrsArr.map(el=> Number(Number(el*tipsPerHr).toFixed(2)));
    const todaysNames = Object.keys(tipsBreakdown);
    const employeeToTips = {};
    for (let i = 0; i < todaysNames.length; i++){
      employeeToTips[todaysNames[i]] = tipsPerEmployee[i];
    };

    setDistribution(employeeToTips);

    const result = `Deposit: ${kevin}, Tips: ${tips}, Hourly: ${tipsPerHr}`;
    return result;
  }

  async function handleCalculate() {
    const calculateDeposit = await lcDeposit(deposit.total, deposit.cardTotal, deposit.cashTotal);
    setShowDeposit(true);
    console.log("calculateDeposit: ", calculateDeposit);
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <Button sx={{width: '20%', marginBottom: 5}} variant="contained" onClick={() => handleCalculate()}>Calculate Tip</Button>
      {showDeposit ? <Deposit kevin={kevinDeposit} tips={totalTips} hourly={tipsPerHour}/> : null}
    </div>
  )
}

export default CalculateTip;