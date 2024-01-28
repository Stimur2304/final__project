import React from 'react'
import "./partner.css"
import finalProjectReactangle from "../../main/pictures/finalProjectReactangle.png"

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
        <div className='partners'>
          
        </div>
    </div>
  )
}

export default Partner