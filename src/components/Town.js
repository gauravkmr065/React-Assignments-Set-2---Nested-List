import React,{useState} from 'react'

function Town(city) {
    let i=1;
    return (
         <ul>
                {city.towns.map(town => {
            return  <li id={`town${i++}`} key={town.name}>{town.name}
                {/* <Town {...town} /> */}
            </li>
            })}
          </ul>  
    )
}

export default Town;
