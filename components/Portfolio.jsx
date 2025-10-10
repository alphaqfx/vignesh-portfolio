import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Portfolio = ({isDarkMode}) => {
  return (
    <div id='portfolio' className='w-full px-[12%] py-10 scroll-mt20'>
      <h4 className='text-center mb-2 text-xl font-jost'>Portfolio</h4>
      <h2 className='text-center text-5xl font-jost'>My Latest Works</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>Here are some of my recent projects that showcase my skills and expertise in digital marketing.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black'>
        {workData.map((project,index) => (
          <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2> 
                    <p className='text-sm text-gray-700'>{project.description}</p>    
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} className='w-5' alt='send icon' />
                </div>
            </div>    
          </div>
        ))}
      </div>
    <a href="" className='backdrop-blur-sm w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-light-hover)] duration-500 dark:text-white dark:border-white dark:hover:bg-[var(--color-dark-hover)]'>Show More
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow" className='w-4'/>
    </a>
    </div>
  )
}

export default Portfolio
