import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <div className='w-full h-screen flex '>
      {/* Container */}
      <div className=' px-5 pt-[52px] w-full mx-auto flex flex-col items-center bg-slate-500'>
        
        <Navbar/>

        <div  className='bg-[#F8FCFF] w-screen max-w-[1300px]  items-center justify-between  '>
          
          <div className='flex box'>
            <h1>banking more smart</h1>
            <p>meet the only spend management platform and corporate card</p>
            <button></button><p>get your card</p>
          </div>
          <div>
              <div ></div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Home