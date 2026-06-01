'use client';
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            id="services"
            className='w-full px-[12%] py-10 scroll-mt-20'
        >
            <motion.h4
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className='text-center mb-2 text-lg font-Ovo'
            >
                What I Offer
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false }}
                className='text-center text-5xl font-Ovo'
            >
                My Services
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            >
                I am a Full Stack Developer Worked With Several Projects Before
            </motion.p>

            <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                        viewport={{ once: false }}
                        className='dark:hover:shadow-white dark:hover:bg-b/50 hover:bg-a px-8 py-12 duration-300 hover:shadow-black cursor-pointer border-[0.5px] border-gray-400 rounded-xl'
                        key={index}
                    >
                        <Image src={icon} alt='' className="w-10" />
                        <h3 className='dark:text-white text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='dark:text-white text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5' >
                            Read More
                            <Image alt='' src={assets.right_arrow} className='' />
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
