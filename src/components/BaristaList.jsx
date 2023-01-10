import * as React from "react";
import BaristaComponent from "./BaristaComponent.jsx"

const BaristasList = ({baristasList}) => {

  return (
    <div className="flex flex-col w-[2%] items-center">
      <h1 className="flex justify-center mt-7 mb-5 text-xl"> Baristas</h1>
      {baristasList.map((barista, index) => { 
        return(
          <BaristaComponent baristaComp={barista} key={index}/>
        )
      })}
    </div>
  )
}

export default BaristasList;