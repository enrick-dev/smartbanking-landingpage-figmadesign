import n1 from '../assets/imgs/Card/1.svg';
import n2 from '../assets/imgs/Card/2.svg';
import n3 from '../assets/imgs/Card/3.svg';
import n4 from '../assets/imgs/Card/4.svg';
import n5 from '../assets/imgs/Card/5.svg';
import n6 from '../assets/imgs/Card/6.svg';
import n7 from '../assets/imgs/Card/7.svg';
import n8 from '../assets/imgs/Card/8.svg';
import React from 'react'
import Navbar from './Navbar'
import { FaLongArrowAltRight } from "react-icons/fa";
import Chip from '../assets/imgs/Card/Chip.svg';
import Visa from '../assets/imgs/Card/Visa.svg'




function Home() {
  return (
    <div className='w-full h-screen flex '>
      {/* Container */}
      <div className=' pt-[52px] w-full mx-auto flex flex-col items-center'>
        {/* Navbar */}
        <Navbar/>
        {/* Home */}
        <div  className='px-3 pt-[105px] grid grid-cols-12 gap-4  bg-[#F8FCFF] w-screen max-w-[1300px]  items-center justify-between  '>
          
          <div className=' col-span-5 pt-5'>
            <h1 id='titlebank' className='text-[#222223] text-[85px] font-bold leading-10 cursor-default'>Banking </h1>
            <h1 id='titlebank' className='text-[#222223] text-[85px] font-bold cursor-default'>more smart</h1>
            <p className='pt-7 text-[#535354] text-[20px] font-normal tracking-tight leading-8 cursor-default'>Meet the only spend management <br/> platform and corporate card.</p>
            <div className='mt-11 flex items-center'>
              <button className='bg-[#222223] border-[#222223] border-2 p-4 '><FaLongArrowAltRight className='text-[18px] text-[#F3FAFE]'/></button>
              <p className='text-[#222223] indent-5 text-[20px] font-medium cursor-default'>Get your card</p>
            </div>
          </div>

          {/* Container do Card*/}
          <div className='pl-4 pt-8 col-span-7 grid grid-cols-12 w-full h-full '>
              <div className='bg-gradient-to-br from-[#80D1FF] to-[#44B2F1] col-span-8 rounded-l-md border-r-2 border-[#3288B9]'>
                {/* Card */}
                <div className='grid grid-rows-7 w-[390px] h-[240px] rotate-[-25deg] translate-y-[-1rem] translate-x-[-0.25rem] shadow-2xl'>

                  <div className='row-span-1 flex items-center bg-gradient-to-r from-[#2B2B31] to-[#222223]'>
                    <div className='flex items-center justify-between pl-6 pr-10 h-full w-full'>
                      <img src={Chip} alt="Chip" className='rotate-[25deg] '/>
                      <div className='flex justify-between w-[48%]'>
                        <div className='flex'>
                          <img src={n1} alt="1" className='rotate-[25deg] w-6 mx-[-3px] '/>
                          <img src={n2} alt="2" className='rotate-[25deg] w-6 mx-[-3px]'/>
                          <img src={n3} alt="3" className='rotate-[25deg] w-6 mx-[-3px]'/>
                          <img src={n4} alt="4" className='rotate-[25deg] w-6 mx-[-3px]'/>
                        </div>
                        <div className='flex'>
                          <img src={n5} alt="5" className='rotate-[25deg] w-6 mx-[-3px]'/>
                          <img src={n6} alt="6" className='rotate-[25deg] w-6 mx-[-3px]'/>
                          <img src={n7} alt="7" className='rotate-[25deg] w-6 mx-[-3px]'/>
                          <img src={n8} alt="8" className='rotate-[25deg] w-6 mx-[-3px]'/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row-span-6 bg-gradient-to-r from-[#F3FBFF] to-[#FFFFFF] flex flex-col justify-center '>
                    <div className='flex justify-center items-center'>
                      <img src={Visa} alt="Chip" className='rotate-[25deg] '/>
                    </div>
                    <div className='flex justify-between items-end px-3 translate-y-[1.75rem]' >
                      <h3 className='uppercase tracking-[0.2em] font-medium text-[14px] indent-2 text-[#818486]'>John smith</h3>
                      <div className='flex '>
                        <div className='bg-[#EB001B] h-[23px] w-[23px] rounded-full opacity-90'></div>
                        <div className='bg-[#FCCD43] h-[23px] w-[23px] rounded-full opacity-80 translate-x-[-0.5rem]'></div>
                        <div></div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>


              {/* Container dos botões */}
              <div className='bg-gradient-to-bl from-[#FFD968] to-[#FAC422] col-span-4 rounded-r-md'>
                {/* Botões */}
              </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Home