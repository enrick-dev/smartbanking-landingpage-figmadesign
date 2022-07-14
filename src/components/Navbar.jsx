import React from 'react'
import Logo from '../assets/imgs/Besniklogo.svg'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className='fixed flex flex-row  items-center justify-around w-full h-[50px] mt-8  '>
        <ul className='flex flex-row space-x-5  uppercase font-bold text-[14px] text-[#404041] '>
            <li>about</li>
            <li>how it works</li>
            <li>contact</li>
        </ul>
        <div>
            <img src={Logo} alt="Logo img" style={{width: '60px'}} />
        </div>
        <div>
            <BsCircle className='text-[#404041]'/>
            <HiOutlineShoppingBag className='text-[#DFDFDF]'/>
        </div>
    </div>
  )
}

export default Navbar