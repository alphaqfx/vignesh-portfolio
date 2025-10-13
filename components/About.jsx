import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import { info } from 'autoprefixer'

const About = ({ isDarkMode }) => {
return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt20'>
        <h4 className='text-center mb-2 text-xl font-jost'>Introduction</h4>
        <h2 className='text-center text-5xl font-jost'>About Me</h2>
    <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt="" className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
        <p className='mb-10 max-w-2xl font-jost'>
            I am a passionate and results-driven digital marketing specialist with a proven track record of creating impactful marketing strategies. With expertise in SEO, content creation, social media management, and data analytics, I help businesses enhance their online presence and achieve measurable growth.
        </p>
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description},index) => (
                <li 
                className='backdrop-blur-sm border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--color-light-hover)] hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-black)] dark:border-white dark:hover:shadow-[var(--shadow-white)] dark:bg-transparent dark:hover:bg-[var(--color-dark-hover)]' key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </li>
            ))}
        </ul>

        <h4 className='text-lg my-6 text-gray-700 font-jost dark:text-white/80'>Tools I use</h4>
        <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map(({tool},index) => (tool ? (
            <li className='backdrop-blur-sm bg-white flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-black)] dark:border-white dark:hover:shadow-[var(--shadow-white)] dark:bg-transparent dark:hover:bg-[var(--color-dark-hover)]' key={index}>
                <Image src={tool} alt="Tool" className='w-5 sm:w-7'/>
            </li>
            ):null))}
        </ul> 
        </div>
    </div>
    </div>
)
}

export default About
