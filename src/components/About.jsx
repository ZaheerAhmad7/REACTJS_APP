import React from 'react'
import Img from './Images/office.png'

export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '-.1' className='w-full bg-[#CDEA68] rounded-t-lg'>
        <h1 className='text-black text-6xl p-20'>Ochi is a strategic presentation agency for forward-thinking 
            businesses that need to raise funds, sell prod­ucts, ex­plain 
            com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#a1b562] pt-10 p-20 pb-10'>
            <div className='w-1/2'>
                <h1 className='text-6xl'>Our approach:</h1>
                <button className='px-8 py-3 mt-8 bg-zinc-900 rounded-full text-zinc-100 text-xl uppercase flex gap-5 items-center'>Read More
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-slate-500'>
                <img className='w-full h-[70vh] rounded-3xl' src={Img} alt="img-office" />
            </div>
        </div>
    </div>
  )
}
