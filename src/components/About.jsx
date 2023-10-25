import React from 'react'
import { motion } from 'framer-motion'



const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-28 px-10'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>
                    About
                </p>
            </div>
            <div>
            <motion.div className='text-2xl mt-5' initial = {{opacity: 0 , scale:0}}
                whileInView={{
                    opacity: 1 , scale:1
                }}
                transition={{
                    duration: 0.6,
                }}>
            Programming has always been my interest in life. I am technology enthusiast
pursuing a bachelor in computer science and Engineering. I believe in the
thought that the things that challenge you are the ones that improves you. 
            </motion.div>
            <br />

            <motion.div className='text-2xl mt-5' initial = {{opacity: 0 , scale:0}}
                whileInView={{
                    opacity: 1 , scale:1
                }}
                transition={{
                    duration: 0.6,
                }}>I am
looking forward to learning new skills that will both enrich and help me grow. I
have good problem solving skills, good at coding and likes exploring the new
things. I am Team-oriented personality, dedicated team player and enjoys
working closely with others</motion.div>

            <br />
            <motion.div className='text-2xl mt-4' initial = {{opacity: 0 , scale:0}}
                whileInView={{
                    opacity: 1 , scale:1
                }}
                transition={{
                    duration: 0.6,
                }}>Believes in the strategy of learning and applying.</motion.div>
        </div>
        </div>
    </div>
  )
}

export default About