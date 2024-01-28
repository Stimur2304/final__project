import React from 'react'
import "./partner.css"
import finalProjectReactangle from "../../main/pictures/finalProjectReactangle.png"
import { Partners } from '../../constants/partners'

const Partner = () => {
  return (
    <div className='Partner'>
        <div className='container-num2'>
            <div className='logo-text__div'>
                <p className='logo-text'>Find the perfect place to stay with your family</p>
            </div>
            <div className='img-div'>
                <img src={finalProjectReactangle} alt="" />
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
                <img src={item.img} alt="" />
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Partner