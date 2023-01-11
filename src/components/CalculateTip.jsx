import * as React from 'react';
import { Button } from '@mui/material';
import Results from './Results.jsx';
import { useTotalsContext } from '../context/TotalsContext';
import { useBaristasContext } from '../context/BaristasContext.jsx';

const CalculateTip = () => {

  const {baristas} = useBaristasContext();
  const deposit = useTotalsContext();

  const parseShifts = (time) => {
    let theTime = time.replace(/:/g, "")
    theTime = theTime.replace(/\s/g, "")
    // const theNewTime = theTime.substring(0, theTime.length-2) + theTime.substring(theTime.length-2,theTime.length-1).toLowerCase();

    let timeInNums = time.replace(/:/g, "")
    timeInNums = timeInNums.substring(0, timeInNums.length-3);
    
    const onlyHr = Math.floor(Number(timeInNums/100))
    const amOrPm = onlyHr === 12 ? onlyHr + time.substring(time.length-1,time.length-2).toLowerCase() : time.substring(time.length-2, 6).toLowerCase();

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
    console.log('hours per shift: ', hrsPerShift);
    console.log('total mins: ', totalMins)
    return totalMins - br/60;
  };
  
  const lcDeposit = (total, cardTotal, cashTotal) => {
    const tipsBreakdown = {};
    const kevin = Number(Number(total - (cardTotal * 0.9)).toFixed(2));
    const tips = (cardTotal * 0.9) + cashTotal;
    
    console.log(baristas)
    baristas.map((e) => {
      const barista = e.barista;
      const startTime = e.startTime;
      const endTime = e.endTime;
      const breakTime = e.breakTime;
      tipsBreakdown[barista] ? tipsBreakdown[barista] += hrsPerShift(startTime, endTime, breakTime) : tipsBreakdown[barista] = hrsPerShift(startTime, endTime, breakTime);
    })

    const hrsArr = Object.values(tipsBreakdown);
    console.log(tipsBreakdown)
    const totalHrs = hrsArr.reduce((a,b) => a + b, 0)
    const tipsPerHr = Number(Number(tips/totalHrs).toFixed(2));
    
    const tipsPerEmployee = hrsArr.map(el=> Number(Number(el*tipsPerHr).toFixed(2)));
    const todaysNames = Object.keys(tipsBreakdown);
    const employeeToTips = {};
    for (let i = 0; i < todaysNames.length; i++){
      employeeToTips[todaysNames[i]] = tipsPerEmployee[i];
    };

    const result = `Deposit: ${kevin}, Tips: ${tips}, Hourly: ${tipsPerHr}`;
    return result;
  }

  const handleCalculate = () => {
    
    const calculateDeposit = lcDeposit(deposit.total, deposit.cardTotal, deposit.cashTotal);
    console.log(calculateDeposit);
  }

  return (
    <div className='flex justify-center mt-10'>
      <Button variant="contained" onClick={() => handleCalculate()}>Calculate Tip</Button>
    </div>
  )
}

export default CalculateTip;