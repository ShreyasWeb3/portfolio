import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCardThree = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden py-0'>
      {/* <motion.img
      initial={{ 
        y:-100,
        opacity:0
      }}
      whileInView={{
        y:0,
        opacity:1
      }}
      transition={{
        duration:1.5
      }}
      viewport={{
        once:true
      }}
      src='assets/avatar.svg' 
      className='w-[78px] h-[76px] rounded-lg xl:w-[300px] xl:h-[300px]object-cover object-center ' /> */}
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light text-gray-200 pt-28 text-center'>Apprentice </h4>
        <p className='font-bold text-2xl mt-1 text-gray-200 text-center'>Crio.do</p>
        <div className='flex space-x-2 my-2 items-center justify-center'>
          <img src='assets/html.svg'/>
          <img src='assets/css.svg'/>
          <img src='assets/javascript.png' className='w-10 h-10'/>
          <img src='assets/react.svg' className='w-10 h-10 '/>
          <img src='assets/figma.svg' className='w-10 h-10'/>
          <img src='assets/git.svg' className='w-10 h-10'/>
        </div>
        <p className='text-gray-400 uppercase py-5'>Aug 2022 - Present</p>
        <ul className='list-disc space-y-4 ml-4 text-lg w-300 md:w-150 xl:w-150'>
          <li>Leant the fundamentals of react framework in-depth</li>
          <li>Learnt software development skills and simultaneously worked 
 on real-world projects.</li>
          <li>Completed various conceptual modules of data structures and algorithms.</li>
          <li>Developed and deployed responsive web applications</li>

        </ul>

      </div>
    </article>
  )
}

export default ExperienceCardThree