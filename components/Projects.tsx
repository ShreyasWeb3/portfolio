import React from 'react'
import { motion } from 'framer-motion';

type Props = {}



const Projects = (props: Props) => {
  const projects = [1,2,3,4,5];
  const data = [
    {
      image :'assets/ecom.gif', 
      title: 'Shop Now',
      description:`QKart is an e-commerce application offering a variety of products for customers to choose from. 
  
      During the course of this project,
      
      Implemented the core logic for authentication, shopping cart and checkout
      Improved UI by adding responsive design elements for uniform experience across different devices
      Utilized REST APIs to dynamically load and render data served by the backend server`
    },
    {
      image :'assets/xboard.svg', 
      title: 'XBoard',
      description:`XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.
      During the course of this project,
      Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch
      Used Accordions and Image Carousel to improve UI
      Fetched news content from flipboard's RSS feed using REST API`
  
    },
    {
      image :'assets/dynamicTravel.svg', 
      title: 'QTripDynamic',
      description:`QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. 
  
      During the course of this project,
      
      Created web pages using HTML and CSS and made them dynamic using JavaScript
      Improved UX with multi-select filters, image carousels
      Utilised localStorage to persist user preferences at client-side`
  
    },
    {
      image :'assets/staticTravel.svg', 
      title: 'QTripStatic',
      description:`QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. 
  
      During the course of this project,
      
      Created 3 different web pages from Wireframe layout using HTML and CSS
      Utilized Bootstrap extensively for responsive design
       Deployed the website to Netlify`
  
    }
  ]
  return (
    <motion.div
    initial={{
      x:-200,
      opacity:0
    }}
    whileInView={{
      x:0,
      opacity:1
    }}
    transition={{
      duration:1.5
    }}
    className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>Projects</h3>

      <div className='relative w-full flex overflow-hidden 
      snap-x snap-mandatory z-20 mb-2.5 md:mb-7 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70'>
        {data.map((project) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
            <motion.img 
                initial={{
                  x:-200,
                  opacity:0
                }}
                whileInView={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  duration:1.5
                }}
            src={project.image} className=' md:w-[600px] md:h-[500px]'/>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl text-semibold text-center'>{project.title}</h4>
              <p className='text-lg text-center '>{project.description}</p>
            </div>
          </div>
        ))}
      </div>


      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>


      </div>
    </motion.div>
  )
}

export default Projects