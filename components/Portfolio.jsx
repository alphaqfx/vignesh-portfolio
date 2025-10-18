import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Portfolio = ({isDarkMode}) => {

  return (
    <div id='portfolio' className='w-full px-[12%] py-10 scroll-mt20'>
      <h4 className='text-center mb-2 text-xl font-jost'>Portfolio</h4>
      <h2 className='text-center text-5xl font-jost'>My Latest Works</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>Here are some of my recent projects that showcase my skills and expertise in digital marketing.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10 gap-5 dark:text-black justify-center justify-items-center'>
        
        <div className="relative w-full max-w-2xl h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
          src="https://www.youtube.com/embed/S14ptPVGEcU?autoplay=0&mute=0&loop=1&playlist=S14ptPVGEcU&modestbranding=1&rel=0&controls=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="relative w-full max-w-2xl h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
          src="https://www.youtube.com/embed/T2SN93Lmv-I?autoplay=0&mute=0&loop=1&playlist=T2SN93Lmv-I&modestbranding=1&rel=0&controls=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="relative w-full max-w-2xl h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
          src="https://www.youtube.com/embed/fo1tO3TLH5s?autoplay=0&mute=0&loop=1&playlist=fo1tO3TLH5s&modestbranding=1&rel=0&controls=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="relative w-full max-w-2xl h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
          src="https://www.youtube.com/embed/8cD6Cym5xpQ?autoplay=0&mute=0&loop=1&playlist=8cD6Cym5xpQ&modestbranding=1&rel=0&controls=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="relative w-full max-w-2xl h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
          src="https://www.youtube.com/embed/AG-GQBBh0r4?autoplay=0&mute=0&loop=1&playlist=AG-GQBBh0r4&modestbranding=1&rel=0&controls=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="relative w-full max-w-2xl h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
          src="https://www.youtube.com/embed/KIMmt0EcFt8?autoplay=0&mute=0&loop=1&playlist=KIMmt0EcFt8&modestbranding=1&rel=0&controls=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
      
    <a href="" className='backdrop-blur-sm w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-light-hover)] duration-500 dark:text-white dark:border-white dark:hover:bg-[var(--color-dark-hover)]'>Show More
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right arrow" className='w-4'/>
    </a>
    </div>

  )
}

export default Portfolio
