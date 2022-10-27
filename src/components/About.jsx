import React from 'react'

export default function About(){
  return (
    <div name="about" className='w-full h-screen bg-[#141c3c] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#d57d26]'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm: text-right text-4xl font-bold'>
              <p>I'm Gonza, Welcome! Please take a look around 👀</p>
              </div>
            <div>
              <p>
              These past months i've completed my studies at Henry, where they prepared me to be a FullStack Developer, teaching tecnologies such as React, Node, Express, Redux, Sequelize among others.
              I'm a pretty disciplined person, and a proactive one, often looking for new challenges to expand my knowledge, and thats what i like the most of programming, constant learning and adaptation.
              I've feel confident in my soft skills, i worked as manager in a store for years and i always had great work environments, also i coordinated a students group as Teaching Assistant at Henry meanwhile i was finishing my studies.
              </p>
            </div>
            </div>
          </div>  
        </div>
  )
}
