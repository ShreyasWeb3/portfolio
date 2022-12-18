import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
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
    className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen'>
      <h3 className='absolute top-20 md:top-28 uppercase tracking-[20px] text-gray-500 text-2xl '>About</h3>
      <motion.img 
      initial={{
        x:-200,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      viewport={{
        once:true
      }}
      transition={{
        duration:1.2 
      }}
      src="assets/avatar.svg" className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full md:w-99 md:h-115 xl:rounded-lg xl:w-[500px] xl:h-[500px]'/>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold text-gray-300'>Here is a Little Background</h4>
        <p className='text-gray-300'>A Front End developer with close to 3 years of Experience. Strong engineering professional with a Bachelor's degree in Computer Science. Skilled in HTML, CSS, JavaScript, React JS. 

I have worked on creating Microservices from scratch. understanding the business requirements and use cases to model it to an extensible system and create many responsive pixel-perfect websites. I am Well-versed with AGILE Methodology, Version control system (GIT), design platform (Figma).

My goals are to work in a fast-paced, high-growth workplace, building and contributing to software products and Front End systems, alongside a team who is as motivated and passionate.
</p>
      </div>
      </motion.div>
  )
}

export default About