import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70'>
      <Head>
        <title>Shreyas Portfolio</title>
      </Head>
      {/* Header */}
      <Header /> 

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero /> 
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experiences */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      {/* Contact */}
      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-16 w-16 cursor-pointer' src='assets/arrow.png'/> 
          </div>
        </footer>
      </Link> 

    </div>
  )
}
