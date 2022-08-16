import n1 from '../assets/Home/Card/1.svg';
import n2 from '../assets/Home/Card/2.svg';
import n3 from '../assets/Home/Card/3.svg';
import n4 from '../assets/Home/Card/4.svg';
import n5 from '../assets/Home/Card/5.svg';
import n6 from '../assets/Home/Card/6.svg';
import n7 from '../assets/Home/Card/7.svg';
import n8 from '../assets/Home/Card/8.svg';
import IconCard from '../assets/Home/Buttons/credit-card.svg';
import IconEmail from '../assets/Home/Buttons/email.svg';
import IconForm from '../assets/Home/Buttons/form.svg';
import IconHand from '../assets/Home/Buttons/hand.svg';
import IconInfo from '../assets/Home/Buttons/info.svg';
import IconInfo2 from '../assets/Home/Buttons/info2.svg';
import Fire from '../assets/Home/Group/fire.svg';
import GroupImg from '../assets/Home/Group/GroupImg.svg';


import {React, useRef} from 'react'
import Navbar from './Navbar'
import { FaLongArrowAltRight } from "react-icons/fa";
import Chip from '../assets/Home/Card/Chip.svg';
import Visa from '../assets/Home/Card/Visa.svg';
import Ola from './ola.svg';
import { BiPlay } from "react-icons/bi";





