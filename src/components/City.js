import React,{useState} from 'react'
import Town from './Town'



function City(state) {
    const [townShow,setTownShow] = useState(true);
    let i=1;
    return (
          <ul>
                {state.cities.map(city => {
            return  <li  onClick={()=>setTownShow(!townShow)} id={`city${i++}`} key={city.name}>{city.name}
                 {townShow && <Town {...city} />}
            </li>
            })}
          </ul>  
    )
}

export default City
