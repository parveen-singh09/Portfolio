'use client';
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

export const Contact = ({ isDarkMode, setIsDarkMode }) => {

  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "844135e8-eefd-4422-8e98-49414a3ded05");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center'
      style={{ backgroundImage: isDarkMode ? "none" : "url('/footer-bg-color.png')", backgroundSize: isDarkMode ? '0' : '90% auto' }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Contact With Me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        className='text-center text-5xl font-Ovo'
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I Would Love To Hear From, If You Have Any Feedback, Suggestions, Comments, Questions, Please Use The Form Below
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto dark:text-black'
      >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white' type="text" placeholder='Enter You Name' required />
          <input name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white' type="email" placeholder='Enter You Email' required />
        </div>
        <textarea name='text' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' rows='6' placeholder='Enter You Message' required />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className='dark:bg-transparent dark:border dark:hover:bg-b py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'
          type='Submit'
        >
          Submit Now
          <Image alt='' src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_white} className='w-4' />
        </motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

