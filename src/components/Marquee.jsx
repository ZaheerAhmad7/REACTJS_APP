import { motion } from 'framer-motion'
import React from 'react'

export default function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '.1' className='relative w-full rounded-t-lg bg-[#004d43] py-20'>
        <div className='text border-t-2 border-b-2 border-zinc-100 flex whitespace-nowrap overflow-hidden'>
            {/* <motion.h1 initial={{x: 0}} x animate={{x: "-100%"}} transition={{animation: 'moveLeft 20s infinite ease-in'}} className='text-[15vw] leading-none font-semibold text-zinc-100'>WE ARE OCHI</motion.h1> */}
            <motion.h1 initial={{x: '0%'}} x animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='text-[15vw] leading-none font-semibold text-zinc-100 pr-10'>WE ARE OCHI</motion.h1>   
            <motion.h1 initial={{x: '0%'}} x animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='text-[15vw] leading-none font-semibold text-zinc-100 pr-10'>WE ARE OCHI</motion.h1>   

        </div>
    </div>
  )
}
