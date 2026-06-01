import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Footer = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className='mt-20 dark:text-white'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />
        <div className='flex w-max items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6' />
            parveen.singh.lodhi@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2026 Parveen Singh. All Rights Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 '>
                <li> <a target='_blank' href ="https://github.com/parveen-singh09" >GitHub</a> </li>
                <li> <a target='_blank' href ="https://www.linkedin.com/in/parveen-s-809880218" >LinkedIn</a> </li>
                <li> <a target='_blank' href ="https://x.com/parveen125690" >Twitter</a> </li>
            </ul>
        </div>
    </div>
  )
}
