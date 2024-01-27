import { useEffect, useState } from 'react';
import { GetData } from '../../pages/main/getData';

function CardsPart() {
  const[data,setData] = useState([])
  useEffect(()=>{
    (async()=>{
      const result = await  GetData()
      setData(result)
      console.log(result)
    })()
  },[])
  return(
  <div className='App'>
    {data.map((item,idx)=>{
      return(
        <div key={idx}>
          {item.id}
        </div>
      )
    })}
  </div>

  )
}

export default CardsPart;