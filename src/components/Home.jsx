import React,{useEffect, useState} from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import { Link } from 'react-scroll'

export default function Home(){
    
    const[nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)
    

    return (

    <div name="home" className='w-full h-screen bg-[#121f3d] rounded-xl '>
        
        <div className='max-w-[1000px] hover:cursor-default mx-auto flex flex-col justify-center h-3/4 pt-[100px] pl-[50px] shadow-xl bg-opacity-50 rounded-3xl items-start hover:bg-[#0b1734] transition duration-150'>
            <p className='text-[#d57d26] font-bold hover:text-[#ccd6f6] hover:scale-105 transition duration-150'>Welcome! My name is </p>
            <h1 className='text-5xl sm:text-6xl font-bold  text-[#ccd6f6] hover:text-[#d57d26] hover:scale-105 transition duration-150 '>Gonzalo Pirovano</h1>
            <h2 className='text-4xl sm:text-6xl font-bold  text-[#8892b0] hover:text-[#d57d26] hover:scale-105 transition duration-150 '>I´m a Full Stack Developer</h2>
            <p className='text-[#b8bcc8] text-lg py-4 max-w-[700px] justify-center items-center text-center'> From Buenos Aires, Argentina, i´m 27 years old and looking for more professional experience as a developer ,
            I study Computer Science @ Universidad de Buenos Aires and in the meantime i´ve finished my coding bootcamp at Henry plus other courses in Udemy like React Pro and Python University!
         You can see some of my projects down below! </p>
 


            <Link onClick={handleClick} to="projects" smooth={true}  duration={500}>
            <div className=' max-w-[700px] items-center justify-center mt-2'>
                <button className='text-white w-full justify-center group border-2 px-8 py-3 my-2 flex items-center font-bold rounded-lg hover:bg-[#d57d26] hover:border-[#d57d26] transition-[200] '>View Projects 
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
