import React from 'react'
//imports img projects
import arquihubHome from "../assets/arquihubHome.png"


const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen text-gray-300 bg-[#141c3c]'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 borde-[#d57d26]'>Projects:</p>
          <p className='py-6'>Check out some of my recent Projects</p>
        </div>

    <div style={{backgroundImage: `url(${arquihubHome})`}} 
    className='grid sm:grid-cols-2 md: gird-cols-3 gap-4'>
      <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
    ReactJs App
          </span>
            <div>
            <a href='/'>
                <button>
                  Deploy
                </button>
              </a>

              <a href='/'>
                <button>
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