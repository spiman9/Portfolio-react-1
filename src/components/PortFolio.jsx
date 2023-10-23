import React from 'react'
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
// import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"


import codeDecoder from "../assets/portfolio/img1.png"
import tourimg from "../assets/portfolio/tour-img.png"

const PortFolio = () => {

    const porfolios = [
        // {
        //     id: 1,
        //     src: arrayDestruct,
        // },
        // {
        //     id: 2,
        //     src: reactParallax,
        // },
        {
            id:4,
            src: reactSmooth,
        },
        {
            id: 5,
            src: reactWeather,
        },
        {
            id: 6,
            src: installNode,
        },
        {
            id: 1 ,
            name: "Code Decoder" ,
            src: codeDecoder,
            demo: "https://code-decoder.netlify.app/",
            code: "https://github.com/spiman9/Code-Decoder-in-html-css-js",
        },
        {
            id: 2 ,
            name: "Tourism  Frontend" ,
            src: tourimg,
            demo: "https://tour-frontend.netlify.app/",
            code: "https://github.com/spiman9/Tour-Website",
        },
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white px-4 pt-6">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 pt-14'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                <p className='py-6 text-2xl'>Check out some of my works here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0 pb-40'>
            {
                porfolios.map(({id , src , code , demo , name}) => 
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                    <img src={src} alt="" className='rounded-md hover:scale-105 duration-300 h-44 w-full'/>
                    <p className='h-10 flex items-center justify-center text-2xl font-bold pt-5'>{name}</p>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} target='_blank' rel="noreferrer">Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} target='_blank' rel="noreferrer">Code</a></button>
                    </div>
                </div>
                )
            }
            </div>

            
        </div>
    </div>
  )
}

export default PortFolio