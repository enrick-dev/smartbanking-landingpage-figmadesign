import React from 'react'
import Navbar from './Navbar'
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
  return (
    <div className='w-full h-screen flex '>
      {/* Container */}
      <div className=' pt-[52px] w-full mx-auto flex flex-col items-center'>
        
        <Navbar/>

        <div  className='px-3 pt-[105px] grid grid-cols-12 gap-4  bg-[#F8FCFF] w-screen max-w-[1300px]  items-center justify-between  '>
          
          <div className=' col-span-5 pt-5'>
            <h1 id='titlebank' className='text-[#222223] text-[85px] font-bold leading-10'>Banking </h1>
            <h1 id='titlebank' className='text-[#222223] text-[85px] font-bold'>more smart</h1>
            <p className='pt-7 text-[20px] font-normal tracking-tight leading-8 text-[#535354] '>Meet the only spend management <br/> platform and corporate card.</p>
            <div className='mt-11 flex items-center'>
              <button className='bg-[#222223] border-[#222223] border-2 p-4 '><FaLongArrowAltRight className='text-[18px] text-[#F3FAFE]'/></button>
              <p className='text-[#222223] indent-5 text-[20px] font-medium'>Get your card</p>
            </div>
          </div>
          {/* 80D1FF */}
          <div className='pl-4 pt-8 col-span-7 grid grid-cols-12 w-full h-full'>
              <div className='bg-gradient-to-r from-[#80D1FF] to-[#44B2F1] col-span-8 rounded-l-md border-r-2 border-[#3288B9]'></div>
              <div className='bg-gradient-to-b from-[#FFD968] to-[#FAC422] col-span-4 rounded-r-md'></div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Home