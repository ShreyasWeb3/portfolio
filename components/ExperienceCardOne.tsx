import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCardOne = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden py-1'>
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
      src='assets/.png' 
      className='w-[78px] h-[76px] rounded-lg xl:w-[300px] xl:h-[300px]object-cover object-center ' /> */}
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light text-gray-200 pt-20 text-center'>Senior Systems Engineer </h4>
        <p className='font-bold text-2xl mt-1 text-gray-200 text-center'>Infosys</p>
        <div className='flex space-x-2 my-2 items-center justify-center'>
          <img src='assets/react.svg' className='w-10 h-10 '/>
          <img src='assets/materialUI.svg' className='w-10 h-10 '/>
          <img src='assets/html.svg'/>
          <img src='assets/css.svg'/>
          <img src='assets/javascript.png' className='w-10 h-10'/>
          <img src='assets/redux.svg'/>
          <img src='assets/tailwind.svg' className='w-10 h-10'/>
          <img src='assets/git.svg' className='w-10 h-10'/>
        </div>
        <p className='text-gray-400 uppercase py-5'>Oct 2021 - Jul 2022</p>
        <ul className='list-disc space-y-4 ml-4 text-lg w-300 md:w-120 xl:w-120 md:h-120 xl:h-120 pb-12'>
          <li>Developed and maintained responsive web application user interface for a banking client complying with prescribed code standards</li>
          <li>Worked with UI/UX designer teams to understand and formulate Figma designs.</li>
          <li>Working with AJAX data consisting of JSON/XML responses, parsing and presenting on Ul layer, 
 form submissions and DOM manipulation.</li>
          <li>Used GitHub for managing code versions and efficient source code management.</li>

        </ul>

      </div>
    </article>
  )
}

export default ExperienceCardOne