import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"
import logo from "../assets/logo.png"

export default function Navbar() {

    const[nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-evenly items-center px-4 bg-[#141c3c] text-gray-300'>
                <div className='flex w-full'>
                <img src={logo} alt="GP" style={{width: "80px"}}/>
                </div>
           
            {/* <div className='hidden md:flex'> */}
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                {/* </div> */}

                <div onClick={handleClick} className='md:hidden z-10'>
                   {!nav ?  <FaBars />: <FaTimes/>}
                </div>

<div>

                <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#141c3c] flex flex-col justify-center items-center"}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Projects</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
</div>


                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                            <a href='/' className='flex justify-between w-full text-gray-300'>
                                LinkedIn <FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
                            <a href='/' className='flex justify-between w-full text-gray-300'>
                                Github <FaGithub size={30}/>
                            </a>
                        </li>

                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
                            <a href='/' className='flex justify-between w-full text-gray-300'>
                                Email <HiOutlineMail size={30}/>
                            </a>
                        </li>

                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-600'>
                            <a href='/' className='flex justify-between w-full text-gray-300'>
                                Resume <BsFillPersonLinesFill size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
    )
}
