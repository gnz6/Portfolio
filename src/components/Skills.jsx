import React from 'react'

import css from "../assets/css.webp"
import html from "../assets/html.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import sequelize from "../assets/sequelize.png"
import redux from "../assets/redux.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.png"
import postgres from "../assets/postgresql.webp"
import python from "../assets/python.webp"
import boostrap from "../assets/boostrap.png"

export default function Skills(){
  return (
    <div name="skills" className='bg-[#141c3c]  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
            <div>
                <p className='text-4xl inline border-b-4  border-[#d57d26]'>Experience</p>
                <p className='py-4'>These are technologies I've worked with:</p>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                    <div>
                        <img src={html} alt="html icon" className='w-20 mx-auto'/>
                        <p>HTML</p>
                    </div>

                    <div>
                        <img src={css} alt="css icon" className='w-20 mx-auto'/>
                        <p>CSS</p>
                    </div>

                    <div>
                        <img src={boostrap} alt="boostrap icon" className='w-20 mx-auto'/>
                        <p>Boostrap</p>
                    </div>

                    <div>
                        <img src={tailwind} alt="tailwind icon" className='w-20 mx-auto'/>
                        <p>Tailwind CSS</p>
                    </div>
               
                    <div>
                        <img src={js} alt="js icon" className='w-20 mx-auto'/>
                        <p>JavaScript</p>
                    </div>

                    <div>
                        <img src={react} alt="react icon" className='w-20 mx-auto'/>
                        <p>React Js</p>
                    </div>

                    <div>
                        <img src={redux} alt="redux icon" className='w-20 mx-auto'/>
                        <p>Redux</p>
                    </div>


              
                    <div>
                        <img src={node} alt="node icon" className='w-20 mx-auto'/>
                        <p>Node Js</p>
                    </div>


                    <div>
                        <img src={sequelize} alt="sequelize icon" className='w-20 mx-auto'/>
                        <p>Sequelize</p>
                    </div>

                    
                    <div>
                        <img src={mongo} alt="mongo icon" className='w-20 mx-auto'/>
                        <p>MongoDb</p>
                    </div>

              
                    <div>
                        <img src={postgres} alt="postgres icon" className='w-20 mx-auto'/>
                        <p>PostgresSQL</p>
                    </div>

                    <div>
                        <img src={python} alt="python icon" className='w-20 mx-auto'/>
                        <p>Python</p>
                    </div>

              
                </div>
            </div>
        </div>
    </div>
  )
}
