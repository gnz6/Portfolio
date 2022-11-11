import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#121f3d] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[1000px] w-full'method="POST" action="https://getform.io/f/28657746-51a3-47a4-b83c-56906c2282c0">
            <div pb-8>
                <p className='text-4xl font-bold border-b-4 border-[#d57d26] text-gray-300 '>Contact 📫</p>
                <p className='text-gray-300' >Submit the form below or send me and email <a className='text-[#d57d26] border-b-2 border-[#d57d26]' href='mailto:gonzalopirovano1@gmail.com' >Here</a></p>
            </div>
            <input placeholder='Name' name="name" className='my-4 p-2 bg-[#ccd6f6]'/> 
            <input placeholder='Email' name="email" className='my-4 p-2 bg-[#ccd6f6]'/> 
            <textarea name='message' rows={"8"}  className="bg-[#ccd6f6] p-2" placeholder='Write a messagge...'></textarea>
            <button className='text-white border-2 hover:bg-[#d57d26] hover: border-[#d57d26] px-4 py-3 my-8 mx-auto items-center '>Contact me!</button>
        </form>
    </div>
  )
}

export default Contact