import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div id='services' 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='w-full px-[12%] py-10 scroll-mt20'>
      <motion.h4 
      initial={{ opacity: 0,y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-xl font-jost'>What I Offer</motion.h4>
      <motion.h2 
      initial={{ opacity: 0,y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-jost'>My Services</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>I offer a wide range of end to end Branding services to help you reach to the target audience and achieve your marketing goals with effective strategies and creative solutions.</motion.p>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {serviceData.map(({icon, title, description, link},index) => (
          <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[var(--shadow-black)] cursor-pointer hover:bg-[var(--color-light-hover)] hover:-translate-y-1 duration-500 backdrop-blur-sm dark:hover:shadow-[var(--shadow-white)] dark:hover:bg-[var(--color-dark-hover)]'>
            <Image src={icon} alt={title} className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-500 leading-5 dark:text-white/80'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read More<Image src={assets.right_arrow} alt='' className='w-4'/></a>
          </div>
        ))} 
      </motion.div>
    
    </motion.div>
  )
}

export default Services
