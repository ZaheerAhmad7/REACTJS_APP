import React from 'react'

export default function Cards() {
  return (
    <div className='w-full flex gap-5 px-20 bg-zinc-100'>
        <div className='relative w-1/2 h-96 bg-[#004D43] rounded-lg flex justify-center items-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-3 py-1 border-2 left-10 bottom-10 rounded-full text-[#CDEA68] border-[#CDEA68]'>
                &copy;2022-2024
            </button>
        </div>
        <div className='w-1/2 h-96  flex gap-5'>
            <div className='relative w-1/2 rounded-xl bg-zinc-900 flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-3 py-1 border-2 left-10 bottom-10 rounded-full text-[#CDEA68] border-[#CDEA68]'>
                    &copy;2022-2024
                </button>
            </div>
            <div className='relative w-1/2 rounded-xl bg-zinc-900 flex justify-center items-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-3 py-1 border-2 left-10 bottom-10 rounded-full text-[#CDEA68] border-[#CDEA68]'>
                    &copy;2022-2024
                </button>
            </div>

        </div>  
    </div>
  )
}
