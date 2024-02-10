import { useEffect, useState } from 'react';
import { GetData } from '../getData';
import "./cards.css"
import locationLogo from "../pictures/location.png"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Card = () =>{
  
  const navigate = useNavigate()
  const[data,setData] = useState([])

  useEffect(()=>{
    (async()=>{
    try{
      const result = await  GetData()
      setData(result)
      console.log(result)
    }catch(e){
      console.log(e)
    }
    })()
  },[])


  const goToDetailedInfo = (id)=>{
    navigate(`/${id}`)
  }


  return(
 < div 
 className='card-container'>
   <div  className='card-div'>
    { data.map((item,idx)=>{
      return(
        <motion.div key={idx}
          initial={{ opacity: 0, y: 100}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='card'>
            <div className='img-div__cards'>
              <img className='card-img' src={item.flat_images.length !==0 && item.flat_images[0].image}alt="" />
            </div>
            <div className="desk-div__cards">
              <div className='card-desk__header'>
              <h3 className='title-card'>{item.title}</h3>
            </div>
            <div className='location-div'>
              <img src={locationLogo} alt="" />
              <p className='card-country__text'>Kyrgyzstan | Bishkek</p>
            </div>

            <div className='amoutOfRooms-div'>
              <p>Quantity of Rooms: {item.rooms}</p>
              <p>Total area: {item.total_area}м</p>
            </div>

            <div className='last-desk__div'>
              <p>{item.price}$</p>
              <Button className='card-button'  onClick={()=>goToDetailedInfo(item.id) } variant="contained"><p >View Details</p></Button>
            </div>
            </div>
          </div>
        </motion.div>
      )
    })}
  </div>
 </div>

  )
}

export default Card;