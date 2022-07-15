import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <div className='w-full h-screen flex '>
      {/* Container */}
      <div className=' px-5 pt-[52px] w-full mx-auto flex flex-col items-center'>
        
        <Navbar/>

        <div  className=' grid grid-cols-12 gap-4  bg-[#F8FCFF] w-screen max-w-[1300px]  items-center justify-between  '>
          
          <div className=' col-span-5'>
            <h1 id='titlebank' className='text-[80px] font-bold'>Banking </h1>
            <h1 id='titlebank' className='text-[80px] font-bold'>more smart</h1>
            <p>Meet the only spend management platform and corporate card.</p>
            <button></button><p>Get your card</p>
          </div>
          <div className='col-span-7  bg-[#80D1FF] w-full h-full'>
              <div className=''></div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Home