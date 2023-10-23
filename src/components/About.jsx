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
            <p className='text-xl mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus deleniti minima est pariatur ipsam perspiciatis error soluta laudantium eaque similique explicabo magnam debitis repudiandae distinctio, exercitationem, iure deserunt animi. Soluta cumque at, est nesciunt temporibus neque ab sunt beatae earum rerum minus ipsam ullam voluptas corporis? Laborum, mollitia quam!
            </p>

            <br />

            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sequi nihil at accusamus ab? Est ea id rerum alias sapiente quis omnis, at corporis quos aliquam cum, deserunt impedit repellendus. Provident, sed reiciendis placeat quis cumque dignissimos dolorem labore qui minima ex, aperiam quasi modi dolorum incidunt, libero sunt tenetur!</p>
        </div>
    </div>
  )
}

export default About