function Home() {
  return (
    <div className='w-full h-screen flex '>
      {/* Container */}
      <div className=' pt-[52px] w-full mx-auto flex flex-col items-center'>
        {/* Navbar */}
        <Navbar className=' md:hidden'/>
        {/* Home */}
        <div  className='px-3 pt-[105px] bg-[#F8FCFF] w-screen max-w-[1300px] items-center justify-between  '>
          
          {/* Container Title e card  */}
          <div className='grid md:grid-cols-12 gap-4'>

            <div className=' md:col-span-5 pt-5'>
              <h1 id='titlebank' className='text-[#222223] text-[85px] font-bold leading-[5rem] xl:leading-10 cursor-default'>Banking </h1>
              <h1 id='titlebank' className='text-[#222223] text-[85px] font-bold leading-[5rem] xl:leading-normal cursor-default'>more smart</h1>
              <p className='pt-7 text-[#535354] text-[20px] font-normal tracking-tight leading-8 cursor-default'>Meet the only spend management <br/> platform and corporate card.</p>
              <div className='mt-11 flex items-center'>
                <button className='bg-[#222223] border-[#222223] border-2 p-4 '><FaLongArrowAltRight className='text-[18px] text-[#F3FAFE] animate-buttomHome'/></button>
                <p className='text-[#222223] indent-5 text-[20px] font-medium cursor-default'>Get your card</p>
              </div>
            </div>

            {/* Container do Card*/}
            <div className='pl-4 pt-8 md:col-span-7 grid md:grid-cols-12 w-[95%] md:w-full h-[800px] md:h-full'>
                <div className='bg-gradient-to-br from-[#80D1FF] to-[#3fa7e3] col-span-4 md:col-span-8 rounded-t-md md:rounded-l-md md:border-r-2 border-[#3288B9]'>
                  {/* Card */}
                  <div className='grid grid-rows-7 w-[195px] h-[120px] md:w-[390px] md:h-[240px] rotate-[-25deg] translate-y-[-1rem] translate-x-[-0.25rem] shadow-cardShadow hover:animate-bounceCard'>

                    <div className='row-span-1 flex items-center bg-gradient-to-r from-[#2B2B31] to-[#222223]'>
                      <div className='flex items-center justify-between pl-3 pr-5 md:pl-6 md:pr-10 h-full w-full'>
                        <img src={Chip} alt="Chip" className='rotate-[25deg] h-[25px] md:h-auto'/>
                        <div className='flex justify-between w-[48%]'>
                          <div className='flex'>
                            <img src={n1} alt="1" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px] '/>
                            <img src={n2} alt="2" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px]'/>
                            <img src={n3} alt="3" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px]'/>
                            <img src={n4} alt="4" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px]'/>
                          </div>
                          <div className='flex'>
                            <img src={n5} alt="5" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px]'/>
                            <img src={n6} alt="6" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px]'/>
                            <img src={n7} alt="7" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px]'/>
                            <img src={n8} alt="8" className='rotate-[25deg] w-3 md:w-6 mx-[-1.5px] md:mx-[-3px]'/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='row-span-6 bg-gradient-to-r from-[#F3FBFF] to-[#FFFFFF] flex flex-col justify-center '>
                      <div className='flex justify-center items-center'>
                        <img src={Visa} alt="Chip" className='rotate-[25deg] h-[33px] md:h-[auto]'/>
                      </div>
                      <div className='flex justify-between items-end px-1.5 md:px-3 translate-y-[0.875rem] md:translate-y-[1.75rem]' >
                        <h3 className='uppercase tracking-[0.2em] font-medium text-[7px] md:text-[14px] indent-2 text-[#818486]'>John smith</h3>
                        <div className='flex '>
                          <div className='bg-[#EB001B] h-[11.5px] w-[11.5px] md:h-[23px] md:w-[23px] rounded-full opacity-90'></div>
                          <div className='bg-[#FCCD43] h-[11.5px] w-[11.5px] md:h-[23px] md:w-[23px] rounded-full opacity-80 translate-x-[-0.25rem] md:translate-x-[-0.5rem]'></div>
                          <div></div>
                        </div>
                      </div>
                    </div>

                  </div>
                    
                  {/* Texto Circular */}
                  <div className='relative flex justify-end pr-8 translate-y-[-3rem]'>
                    <div className='absolute h-[120px] w-[120px] flex justify-center items-center'>
                      <BiPlay className='absolute text-[#254C63]'/>
                      <img src={Ola} alt=" relative TextCircle" className='animate-spinSlow ' />
                    </div>
                  </div>


                </div>


                {/* Container dos botões */}
                <div className='bg-gradient-to-bl from-[#FFD968] to-[#FAC422] col-span-4 rounded-b-md md:rounded-r-md'>
                  {/* Botões */}
                  <div className='flex justify-center items-center h-full w-full'>
                    <div className=' grid grid-cols-2 indent-12'>
                      <div className='my-3 mx-4 p-[1.8rem] rounded-[22px] flex justify-center items-center cursor-pointer shadow-2xl bg-[#F9FDFF] group'><img src={IconCard} alt="" className='absolute group-hover:animate-buttomHome'/></div>
                      <div className='my-3 mx-4 p-[1.8rem] rounded-[22px] flex justify-center items-center cursor-pointer shadow-2xl bg-[#F9FDFF] group'><img src={IconInfo} alt="" className='absolute group-hover:animate-buttomHome'/></div>
                      <div className='my-3 mx-4 p-[1.8rem] rounded-[22px] flex justify-center items-center cursor-pointer shadow-2xl bg-[#F9FDFF] group'><img src={IconForm} alt="" className='absolute group-hover:animate-buttomHome'/></div>
                      <div className='my-3 mx-4 p-[1.8rem] rounded-[22px] flex justify-center items-center cursor-pointer shadow-2xl bg-[#222223] group'><img src={IconHand} alt="" className='absolute group-hover:animate-buttomHome'/></div>
                      <div className='my-3 mx-4 p-[1.8rem] rounded-[22px] flex justify-center items-center cursor-pointer shadow-2xl bg-[#222223] group'><img src={IconEmail} alt="" className='absolute group-hover:animate-buttomHome'/></div>
                      <div className='my-3 mx-4 p-[1.8rem] rounded-[22px] flex justify-center items-center cursor-pointer shadow-2xl bg-[#F9FDFF] group'><img src={IconInfo2} alt="" className='absolute group-hover:animate-buttomHome'/></div>
                    </div>
                  </div>
                </div>

            </div>

          </div>

          
          <div className='mt-[110px] grid md:grid-cols-6'>

            <div className='col-span-2 pt-[20px] flex flex-col justify-around'>
              <div>
                <div className='flex items-center h-10'>
                  <h1 id='titlebank' className='text-[38px] font-bold text-[#222223]'>Hot</h1> <img src={Fire} alt=""/>
                </div>
                <h1 id='titlebank' className='text-[38px] font-bold text-[#222223] '>deals for you</h1>
              </div>
              <div>
                <p className='text-[16] font-normal text-[#5F5F64]'>Online shopping for retail sales <br/> direct to consumers</p>
              </div>
            </div>

            <div className='col-span-4 flex flex-col md:flex-row justify-between'>
              <div className='flex flex-col justify-around h-[200px]'>
                <img src={GroupImg} alt="" className='w-9'/>
                <h3 id='titlegroup' className='text-[20px] font-extrabold tracking-wide text-[#17181A]'>1.5% cashback</h3>
                <p className='text-[16] font-normal text-[#5F5F64]'>Online shopping for retail <br/> sales direct to consumers</p>
              </div>
              <div className='flex flex-col justify-around h-[200px]'>
                <img src={GroupImg} alt="" className='w-9'/>
                <h3 id='titlegroup' className='text-[20px] font-extrabold tracking-wide text-[#17181A]'>30-day terms</h3>
                <p className='text-[16] font-normal text-[#5F5F64]'>Online shopping for retail <br/> sales direct to consumers</p>
              </div>
              <div className='flex flex-col justify-around h-[200px]'>
                <img src={GroupImg} alt="" className='w-9'/>
                <h3 id='titlegroup' className='text-[20px] font-extrabold tracking-wide text-[#17181A]'>Save Money</h3>
                <p className='text-[16] font-normal text-[#5F5F64]'>Online shopping for retail <br/> sales direct to consumers</p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}




export default Home