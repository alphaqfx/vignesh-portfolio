import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <br></br>
      <br></br>
      <div>
        <Image src={assets.profile_img} alt="" className='rounded-full w-32'/>        
      </div>
        
        <h3 className='flex items-end gap-2 text-xl md:text-2xl font-jost mb-3'>
          Hi! I'm Vignesh Uthiravelu
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[50px] font-jost'>
            Digital Marketing Specialist
        </h1>
        <p className='max-w-2xl mx-auto font-jost'>
        I help businesses grow by creating and implementing effective digital marketing strategies that drive traffic, increase conversions, and boost revenue.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='backdrop-blur-sm px-10 py-3 border rounded-full bg-black text-white border-white-500 flex items-center gap-2 dark:bg-transparent dark:hover:bg-[var(--color-dark-hover)] duration-500'>Contact Me
                <Image src={assets.right_arrow_white} alt="" className='w-4'/>
            </a>
            <a href="/sample-resume.pdf" download className='backdrop-blur-sm px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My Resume
                <Image src={assets.download_icon} alt="" className='w-4'/>
            </a>
        </div>
    </div>
  )
}

export default Header
