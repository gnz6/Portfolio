import React from 'react'
//imports img projects
import arquihubHome from "../assets/arquihubHome.png"
import countriesHome from "../assets/countriesHome.png"
import games from "../assets/start.png"
import bricks from "../assets/allgames.png"

const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen text-gray-300 bg-[#141c3c]'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 borde-[#d57d26]'>Projects:</p>
          <p className='py-6'>Check out some of my recent Projects</p>
        </div>

    <div className='grid sm:grid-cols-2 md: gird-cols-3 gap-4'>
      <div style={{backgroundImage: `url(${arquihubHome})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
    ReactJs App
          </span>
            <div>
            <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deploy
                </button>
              </a>

              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
        </div>
      </div>

      <div style={{backgroundImage: `url(${countriesHome})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
    ReactJs App
          </span>
            <div>
            <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deploy
                </button>
              </a>

              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
        </div>
      </div>

      <div style={{backgroundImage: `url(${games})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
    ReactJs App
          </span>
            <div>
            <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deploy
                </button>
              </a>

              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
        </div>
      </div>

      <div style={{backgroundImage: `url(${bricks})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
    ReactJs App
          </span>
            <div>
            <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deploy
                </button>
              </a>

              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
        </div>
      </div>


    </div>
    </div>
    </div>
  )
}

export default Projects