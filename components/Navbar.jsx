"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])
  return (
    <>
    <div className='fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/35 backdrop-blur-lg shadow-sm duration-500 dark:bg-[var(--color-dark-theme)/35] dark:text-white" : ""}`}>
        <a href="#top">
           <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-32 cursor-pointer mr-14'/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "":"backdrop-blur-lg bg-white shadow-sm bg-opacity-50 duration-500 dark:border border-white/50 dark:bg-transparent"} `}>
            <li><a className="font-jost" href="/">Home</a></li>
            <li><a className="font-jost" href="#about">About Me</a></li>
            <li><a className="font-jost" href="#services">Services</a></li>
            <li><a className="font-jost" href="#portfolio">Portfolio</a></li>
            <li><a className="font-jost" href="#contact">Contact Me</a></li>
        </ul>
        
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)} className='cursor-pointer'>
           <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6'/>
          </button>

          <a href="#contact" className='backdrop-blur-lg font-jost hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
          </a>

          <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
           <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6'/>
          </button>
        </div>
        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='text-white bg-[var(--color-dark-hover)] duration-500 flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transiton duration-500 dark:bg-[var(--color-light-hover)] dark:text-black'>
            <div className='absolute top-6 right-6' onClick={closeMenu}>
              <Image src={isDarkMode ? assets.close_black : assets.close_white} alt="" className='w-5 cursor-pointer'/>
            </div>

            <motion.li
            initial={{ opacity: 0,y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <a className="font-jost" onClick={closeMenu} href="#top">Home</a></motion.li>
            <motion.li
            initial={{ opacity: 0,y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <a className="font-jost" onClick={closeMenu} href="#about">About Me</a></motion.li>
            <motion.li
            initial={{ opacity: 0,y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            <a className="font-jost" onClick={closeMenu} href="#services">Services</a></motion.li>
            <motion.li
            initial={{ opacity: 0,y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}><a className="font-jost" onClick={closeMenu} href="#portfolio">Portfolio</a></motion.li>
            <motion.li
            initial={{ opacity: 0,y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}><a className="font-jost" onClick={closeMenu} href="#contact">Contact Me</a></motion.li>
            {/* <div><motion.li
            initial={{ opacity: 0,y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}><ul className='mt-20 grid grid-cols-4 gap-5' >
            <li><a target='_blank' href="https://www.instagram.com/vignite.digital/"><Image src={isDarkMode ? assets.instagram_dark : assets.instagram_light} alt="" style="width: 50px; height: 50px;" className='w-6'/></a></li>
            <li><a target='_blank' href="https://www.facebook.com/profile.php?id=61582332733444"><Image src={isDarkMode ? assets.facebook_dark : assets.facebook_light} alt="" style="width: 50px; height: 50px;" className='w-6'/></a></li>
            <li><a target='_blank' href=""><Image src={isDarkMode ? assets.whatsapp_dark : assets.whatsapp_light} alt="" style="width: 50px; height: 50px;" className='w-6'/></a></li>
            <li><a target='_blank' href="https://www.youtube.com/@vignite.digital"><Image src={isDarkMode ? assets.youtube_dark : assets.youtube_light} alt="" style="width: 50px; height: 50px;" className='w-6'/></a></li>
            </ul></motion.li>
            </div> */}

        </ul>
    </nav>
      
    </>
  )
}

export default Navbar
