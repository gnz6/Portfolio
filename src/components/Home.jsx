import React,{useState} from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import { Link } from 'react-scroll'

export default function Home(){
  
    
    const[nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)
    return (

    <div name="home" className='w-full h-screen bg-[#141c3c] '>
        
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full p-10'>
            <p className='text-[#d57d26]'>Hi, my name is </p>
            <h1 className='text-5xl sm:text-6xl font-bold  text-[#ccd6f6]'>Gonzalo Pirovano</h1>
            <h2 className='text-4xl sm:text-6xl font-bold  text-[#8892b0]'>I´m a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> brief description 2/3 lines 
             a gpsb gpas dgapsdbgds sdd f sdfbsdb fs dfbjfdbfjdfbs s fdfd f s f ngfngfngjnjdnalsdnlsdfnsdlfnd asdsaddsasd asdasdsda fdfdfd  </p>

            <Link onClick={handleClick} to="projects" smooth={true}  duration={500}>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#d57d26] hover:border-[#d57d26] transition-[200] '>View Projects 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={20} className='ml-3'/> 
                </span>
                </button>
            </div>
            </Link>
        </div>


    </div>
  )
}
