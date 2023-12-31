import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage   from '../assets/react.png'
// import graphql from '../assets/graphql.png'
// import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'
import django from '../assets/django.png'
import mysql from '../assets/mysql.png'
import c from '../assets/c.png'
import cplusplus from '../assets/cplusplus.png'
import mongodb from '../assets/mongodb.png'
import java from '../assets/java.png'

import { motion } from 'framer-motion'
const Experience = () => {

    const techs =[
        {
            id : 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id : 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id :3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id : 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id : 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        // {
        //     id : 6,
        //     src: nextjs,
        //     title: "NextJS",
        //     style: "shadow-white"
        // },
        // {
        //     id : 7,
        //     src: graphql,
        //     title: "GraphQL",
        //     style: "shadow-pink-400"
        // },
        {
            id : 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400"
        },
        {
            id : 9,
            src: python,
            title: "Python",
            style: "shadow-yellow-400"
        },
        {
            id : 10,
            src: django,
            title: "Django",
            style: "shadow-green-800"
        },
        {
            id : 11,
            src: mysql,
            title: "MySQL",
            style: "shadow-orange-500"
        },
        {
            id : 12,
            src: c,
            title: "C",
            style: "shadow-blue-50"
        },
        {
            id : 13,
            src: cplusplus,
            title: "C++",
            style: "shadow-blue-400"
        },
        {
            id : 15,
            src: java,
            title: "Java",
            style: "shadow-red-400"
        },
        {
            id : 14,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-400"
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-black via-black to-gray-800 w-full pt-28 '>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
                <p className='text-2xl py-6'>These are the technologies and languages that I have worked upon</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-0 '>

                {
                    techs.map(({id , src , title , style}) => (
                        <motion.div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`} key={id}
                        initial = {{opacity: 0 , scale:0}}
                        whileInView={{
                            opacity: 1 , scale:1
                        }}
                        transition={{
                            duration: 0.2,
                        }}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4 text-center'>{title}</p>
                        </motion.div>
                    ))
                }


                
            </div>
        </div>
    </div>
  )
}

export default Experience