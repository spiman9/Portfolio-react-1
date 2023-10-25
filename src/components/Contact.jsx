import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div name="contact" className='w-full pt-28 md:h-screen bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'
        
        >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6  text-2xl'>Submit the form below to get in touch with me</p>
            </div>

            <motion.div className='flex justify-center items-center'>
                <form action="https://getform.io/f/44c4175d-7852-49b7-af6c-be0aa54bbe1d" className='flex flex-col w-full md:w-1/2' method='POST'>
                    <input type="text" name="name" id="" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />
                    <input type="email" name="email" id="" placeholder='Enter Your Email' className='p-2 bg-transparent border-2 rounded-md focus:outline-none my-3' />
                    <textarea name="message" id="" rows="10" className='p-2 bg-transparent border-2 rounded-md focus:outline-none' placeholder='Enter your message'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300 my-8 tracking-tight hover:tracking-widest hover:font-bold hover:bg-gradient-to-b hover:from-green-500 hover:to-green-800'>
                        Lets Talk
                    </button>
                </form>
            </motion.div>
        </div>

        
    </div>
  )
}

export default Contact