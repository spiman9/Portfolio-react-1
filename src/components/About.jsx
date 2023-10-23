import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-28 px-10'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>
                    About
                </p>
            </div>
            <p className='text-2xl mt-5'>
            Programming has always been my interest in life. I am technology enthusiast
pursuing a bachelor in computer science and Engineering. I believe in the
thought that the things that challenge you are the ones that improves you. 
            </p>
            <br />

            <p className='text-2xl mt-5'>I am
looking forward to learning new skills that will both enrich and help me grow. I
have good problem solving skills, good at coding and likes exploring the new
things. I am Team-oriented personality, dedicated team player and enjoys
working closely with others</p>

            <br />
            <p className='text-2xl mt-4'>Believes in the strategy of learning and applying.</p>
        </div>
    </div>
  )
}

export default About