import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt20'>
      <h4 className='text-center mb-2 text-xl font-jost'>What I Offer</h4>
      <h2 className='text-center text-5xl font-jost'>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>
        I offer a wide range of end to end Branding services to help you reach to the target audience and achieve your marketing goals with effective strategies and creative solutions.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {serviceData.map(({icon, title, description, link},index) => (
          <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--shadow-black)] hover:bg-[var(--color-light-hover)] hover:-translate-y-1 duration-500 backdrop-blur-sm dark:hover:shadow-[var(--shadow-white)] dark:hover:bg-[var(--color-dark-hover)]'>
            <Image src={icon} alt={title} className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-500 leading-5 dark:text-white/80'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 cursor-pointer' target="_blank" rel="noopener noreferrer">Read More<Image src={assets.right_arrow} alt='' className='w-4'/></a>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default Services
