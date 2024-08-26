import React, { useState } from 'react'
import Img from './Images/Vise_front2-663x551.jpg'
import { motion, useAnimation } from 'framer-motion'

export default function Featured() {
    
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }

  return (
    <div className='w-full py-20 bg-zinc-100'>
        <div className='w-full px-20 pb-10 border-b-[1px] border-zinc-500'>
            <h1 className='text-5xl tracking-tight'>Featured Projects</h1>
        </div>
        <div className='w-full flex gap-3 px-20 py-10 bg-zinc-100 '>
            <motion.div 
                onHoverStart={()=>handleHover(0)} 
                onHoverEnd={()=>handleHoverEnd(0)}
                className='relative card w-1/2  h-[75vh]'>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] z-[9] -mb-20 text-8xl leading-none tracking-tighter left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
                {"FYDE".split('').map((item, index)=>
                    <motion.span 
                        initial={{y:'100%'}} 
                        animate = {cards[0]}
                        transition={{ease: [0.37, 0, 0.63, 1], delay: index*.05}}
                        className='inline-block translate-y-full'>{item}
                    </motion.span>
                )}
                </h1>
                <div className='w-full h-full rounded-lg overflow-hidden'>
                    <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </motion.div>
            <motion.div
                onHoverStart={()=>handleHover(1)} 
                onHoverEnd={()=>handleHoverEnd(1)} 
                className='relative card w-1/2 h-[75vh] '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] z-[9] -mb-20 text-8xl leading-none tracking-tighter right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                {"VISE".split('').map((item, index)=>
                    <motion.span 
                        initial={{y:'100%'}} 
                        animate = {cards[1]}
                        transition={{ease: [0.37, 0, 0.63, 1], delay: index*.05}}
                        className="inline-block">
                            {item}
                    </motion.span>
                )}
                </h1>
                <div className='w-full h-full rounded-lg overflow-hidden'>
                    <img src={Img} alt="" />
                </div>
            </motion.div>
        </div>
      
    </div>
  )
}
