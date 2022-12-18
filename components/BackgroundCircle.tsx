import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
     initial={{
      opacity:0
     }}
     animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1, 0.2, 0.8, 0.4, 0.1, 0.5],
      borderRadius:["20%","20%", "50%", "80%", "20%"]
     }}
     transition={{
      duration:2.5
     }}
     className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] opacity-0 mt-52 animate-ping'></div>
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52'></div>
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52'></div>
      <div className='rounded-full border border-[#FFF8E1] opacity-20 h-[750px] w-[750px] absolute mt-52   animate-pulse'></div>
      <div></div>
    </motion.div>
  )
}

export default BackgroundCircle