import React from 'react'
import HeaderPart from '../headerr/header'
import "./about.css"
import { aboutUsCard } from '../../constants/aboutUs-cards'
import Tower from "../pictures/Tower.png"
import { motion } from "framer-motion";
import MyComponent from '../footer/footer'

const AboutUS = () => {
  return (
    <div>
        <HeaderPart/>
        <motion.div className='aboutUS-header_div'
        initial={{ opacity: -2, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{duration:0.7}}
        >
            <h1>Property Featured</h1>
            <p>Real estate is a crowded field. But with the number of buyers purchasing homes through real estate agents and brokers growing there’s plenty of </p>
        </motion.div>
        <div className='aboutUS-descrip'>
            <div className='aboutUS-desc'>
                {aboutUsCard.map((item,idx)=>{
                    return(
                            <motion.div 
                            className='div__aboutUs__first'
                            initial={{ opacity: -2, x: -150 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{duration:0.7}}
                            >
                                <div className='AU-cards' key={3}>
                                    <img src={item.icon} alt="" />
                                    <h1>{item.header}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                    )
                })}
            </div>
            <motion.img src={Tower} alt="" 
              initial={{ opacity: -2, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{duration:0.7}}
            />
            <div className='aboutUS-desc'>
                {aboutUsCard.map((item,idx)=>{
                    return(
                            <motion.div 
                            className='div__aboutUs__first  div__abiutUs__Right'
                            initial={{ opacity: -2, x: 150 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{duration:0.7}}
                            >
                                <div className='AU-cards' key={3}>
                                    <img src={item.icon2} alt="" />
                                    <h1>{item.header2}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                    )
                })}
            </div>
        </div>
        <MyComponent />
    </div>
  )
}

export default AboutUS