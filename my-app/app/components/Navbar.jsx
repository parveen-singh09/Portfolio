import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

export const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const sidemenuRef = useRef();
    const openmenu = () => {
        sidemenuRef.current.style.transform = 'translate(-16rem)';
    }
    const closemenu = () => {
        sidemenuRef.current.style.transform = 'translate(16rem)';
    }

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className='w-full' />
            </div>
            <nav className="dark:bg-c dark:border-b-1 w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 backdrop-blur-lg">
                <a href="#top">
                    <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className='bg-white dark:border dark:border-white  dark:bg-transparent shadow-sm bg-opacity-50 hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About Me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)} ><Image className="w-6" src={isDarkMode ? (assets.sun_icon) : (assets.moon_icon)} alt="logo" /></button>
                    <a className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4' href="#contact">Contact<Image src={isDarkMode ? assets.arrow_icon : assets.arrow_icon_dark} alt="" className='w-3' /></a>
                    <button onClick={openmenu} className='block md:hidden ml-3'><Image className="w-6" src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" /></button>
                </div>

                <div>
                    <ul ref={sidemenuRef} className='dark:text-white dark:bg-c flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottm-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                        <div onClick={closemenu} className='absolute right-6 top-6'><Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer' /></div>
                        <li><a onClick={closemenu} className='font-Ovo' href="#top">Home</a></li>
                        <li><a onClick={closemenu} className='font-Ovo' href="#about">About Me</a></li>
                        <li><a onClick={closemenu} className='font-Ovo' href="#services">Services</a></li>
                        <li><a onClick={closemenu} className='font-Ovo' href="#work">My Work</a></li>
                        <li><a onClick={closemenu} className='font-Ovo' href="#contact">Contact Me</a></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}
