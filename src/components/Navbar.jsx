import React from 'react'
import Logo from '../assets/Home/Nav/Besniklogo.svg'
import { HiColorSwatch, HiOutlineShoppingBag, HiTranslate } from "react-icons/hi";

function Navbar() {
  return (
    
      <div className=' px-3 flex flex-row bg-[#F8FCFF] w-screen max-w-[1300px]  items-center justify-between h-[50px]  '>
          <ul className='hidden md:flex flex-row uppercase tracking-normal font-semibold text-[15px] text-[#5b5b5b] '>
              <li className='cursor-pointer'>about</li>
              <li className='indent-12 cursor-pointer'>how it works</li>
              <li className='indent-12 cursor-pointer'>contact</li>
          </ul>
          {/* Mobile menu */}
          <div>df</div>
          <div>
              <img src={Logo} alt="Logo img" className=' w-[90px] translate-x-[-80px]' />
          </div>
          <div className='flex items-center justify-center border-[#DFDFDF] border-2 border-solid p-3.5 rounded-full cursor-pointer'>
              <HiOutlineShoppingBag className='text-[#5b5b5b] text-[20px] '/>
          </div>
      </div>
    
  )
}

export default Navbar