import React from 'react'

import css from "../assets/css.webp"
import html from "../assets/html.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import sequelize from "../assets/sequelize.png"
import redux from "../assets/redux.png"
import node from "../assets/node.webp"
import mongo from "../assets/mongo.png"
import postgres from "../assets/postgresql.webp"
import python from "../assets/python.webp"
import boostrap from "../assets/boostrap.png"
import typescript from "../assets/typescript.png"
import express from "../assets/express.png"
import django from "../assets/django.png"
import postman from "../assets/postman.svg"

export default function Skills(){
  return (
    <div name="skills" className=' w-full h-screen bg-[#121f3d] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen '>
            <div>
                <p className='text-4xl inline border-b-4  border-[#d57d26]'>Lenguages and Tools 🛠</p>
                <p className='py-4 text-lg'>These are technologies I've worked with:</p>
                {/* <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8 '> */}
                   

              <div className='py-8 w-full grid grid-cols-2 gap-4 text-center  '>

       
                    
                    <div>
                        <h1 className="font-bold text-2xl pb-2">Frontend</h1>
                        <div className='grid grid-cols-2 items-center justify-center p-2 '>

                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={js} alt="js icon" className='w-20 mx-auto'/>
                        <p className="my-4">JavaScript</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={typescript} alt="js icon" className='w-20 mx-auto'/>
                        <p className="my-4">TypeScript</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={react} alt="react icon" className='w-20 mx-auto'/>
                        <p className="my-4">React Js</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={redux} alt="redux icon" className='w-20 mx-auto'/>
                        <p className="my-4">Redux</p>
                    </div>


                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2">
                        <img src={html} alt="html icon" className='w-20 mx-auto'/>
                        <p className="my-4">HTML</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={css} alt="css icon" className='w-20 mx-auto'/>
                        <p className="my-4">CSS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={boostrap} alt="boostrap icon" className='w-20 mx-auto'/>
                        <p className="my-4">Boostrap</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={tailwind} alt="tailwind icon" className='w-20 mx-auto'/>
                        <p className="my-4">Tailwind CSS</p>
                    </div>
               
              


                    </div>
                    </div>

                    <div>
                        <h1 className="font-bold text-2xl pb-2">Backend</h1>
                        <div className='grid grid-cols-2 items-center justify-center p-2 '>

                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={node} alt="node icon" className='w-20 mx-auto'/>
                        <p className="my-4">Node Js</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={python} alt="python icon" className='w-20 mx-auto'/>
                        <p className="my-4">Python</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={express} alt="python icon" className='w-20 mx-auto'/>
                        <p className="my-4">Express Js</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={django} alt="python icon" className='w-20 mx-auto'/>
                        <p className="my-4">Django</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={sequelize} alt="sequelize icon" className='w-20 mx-auto'/>
                        <p className="my-4">Sequelize</p>
                    </div>

              
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={postgres} alt="postgres icon" className='w-20 mx-auto'/>
                        <p className="my-4">PostgresSQL</p>
                    </div>
                    
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={mongo} alt="mongo icon" className='w-20 mx-auto'/>
                        <p className="my-4">MongoDb</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 m-2 h-[150px] items-center justify-center">
                        <img src={postman} alt="mongo icon" className='w-20 mx-auto'/>
                        <p className="my-4">Postman</p>
                    </div>
</div>
                    </div>

                    </div>

             

              
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}
