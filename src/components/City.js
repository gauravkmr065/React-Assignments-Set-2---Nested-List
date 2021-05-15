import React,{useState} from 'react'
import Town from './Town'



function City(state) {
    const [townShow,setTownShow] = useState(false);
    let i=1;
    return (
          <ul>
                {state.cities.map((city,index) => {
            return  <li  onClick={(event)=>{setTownShow(!townShow&&index+1),event.stopPropagation()}}
                         id={`city${index+1}`} 
                         key={city.name}>{city.name}
                 {townShow==(index+1) && <Town {...city} />}
            </li>
            })}
          </ul>  
    )
}

export default City
