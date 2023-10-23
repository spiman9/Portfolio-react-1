import React from 'react'
import HeroImage from './../assets/heroImage.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import{Typewriter} from "react-simple-typewriter"

const Home = () => {
    
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-40 pb-4 md:pt-0 z-0'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row'>
            <div className='flex flex-col justify-center h-full w-full'>
                <div className='h-24 pt-2'>
                <h2 className='text-4xl  sm:text-5xl font-bold text-white'>I'm a 
                <span className=' text-green-600'><Typewriter
                    words={[' FrontEnd Developer', ' BackEnd-Developer']}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    delaySpeed={1000}
                    deleteSpeed={50}
                /></span>
                </h2>
                </div>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore dolorum culpa tenetur voluptates velit, ut in cumque molestiae. Accusantium optio ea itaque esse quod adipisci!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto nihil porro quam harum. Veniam.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, sapiente!
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        PortFolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardDoubleArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div >
                <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={HeroImage} alt="my profile" />
            </div>
        </div>
    </div>
  )
}

export default Home