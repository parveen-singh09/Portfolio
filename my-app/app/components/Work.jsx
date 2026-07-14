'use client';
import React from 'react'
import Image from 'next/image'
import { assets, workData } from '../../assets/assets'
import { motion } from "motion/react"

export const Work = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            id="work"
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                My Portfolio
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false }}
                className='text-center text-5xl font-Ovo' 
            >
                My Latest Work
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            >
                Wellcome To WebDevelopment Portfolio ! Explore A Collection Of My Projects
            </motion.p>

            <div className='grid grid-cols-auto my-10 gap-5'>
                {workData.map((project, index) => (
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ scale: 1.03 }}
                        viewport={{ once: false }}
                        className='aspect-square rounded-2xl relative cursor-pointer group block overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500'
                        key={index}
                        href={project.url || '#'}
                        target={project.url ? '_blank' : undefined}
                        rel={project.url ? 'noopener noreferrer' : undefined}
                    >
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            fill
                            sizes='(max-width: 768px) 100vw, 33vw'
                            className='object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        <div className='group-hover:bottom-7 bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 shadow-[0_4px_12px_rgba(0,0,0,0.15)]'>
                            <div>
                                <h2 className='dark:text-black font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition border-black w-9 aspect-square flex items-center justify-center'>
                                <Image className='w-5' src={assets.send_icon} alt='send icon' />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: false }}
                className='dark:text-white dark:hover:bg-b dark:border-white hover:bg-a duration-300 w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20'
                href=""
            >
                Show More
                <Image className='w-4' src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' />
            </motion.a>
        </motion.div>
    )
}
