import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from "next/link";

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:0.8
      }}
       className='flex flex-row items-center '>
        {/* React Social iconsnpm i react-social-icons */}
        <SocialIcon 
        network='github'
        url="https://github.com/ShreyasWeb3"
        target="_blank"
        fgColor='grey'
        bgColor='transparent' />
        <SocialIcon 
        network='linkedin'
        target="_blank"
        url="https://www.linkedin.com/in/shreyas-balappanavar-2885a4158"
        fgColor='grey'
        bgColor='transparent'/>
        <SocialIcon 
        network='medium'
        target="_blank"
        url="https://medium.com/@shreyasweb3"
        fgColor='grey'
        bgColor='transparent' />
      </motion.div>

      <motion.div
      initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:0.8
      }}>

        <Link href="#contact">
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get in Touch
        </p>
        </Link>
        {/* <SocialIcon 
        network='email'
        className='flex flex-row items-center text-gray-300 ml-[-12px]'
        url="#"
        fgColor='grey'
        bgColor='transparent'/> */}
      </motion.div>
    </header>
  )
}

export default Header