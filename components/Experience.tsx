import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCardOne from './ExperienceCardOne'
import ExperienceCardTwo from './ExperienceCardTwo'
import ExperienceCardThree from './ExperienceCardThree'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
    initial={{
      x:-300,
      opacity:0
    }}
    whileInView={{
      x:0,
      opacity:1
    }}
    transition={{
      duration:1.5
    }}
    className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-24 md:top-14 uppercase tracking-[20px] text-gray-500 text-2xl z-20'>Experience</h3>

      <div className='w-full flex space-x-5 overflow-x-auto -10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70 pb-12'>
        <ExperienceCardTwo />
        <ExperienceCardOne />
        <ExperienceCardThree />
      </div>
    </motion.div>

  )
}

export default Experience