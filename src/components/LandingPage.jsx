import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Img from './Images/bird.jfif'


export default function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '-.3' className='w-full h-screen bg-zinc-100 pt-1'>
        <div className='textstructure mt-20 p-20'>
            {["we create", "eye opning", "presentations"].map((item, index) =>{
                return(
                    <div className='masker'>
                        <div className='w-fit flex items-center'>
                            {index === 1 && ( 
                                <motion.div 
                                initial={{width:0}} 
                                animate={{width:'7vw'}} 
                                transition={{ease:[0.76, 0, 0.24, 1], duration:1.5}} 
                                className='w-[7vw] h-[5vw] rounded-md mt-2'>
                                    <img className='rounded-md' src={Img} alt="" />
                                </motion.div>
                                )}
                            <h1 className='uppercase text-[7vw] leading-[6vw] tracking-tighter font-bold'>{item}</h1>
                        </div>
                    </div>

            );
            })}
           
         
        </div>
        <div className='border-t-[1px] border-zinc-800 flex justify-between item-center py-5 px-20'>{[
            "for public and private companies", 
            "from the first pitch to IPO",
        ].map((item, index) =>(
                <p className='text-md tracking-tight capitalize font-light leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-5 py-1 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full'>start the project</div>
                <div className='w-8 h-8 border-[1px] border-zinc-500 rounded-full flex items-center justify-center'>   
                    <GoArrowUpRight/>
                </div>
            </div>
        </div>
    </div>
  )
}
