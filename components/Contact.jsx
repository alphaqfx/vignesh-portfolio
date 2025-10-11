'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import { assets } from '@/assets/assets'
import { data } from 'autoprefixer'
import { motion } from 'motion/react'

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "29757b2c-ae75-4257-87ad-b4ca4bd4322e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully!");
    } else {
        console.log("Error", res);
        setResult(res.message);
    }
  };
  return (
    <motion.div id='contact' 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    className='w-full px-[12%] py-10 scroll-mt20  bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4 
      initial={{ opacity: 0,y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-xl font-jost'>Connect with me</motion.h4>
      <motion.h2 
      initial={{ opacity: 0,y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-jost'>Get in touch</motion.h2>
      <motion.p 
      initial={{ opacity: 0,y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</motion.p>
      <motion.form onSubmit={onSubmit} 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 mb-8'>
            <motion.input 
            initial={{ opacity: 0,x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            name='name' type="text" placeholder='Enter Your Name' required className='backdrop-blur-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md dark:bg-[var(--color-dark-hover)]/30 dark:border-white/90'/>
            <motion.input 
            initial={{ opacity: 0,x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            name='email' type="email" placeholder='Enter Your Email' required className='backdrop-blur-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md dark:bg-[var(--color-dark-hover)]/30 dark:border-white/90'/>
        </div>
        <motion.textarea 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        name='message' rows="6" placeholder='Enter Your Message' required className='backdrop-blur-sm w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md dark:bg-[var(--color-dark-hover)]/30 dark:border-white/90'></motion.textarea>
        <br></br>
        <br></br>
        <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.9 }}
        type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] backdrop-blur-sm dark:hover:bg-[var(--color-dark-hover)]'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>   
    </motion.div>
  )
}

export default Contact
