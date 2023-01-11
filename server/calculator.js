const lcSchedule = {

    0 : [
      { name: 'Eli',
           shift: ['630a', '530p'],
           break: 60 },
      { name : 'Sung',
           shift: ['815a', '530p'],
           break: 30 }
    ],
     1: [
       { name: 'Jess',
            shift: ['630a', '1200p'],
            break: 30 },
       { name: 'Eli',
            shift: ['745a', '1230p'],
            break: 0 },
       { name: 'Jess',
            shift: ['1230p', '530p'],
            break: 30 },
       { name: 'Eli',
            shift: ['130p', '530p'],
            break: 0 },
       ],
     2: [
       { name: 'Jess',
            shift: ['630a', '1200p'],
            break: 30 },
       { name: 'Eli',
            shift: ['745a', '1230p'],
            break: 0 },
       { name: 'Jess',
            shift: ['1230p', '530p'],
            break: 30 },
       { name: 'Eli',
            shift: ['130p', '530p'],
            break: 0 },
     ],
     3: [
       { name: 'Jess',
            shift: ['630a', '1230p'],
            break: 30 },
       { name: 'Will',
            shift: ['745a', '1230p'],
            break: 0 },
       { name: 'Nicole',
            shift: ['1230p', '530p'],
            break: 30 },
       { name: 'Will',
            shift: ['130p', '530p'],
            break: 0 },
     ],
     4: [
       { name: 'Jess',
            shift: ['630a', '1200p'],
            break: 30 },
       { name: 'Will',
            shift: ['745a', '1230p'],
            break: 0 },
       { name: 'Sung',
            shift: ['1230p', '530p'],
            break: 30 },
       { name: 'Will',
            shift: ['130p', '530p'],
            break: 0 },
     ],
     5: [
       { name: 'Jess',
            shift: ['630a', '1200p'],
            break: 30 },
       { name: 'Will',
            shift: ['745a', '1230p'],
            break: 0 },
       { name: 'Sung',
            shift: ['1230p', '530p'],
            break: 30 },
       { name: 'Nicole',
            shift: ['130p', '530p'],
            break: 0 },
     ],
     6: [
       { name: 'Eli',
            shift: ['630a', '530p'],
            break: 60 },
       { name: 'Will',
            shift: ['800a', '1200p'],
            break: 0 },
       { name: 'Sung',
            shift: ['900a', '530p'],
            break: 30 }
     ]
   };
   
   /* 
       function hrsPerShift takes in 3 parameters: start, end, and br.
     start and end are strings that represent time, the beginning and end of a shift.
     br is a number that indicates time in minutes for the duration of an employee's break.
   */


   function parseShifts2(time){
     let theTime = time.replace(/:/g, "")
     theTime = theTime.replace(/\s/g, "")
     console.log(theTime)
     theNewTime = theTime.substring(0, theTime.length-2) + theTime.substring(theTime.length-2,theTime.length-1).toLowerCase();
console.log(theNewTime)
     let timeInNums = time.replace(/:/g, "")
     timeInNums = timeInNums.substring(0, timeInNums.length-3);
     console.log(timeInNums)

     const onlyHr = Math.floor(Number(timeInNums/100))
     console.log(onlyHr)
     const amOrPm = onlyHr === 12 ? onlyHr + time.substring(time.length-1,time.length-2).toLowerCase() : time.substring(time.length-2, 6).toLowerCase();
    console.log(amOrPm)

     let result;
     if (amOrPm === 'a' || amOrPm === '12p'){
       result = Number(timeInNums)
     } else if (amOrPm === 'p' || amOrPm === '12a'){
       result = Number(timeInNums) + 1200
     } 
     return result;
   }

   console.log(parseShifts2('6:30 PM'));

   function parseShifts (time){
     const timeInNums = time.slice(0, time.length-1);

     console.log(time)
     console.log(timeInNums)
     const onlyHr = Math.floor(Number(timeInNums)/100)
     console.log(onlyHr)
     const amOrPm = onlyHr === 12 ? onlyHr + time.slice(time.length-1) : time.slice(time.length-1)
     console.log(amOrPm)
   
     let result;
     if (amOrPm === 'a' || amOrPm === '12p'){
       result = Number(timeInNums)
       console.log(result)
     } else if (amOrPm === 'p' || amOrPm === '12a'){
       result = Number(timeInNums) + 1200
       console.log(result)

     } 
     return result;
   };
   
   const hrsPerShift2 = (start, end, br) => {
     const startTime = parseShifts2(start);
     const endTime = parseShifts2(end);
     const totalMins = (Math.floor(endTime/100) + (endTime % 100)/60) - (Math.floor(startTime/100) + (startTime % 100)/60);
     return totalMins - br/60
   }

   console.log(hrsPerShift2('7:45 AM', '12:30 PM', 30))

   function hrsPerShift (start, end, br){
     const startShift = parseShifts(start);
     const endShift = parseShifts(end);
     const test = `l143 start:${startShift}, end:${endShift} `
     const totalMins = (Math.floor(endShift/100) + (endShift % 100)/60) - (Math.floor(startShift/100) + (startShift % 100)/60)
     return totalMins - br/60
   };

   console.log(hrsPerShift('745a', '1230p', 30))
   // 1am - 7pm
   // 1230p = 750 min
   // 530p = 1050 min
   // 12hr = 720 min
   // 1230 - 530
   // 1050 - 750
   
   
   function lcDeposit (tCash, ccTips, cashTips){
     const tipsBreakdown = {};
     const kevin = Number(Number(tCash - (ccTips * 0.9)).toFixed(2));
     const tips = (ccTips * 0.9) + cashTips;
     const date = new Date();
     const today = date.getDay();
     
     for (let i = 0; i < lcSchedule[today].length; i++){
       const name = lcSchedule[today][i].name
       const shiftBegin = lcSchedule[today][i].shift[0]
       const shiftEnd = lcSchedule[today][i].shift[1]
       const shiftBreak = lcSchedule[today][i].break
       tipsBreakdown[name] ? tipsBreakdown[name] += hrsPerShift(shiftBegin, shiftEnd, shiftBreak) : tipsBreakdown[name] = hrsPerShift(shiftBegin, shiftEnd, shiftBreak);
     }
     const hrsArr = Object.values(tipsBreakdown);
     console.log(tipsBreakdown)
     const totalHrs = hrsArr.reduce((a,b) => a + b, 0)
     const tipsPerHr = Number(Number(tips/totalHrs).toFixed(2));
     
     // array of tips per employee by their respective worked hours, in order:
     const tipsPerEmployee = hrsArr.map(el=> Number(Number(el*tipsPerHr).toFixed(2)));
     // array of employees by name, in order:
     const todaysNames = Object.keys(tipsBreakdown);
     // double check of the tip number vs cash taken out of register:
     // console.log(`total tips after 10%: ${tips}, cash taken from register after breakdown: ${tipsPerEmployee.reduce((a,b) => Number(Number(a + b).toFixed(2)), 0)}`);
     const employeeToTips = {};
     for (let i = 0; i < todaysNames.length; i++){
       employeeToTips[todaysNames[i]] = tipsPerEmployee[i];
     };
     // console.log(hrsArr)
     // console.log(employeeToTips)
     const result = `Deposit: ${kevin}, Tips: ${tips}, Hourly: ${tipsPerHr}`;
     return result;
   }

