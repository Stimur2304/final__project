import React from 'react'
import "./partner.css"
import finalProjectReactangle from "../../main/pictures/finalProjectReactangle.png"
import { Partners } from '../../constants/partners'
import { motion } from "framer-motion";

const Partner = () => {
  return (
    <div className='Partner'>
        <div className='container-num2'>
            <div className='logo-text__div'>
                <motion.div className="div"
                 initial={{ opacity: -1, x: -150 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{duration:0.9}}
                >
                <p className='logo-text'>Find the perfect place to stay with your family</p>
                </motion.div>
            </div>
            <div className='img-div'>
              <motion.div
               initial={{ opacity: -1, x: 150 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{duration:0.9}}>
              <img className='img-partner' src={finalProjectReactangle} alt="" />
              </motion.div>
            </div>
        </div>
        <div>
          <p className='partner__header'>Our Partners</p>
        </div>
        <div className='partners'>
          {Partners.map((item,idx)=>{
            return(
              <div className='img-div__partners'>
                <div key={idx}>
                <img className='partner-img' src={item.img} alt="" />
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Partner