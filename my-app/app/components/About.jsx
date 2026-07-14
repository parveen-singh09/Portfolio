'use client';
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
export const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      id="about"
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        className='text-center text-5xl font-Ovo'
      >
        About me
      </motion.h2>

      <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.user_image} alt="user" className='w-full rounded-3xl' />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            I&apos;m an experienced full-stack developer who enjoys turning ideas into clean, reliable web applications. I focus on writing maintainable code and building interfaces that feel effortless to use.
          </p>

          {/* Cards List with staggered animations */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                viewport={{ once: false }}
                className='dark:hover:bg-b/50 dark:hover:shadow-white dark:hover:text-white hover:bg-a hover:shadow-black duration-300 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer'
                key={index}
              >
                <Image className='w-7 mt-3' src={isDarkMode ? iconDark : icon} alt={title} />
                <h3 className='dark:text-white my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='dark:text-white text-gray-600 text-sm'>{description}</p>
              </motion.li>
            ))}
          </ul>

          <h4 className='dark:text-white my-6 text-gray-700 font-Ovo'>Tools I Use</h4>

          {/* Tools List with sequential hover animations */}
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.15 }}
                viewport={{ once: false }}
                className='cursor-pointer flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </motion.div>
  )
}