const baristas = [
  { 
    barista: 'Jess',
    startTime: '6:30 AM',
    endTime: '12:00 PM',
    breakTime: 30
  },
  { 
    barista: 'Eli',
    startTime: '7:45 AM',
    endTime: '12:30 PM',
    breakTime: 0
  },
  { 
    barista: 'Jess',
    startTime: '12:30 PM',
    endTime: '5:30 PM',
    breakTime: 30
  },
  { 
    barista: 'Eli',
    startTime: '1:30 PM',
    endTime: '5:30 PM',
    breakTime: 0
  },
]

const lcDeposit2 = (total, cardTotal, cashTotal) => {
     const tipsBreakdown = {};
     const kevin = Number(Number(total - (cardTotal * 0.9)).toFixed(2));
     const tips = (cardTotal * 0.9) + cashTotal;
     
     baristas.map(e => {
       const barista = e.barista
       const startTime = e.startTime
       const endTime = e.endTime
       const breakTime = e.breakTime
       console.log(typeof endTime, typeof breakTime)
       tipsBreakdown[barista] ? tipsBreakdown[barista] += hrsPerShift2(startTime, endTime, breakTime) : tipsBreakdown[barista] = hrsPerShift2(startTime, endTime, breakTime);
 
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
   
   
  console.log(lcDeposit(267.23, 199.52, 31.70))
   
  console.log(lcDeposit2(267.23, 199.52, 31.70))
   
   
   