import * as React from "react";
import BaristaComponent from "./BaristaComponent.jsx"

const BaristasList = ({baristasList}) => {

  return (
    <div className="flex flex-col mt-12">
      {baristasList.map((barista, index) => { 
        return(
          <BaristaComponent baristaComp={barista} key={index}/>
        )
      })}
    </div>
  )
}

export default BaristasList;